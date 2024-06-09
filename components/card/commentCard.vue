<template>
  <div class="comment">
    <h4 class="comment__title title_medium"><i></i>댓글</h4>
    <div class="comment__box">
      <textarea class="comment__input" v-model="commentContent"></textarea>
      <button class="comment__btn-send title_small" @click="saveCommentInfo">
        등록
      </button>
      <button class="comment__btn-edit" v-if="myInfo.nick === writerInfo">
        댓글 편집하기
      </button>
    </div>

    <ul class="comment__list">
      <!-- <template v-if="commentInfo"> -->
      <li class="comment__lst" v-for="idx in 3" :key="idx">
        <div class="comment__wrap">
          <div class="comment__thumb">
            <img src="@/assets/imgs/profile/profile_01.png" />
          </div>
          <div class="comment__info">
            <p class="body_default comment__nick">{{ "맛집탐험대" }}</p>
            <p class="body_medium comment__content">
              {{ "저희집 댕댕이랑 같이 갈 수 있을만한 캠핑장소 추천해주세요!" }}
            </p>
          </div>
          <span class="body_small comment__time">{{ "12분 전" }}</span>
        </div>
      </li>
      <!-- </template> -->

      <!-- <li class="comment__list" v-else>
        <div class="list__none"></div>
        </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "commentCard",
  data() {
    return {
      commentContent: "",
    };
  },
  props: {
    commentInfo: {
      type: Array,
      default: () => [],
    },
    writerInfo: { type: String, default: "" },
    idxInfo: { type: Number, default: null },
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    saveCommentInfo() {
      if (this.commentContent === '') {
        // 컨펌창 띄우기
      }

      const commentInfo = {
        boardIdx: this.idxInfo,
        commentContent: {
          id: Date.now(),
          date: Date.now(),
          writer: this.myInfo.nick,
          writerThumb: this.myInfo.photoList[0] || "",
        },
      };

      this.$store.commit("board/saveCommentInfo", commentInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/commentCard.scss";
</style>
