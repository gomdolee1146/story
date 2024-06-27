<template>
  <div class="comment">
    <h4 class="comment__title title_small">
      <span>{{ commentLength }}개의 </span>댓글 보기
    </h4>
    <div class="comment__box">
      <textarea class="comment__input" v-model="commentContent"></textarea>
      <button class="comment__btn-send title_small" @click="saveCommentInfo">
        등록
      </button>
      <button
        class="comment__btn-edit"
        @click="editCommentList"
        v-if="myInfo.nick === writerInfo"
      >
        댓글 편집하기
      </button>
    </div>

    <ul class="comment__list">
      <template v-if="commentList">
        <li
          class="comment__lst"
          v-for="(comment, idx) in commentList"
          :key="idx"
        >
          <div class="comment__check" v-if="isShowEdit">
            <input
              type="checkbox"
              :value="`checkComment${idx}`"
              @input="saveNumber($event, idx)"
            />
            <label></label>
          </div>
          <div class="comment__wrap">
            <div class="comment__thumb">
              <img :src="comment.writerThumb" />
            </div>
            <div class="comment__info">
              <p class="body_default comment__nick">{{ comment.writer }}</p>
              <div class="body_medium comment__content">
                {{ comment.commentContent }}
              </div>
            </div>
            <div class="comment__option">
              <span class="body_small comment__time">
                {{ timeFormat(comment.date) }}
              </span>
              <button
                class="comment__btn-del"
                v-if="comment.writer === myInfo.nick"
                @click="deleteMyComment(idx)"
              ></button>
            </div>
          </div>
        </li>
      </template>

      <li class="comment__list" v-else>
        <noneBox :noneTxt="'첫번째 댓글을 달아보세요!'" />
      </li>
    </ul>
    <div class="comment__edit" v-if="isShowEdit">
      <button class="comment__edit-done" @click="deleteComment">삭제</button>
      <button class="comment__edit-cancel" @click="cancelEditComment">
        취소
      </button>
    </div>
    <system-confirm
      v-if="isShowConfirm"
      :confirm="confirm"
      @hideConfirm="hideConfirm"
    />
  </div>
</template>

<script>
import { _ } from "core-js";
import { timeFormat } from "@/mixins/timeFormat";

export default {
  name: "commentCard",
  mixins: [timeFormat],
  data() {
    return {
      checkNum: [],
      check: false,
      isShowEdit: false,
      commentContent: "",
      idNum: this.$route.params.id,

      isShowConfirm: false,
      confirm: {
        text: "",
        cancelTxt: "확인",
        isShowDoneBtn: false,
        cancelClass: "confirm__btn-done",
      },
    };
  },
  props: {
    writerInfo: { type: String, default: "" },
    id: { type: String, default: "" },
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
    commentList() {
      let board = this.$store.state.board.boardInfo;

      let data = board.find((e) => {
        return e.id.toString() === this.id.toString();
      });
      return data.commentList || {};
    },
    commentLength() {
      return this.commentList.length || 0;
    },
  },
  methods: {
    saveCommentInfo() {
      if (this.commentContent === "") {
        this.isShowConfirm = true;
        this.confirm.text = "댓글 내용을 입력해주세요.";
      } else {
        const commentInfo = {
          boardId: this.idNum,
          commentContent: {
            id: Date.now(),
            date: Date.now(),
            commentContent: this.commentContent,
            writer: this.myInfo.nick,
            writerThumb: this.myInfo.photoList ? this.myInfo.photoList[0] : "",
          },
        };

        this.$store.commit("board/saveCommentInfo", commentInfo);
        this.commentContent = "";
      }
    },
    editCommentList() {
      this.isShowEdit = !this.isShowEdit;
    },
    saveNumber(el, idx) {
      if (el.target.checked) {
        this.checkNum.push(idx);
      } else {
        _.remove(this.checkNum, (o) => {
          return o === idx;
        });
      }
    },
    deleteMyComment(idx) {
      const myCommentInfo = {
        boardId: this.id,
        myCommentNum: idx,
      };
      this.$store.commit("board/deleteMyComment", myCommentInfo);
    },
    deleteComment() {
      const deleteList = {
        boardId: this.id,
        deleteNum: this.checkNum,
      };
      this.$store.commit("board/deleteCommentList", deleteList);
      this.isShowEdit = false;
    },
    cancelEditComment() {
      this.isShowEdit = false;
      this.check = false; // 확인 필요, 변수 수정
    },
    hideConfirm(isShow) {
      this.isShowConfirm = isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/commentCard.scss";
</style>
