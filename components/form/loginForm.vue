<template>
  <div class="login">
    <h4 class="login__logo">SSSTORY</h4>
    <div class="login__wrap">
      <div class="txt__box">
        <input
          v-model="loginId"
          type="text"
          class="txt__input"
          @input="checkLoginID"
        />
        <label class="txt__label">아이디</label>
        <span v-if="isIdCheck" class="txt__label">{{ idCheckTxt }}</span>
      </div>
      <div class="txt__box">
        <input
          v-model="loginPw"
          type="password"
          class="txt__input"
          @input="checkLoginPW"
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

      isIdCheck: false,
      idCheckTxt: "",
      idCheckResult: false,

      isPwCheck: false,
      pwCheckTxt: "",
      pwCheckResult: false,
    };
  },
  methods: {
    goToJoin() {
      this.$router.push("/auth/join");
    },

    // 로그인 완료
    loginSubmit() {
      if (this.idCheckResult && this.pwCheckResult) {
        this.$router.push("/");
        console.log(this.$store.state.auth.userInfo);
      }
    },

    // 아이디 영역 유효성 검사
    checkLoginID() {
      const { idCheck, idCheckTxt, idCheckResult } = this.checkId(this.loginId);
      this.isIdCheck = idCheck;
      this.idCheckTxt = idCheckTxt;
      this.idCheckResult = idCheckResult;
    },
    // PW 영역 유효성 검사
    checkLoginPW() {
      const { pwCheck, pwCheckTxt, pwCheckResult } = this.checkPw(this.loginPw);
      this.isPwCheck = pwCheck;
      this.pwCheckTxt = pwCheckTxt;
      this.pwCheckResult = pwCheckResult;
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/input/textarea.scss";
@import "@/assets/scss/components/form/loginForm.scss";
</style>
