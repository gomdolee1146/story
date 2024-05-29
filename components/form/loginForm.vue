<template>
  <div class="login">
    <h4 class="login__logo">SSSTORY</h4>
    <div class="login__wrap">
      <div class="txt__box">
        <input
          v-model="loginId"
          type="text"
          class="txt__input"
        />
        <label class="txt__label">아이디</label>
      </div>
      <div class="txt__box">
        <input
          v-model="loginPw"
          type="password"
          class="txt__input"
        />
        <label class="txt__label">비밀번호</label>
      </div>
    </div>
    <button class="login__btn login__btn-login" @click="loginSubmit">
      로그인하기
    </button>
    <button class="login__btn login__btn-join" @click="goToJoin">
      회원가입
    </button>
  </div>
</template>

<script>
import { authCheck } from "@/mixins/authCheck";
export default {
  name: "loginForm",
  mixins: [authCheck],
  components: {},
  layout: "default",
  props: {},
  data() {
    return {
      loginId: "",
      loginPw: "",

      idCheckResult: false,
      pwCheckResult: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.auth.userInfo;
    },
  },
  methods: {
    goToJoin() {
      this.$router.push("/auth/join");
    },

    loginSubmit() {
      let checkIdx = _.findIndex(this.userInfo.value, (o) => {
        return o.id === this.loginId;
      });

      this.idCheckResult =
        this.userInfo.value[checkIdx].id === this.loginId ? true : false;
      this.pwCheckResult =
        this.userInfo.value[checkIdx].pw === this.loginPw ? true : false;

      if (this.idCheckResult && this.pwCheckResult) {
        this.$store.dispatch('LOGIN', this.userInfo.value[checkIdx])
        this.$router.push("/");
      } else {
        console.log("에러메시지 보이는 경우의수 확인해서 작성하기");
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/input/textarea.scss";
@import "@/assets/scss/components/form/loginForm.scss";
</style>
