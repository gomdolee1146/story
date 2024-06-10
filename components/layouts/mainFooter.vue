<template>
  <div class="main_footer">
    <button
      class="main_footer__btn main_footer__btn-home"
      :class="$route.path == '/' ? 'on' : ''"
      @click="goToHome"
      ref="btnHome"
    >
      <i></i>홈
    </button>
    <button class="main_footer__btn main_footer__btn-etc"><i></i>메뉴2</button>
    <button
      class="main_footer__btn main_footer__btn-mypage"
      :class="$route.path == '/mypage/' ? 'on' : ''"
      @click="goToMypage"
    >
      <i></i>마이페이지
    </button>
  </div>
</template>

<script>
export default {
  name: "mainFooter",
  components: {},
  layout: "default",
  props: {},
  data() {
    return {};
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToMypage() {
      this.$router.push("/mypage/");
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/layouts/mainFooter.scss";
</style>
