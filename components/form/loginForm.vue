<template>
  <div class="login">
    <h4 class="login__logo"></h4>
    <div class="login__wrap">
      <div class="txt__box">
        <input v-model="loginId" type="text" class="txt__input" required />
        <label class="txt__label">아이디</label>
      </div>
      <div class="txt__box">
        <input v-model="loginPw" type="password" class="txt__input" required />
        <label class="txt__label">비밀번호</label>
      </div>
    </div>
    <div class="login__btn_wrap">
      <button
        class="login__btn login__btn-login"
        :class="isActive ? 'on' : ''"
        @click="loginSubmit"
      >
        로그인하기
      </button>
      <button class="login__btn login__btn-join" @click="goToJoin">
        회원가입
      </button>
    </div>
    <system-confirm
      v-if="isShowConfirm"
      :confirm="confirm"
      @hideConfirm="hideConfirm"
    />
  </div>
</template>

<script>
import { authCheck } from "@/mixins/authCheck";
export default {
  name: "loginForm",
  mixins: [authCheck],
  layout: "default",
  data() {
    return {
      loginId: "",
      loginPw: "",

      idCheckResult: false,
      pwCheckResult: false,

      isShowConfirm: false,
      confirm: {
        text: "",
        cancelTxt: "확인",
        isShowDoneBtn: false,
        cancelClass: "confirm__btn-done",
      },
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.auth.userInfo;
    },
    isActive() {
      if (this.loginId && this.loginPw) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    goToJoin() {
      this.$router.push("/auth/join");
    },

    loginSubmit() {
      let checkIdx = _.findIndex(this.userInfo, (o) => {
        return o.userId === this.loginId;
      });

      if (checkIdx >= 0) {
        this.idCheckResult =
          this.userInfo[checkIdx].userId === this.loginId ? true : false;
        this.pwCheckResult =
          this.userInfo[checkIdx].password === this.loginPw ? true : false;

        if (this.idCheckResult && this.pwCheckResult) {
          this.$store.dispatch("LOGIN", this.userInfo[checkIdx]);
          this.$router.push("/");
        } else if (this.idCheckResult || this.pwCheckResult) {
          this.isShowConfirm = true;
          this.confirm.text = "비밀번호를 확인해주세요";
        }
      } else {
        this.isShowConfirm = true;
        this.confirm.text = "아이디와 비밀번호를 확인해주세요";
      }
    },
    hideConfirm(isShow) {
      this.isShowConfirm = isShow;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/input/textarea.scss";
@use "@/assets/scss/components/form/loginForm.scss";
</style>
