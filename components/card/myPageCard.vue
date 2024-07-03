<template>
  <div class="card">
    <div class="card__wrap">
      <div class="card__thumb">
        <img :src="myInfo.photoList" />
      </div>
      <div class="card__info">
        <p class="body_medium">안녕하세요!</p>
        <p class="title_small">{{ myInfo.nick }} 님!</p>
      </div>
      <button class="card__btn btn-edit" @click="goToEdit"><i></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPageCard",
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    goToEdit() {
      this.$router.push({
        name: "mypage-edit",
        params: {
          isEdit: true,
          userId: this.myInfo.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/myPageCard.scss";
</style>
