<template>
  <div class="btn_wrapper">
    <button class="btn-create" @click="goToCreate">
      <p class="body_esmall">남기고싶은 기억이 있나요?</p>
      <p class="body_large">추억 기록하기</p>
      <i></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "createButton",
  methods: {
    goToCreate() {
      this.$router.push("/board/create");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/button/button.scss";
.btn_wrapper {
  padding: 0 20px;
  margin: 16px 0;
}
</style>
