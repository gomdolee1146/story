<template>
  <section class="result">
    <div class="result__header">
      <div class="result__header_box">로스팅 테스트</div>
      <div class="result__thumb"><img src="" /></div>
      <div class="result__title"></div>
    </div>
    <div class="result__wrap pc__scroll">
      <div class="result__content">
        <div class="result__box"></div>
        <div class="result__box"></div>
        <div class="result__box"></div>
      </div>
      <div class="result__footer">
        <div class="result__footer_box">
          <h4>나와의 궁합은?</h4>
        </div>
        <div class="result__footer_box"></div>
        <div class="result__footer_box"></div>
      </div>
    </div>

    <button class="btn-reload">다시 시작하기</button>
  </section>
</template>

<script>
export default {
  name: "mbtiResult",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/mbti/mbtiCommon.scss";
@use "@/assets/scss/components/mbti/mbtiResult.scss";
</style>
