<template>
  <div class="card">
    <!-- 회원정보 영역 -->
    <div class="user card__user">
      <div class="user__thumb">
        <img :src="board.writerThumb" />
      </div>
      <div class="user__info">
        <p class="user__nick">{{ board.writer }}</p>
      </div>
      <div class="card__date">{{ timeFormat(board.date) }}</div>
    </div>

    <!-- 카드영역 -->
    <div class="card__content">
      <div class="card__content_box" @click="goToDetail(board.id)">
        <div class="card__title">{{ board.title }}</div>
        <div class="card__txt" v-html="escapeToEnter(board.content)"></div>
        <div class="card__info" v-if="board.commentList !== ''">
          <p class="card__info-cmt">
            {{ board.commentList?.length || 0 }}개의 댓글
          </p>
        </div>
      </div>

      <div class="card__like">
        <ul class="card__like_list">
          <li
            class="card__like_lst"
            v-for="(likeLst, idx) in setLikeUsers(board.likeUsers)"
            :key="idx"
          >
            <img class="card__like_thumb" :src="likeLst.photoList" />
          </li>
        </ul>
        <p class="card__like_txt" v-if="board.likeCount">
          <span>{{ board.likeUsers[0].nick }}님</span> 외
          {{ board.likeCount }}명이 좋아해요!
        </p>
        <p class="card__like_txt" v-else>첫번째 좋아요를 눌러보세요!</p>
      </div>
    </div>
    <div class="card__btn_wrap">
      <button class="card__btn card__btn-active" @click="addCount">
        좋아요
      </button>
      <button
        class="card__btn card__btn-inactive"
        @click="goToDetail(board.id)"
        v-if="$route.name !== 'board-id' && board.writer !== myInfo.nick"
      >
        댓글달기
      </button>
      <template v-if="board.writer == myInfo.nick">
        <button class="card__btn card__btn-inactive" @click="editBoardInfo">
          수정하기
        </button>
        <button class="card__btn card__btn-inactive" @click="deleteBoardInfo">
          삭제하기
        </button>
      </template>
    </div>

    <system-confirm
      v-if="isShowConfirm"
      :confirm="confirm"
      @hideConfirm="hideConfirm"
    />
  </div>
</template>

<script>
import { timeFormat } from "@/mixins/timeFormat";
import { common } from "@/mixins/common";

export default {
  name: "boardCard",
  mixins: [timeFormat, common],
  props: {
    board: {
      type: Object,
      default: () => {
        return {};
      },
    },
    idx: { type: Number, default: null },
    isDetail: { type: Boolean, default: false },
  },
  data() {
    return {
      isLikeOn: false,
      likeList: [],

      isShowConfirm: false,
      confirm: {
        text: "이미 좋아요를 누른 게시글입니다.",
        cancelTxt: "확인",
        isShowDoneBtn: false,
        cancelClass: "confirm__btn-done",
      },
    };
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
    likeModal() {
      return this.$store.state.board.likeModal;
    },
  },
  methods: {
    addCount() {
      // 좋아요 카운트 증가
      if (this.isLikeOn) return;

      this.isLikeOn = true;
      let likeInfo = {
        id: this.board.id,
        likeUserInfo: this.myInfo,
      };

      this.$store.commit("board/addLikeCount", likeInfo);
      if (this.likeModal) this.isShowConfirm = true;
    },
    goToDetail(id) {
      if (this.isDetail) return;
      this.$router.push({
        path: "/board/" + id,
        params: {
          id: id,
        },
      });
    },
    editBoardInfo() {
      this.$router.push({
        name: "board-create",
        params: {
          isEdit: true,
          boardId: this.board.id,
        },
      });
    },
    deleteBoardInfo() {
      this.$store.commit("board/deleteBoardInfo", this.board.id);
      this.$router.push("/");
    },
    setLikeUsers(likeList) {
      return likeList.slice(0, 2);
    },
    hideConfirm(isShow) {
      this.isShowConfirm = isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/boardCard.scss";
</style>
