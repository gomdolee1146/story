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
export default {
  name: "loginForm",
  components: {},
  layout: "default",
  props: {},
  data() {
    return {
      loginId: "",
      loginPw: "",

      isIdCheck: false,
      idCheckTxt: "",
      isPwCheck: false,
      pwCheckTxt: "",
    };
  },
  methods: {
    goToJoin() {
      this.$router.push("/auth/join");
    },

    // 로그인 완료
    loginSubmit() {
      // 로컬스토리지에 저장되어있는 값 비교 필요
      if (this.checkLoginID && this.checkLoginPW) {
        // 작성된 id랑 pw랑 어딘가에 저장해야댐
        this.$router.push("/");
        console.log("메인페이지로 이동");
      }
    },

    // 아이디 영역 유효성 검사
    checkLoginID() {
      const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
      const result = idValCheck.test(this.loginId);
      if (!result) {
        this.isIdCheck = true;
        this.idCheckTxt = "아이디를 정확하게 입력해주세요.";
      } else {
        this.isIdCheck = false;
        return true;
      }
    },
    // PW 영역 유효성 검사
    checkLoginPW() {
      const pwValCheck =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
      const result = pwValCheck.test(this.loginPw);
      if (!result) {
        this.isPwCheck = true;
        this.pwCheckTxt = "영문,숫자,특문조합 8자리 이상 입력해주세요.";
      } else {
        this.isPwCheck = false;
        return true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/input/textarea.scss";
@import "@/assets/scss/components/form/loginForm.scss";
</style>
