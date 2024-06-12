<template>
  <div class="btn__wrap">
    <button class="btn-edit" @click="logoutStory">로그아웃</button>
    <button class="btn-leave" @click="leaveStory">회원탈퇴</button>
  </div>
</template>

<script>
export default {
  name: "myPageBox",
  data() {
    return {
      leaveInfo: {
        isShowConfirm: true,
        confirm: {
          cancelTxt: "취소",
          doneTxt: "탈퇴할께요",
          text: "회원탈퇴를 진행하시겠습니까?",
          isShowDoneBtn: true,
        },
      },
    };
  },
  methods: {
    logoutStory() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    leaveStory() {
      this.$emit("leaveStory", this.leaveInfo);
    },
  },
};
</script>

<style></style>
