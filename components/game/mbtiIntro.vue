<template>
  <section class="intro">
    <div class="intro__wrap">
      <div class="intro__ico_box">
        <i class="intro__ico" v-for="idx in 4" :key="idx"></i>
      </div>
      <div class="intro__title">
        <span class="intro__txt">- MBTI -</span>
        <h4 class="intro__title_txt">댕냥 테스트</h4>
      </div>
      <div class="intro__box">
        <div class="mbti__desc">
          <span>이런게 좋아!</span>
          <i class="ico-like"></i>
        </div>
        <div class="mbti__desc">
          <span>이런게 싫어!</span>
          <i class="ico-xmark"></i>
        </div>
        <div class="mbti__desc">
          <span>나의 특징은?</span>
          <i class="ico-check"></i>
        </div>
      </div>
    </div>
    <div class="mbti__btn_wrap">
      <button @click="showMBTI">시작하기</button>
      <button @click="endGame">게임메인으로</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "mbtiIntro",
  methods: {
    showMBTI() {
      this.$emit("showMBTI");
    },
    endGame() {
      this.$router.push("/game/");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/mbtiCommon.scss";
@use "@/assets/scss/components/game/mbtiIntro.scss";
</style>
