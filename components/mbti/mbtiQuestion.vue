<template>
  <section class="question">
    <div class="question__progress">
      <div class="question__progress_bg"></div>
      <div class="question__progress_bar"></div>
    </div>
    <div class="question__wrap">
      <div class="question__title"></div>
      <div class="question__btn_wrap">
        <button class="question__btn-a"></button>
        <button class="question__btn-b"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mbtiQuestion",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/mbti/mbtiCommon.scss";
@use "@/assets/scss/components/mbti/mbtiQuestion.scss";
</style>
