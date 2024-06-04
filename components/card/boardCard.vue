<template>
  <div class="card">
    <!-- 회원정보 영역 -->
    <div class="user card__user">
      <div class="user__thumb">
        <!-- <img src="@/assets/imgs/img_profile_f01.png" /> -->
      </div>
      <div class="user__info">
        <p class="user__nick">{{ board.writer }}</p>
      </div>
      <div class="card__date">{{ "2 weeks ago" }}</div>
    </div>

    <!-- 카드영역 -->
    <div class="card__content">
      <div class="card__title">{{ board.title }}</div>
      <div class="card__txt">{{ board.content }}</div>
      <div class="card__info" v-if="board.commentList !== ''">
        <p class="card__info-cmt">{{ board.commentList.length }}개의 댓글</p>
      </div>
      <div class="card__like">
        <ul class="card__like_list">
          <li
            class="card__like_lst"
            v-for="(likeLst, idx) in board.likeUsers"
            :key="idx"
          >
            <img class="card__like_thumb" :src="likeLst" />
          </li>
        </ul>
        <p class="card__like_txt" v-if="board.likeCount">
          외 {{ board.likeCount }}명이 좋아해요!
        </p>
        <p class="card__like_txt" v-else>첫번째 좋아요를 눌러보세요!</p>
      </div>
    </div>
    <div class="card__btn_wrap">
      <button class="card__btn card__btn-active" @click="addCount">
        좋아요
      </button>
      <button class="card__btn card__btn-inactive">댓글달기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "boardCard",
  components: {},
  props: {
    board: {
      type: Object,
      default: () => {
        return {};
      },
    },
    idx: { type: Number, default: null },
  },
  data() {
    return {
      isLikeOn: false,
      likeList: [],
    };
  },
  methods: {
    addCount() {
      if (this.isLikeOn) return;

      this.isLikeOn = true;
      this.$store.commit("board/addLikeCount", this.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/boardCard.scss";
</style>
