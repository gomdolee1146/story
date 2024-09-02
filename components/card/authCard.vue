<template>
  <div class="auth">
    <h4 class="auth__title">테스트 계정</h4>
    <ul class="auth__list">
      <li v-for="(account, idx) in testAccount" :key="idx">
        <div class="auth__box">
          <h4>{{ account.nick }}</h4>
          <p>ID: {{ account.userId }}</p>
          <p>PW: {{ account.password }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "authCard",
  data() {
    return {};
  },
  computed: {
    testAccount() {
      // 테스트 계정 리스트
      const allUserList = this.$store.state.auth.userInfo;
      return allUserList.slice(0, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/authCard.scss";
</style>
