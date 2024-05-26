<template>
  <div class="join">
    <h4 class="join__title">회원가입</h4>
    <div class="join__wrap">
      <div class="txt__box">
        <input
          v-model="joinId"
          type="text"
          class="txt__input"
          @input="checkJoinID"
        />
        <label class="txt__label">아이디</label>
        <span v-if="isIdCheck" class="txt__desc">{{ idCheckTxt }}</span>
      </div>
      <div class="txt__box">
        <input
          v-model="joinNick"
          type="text"
          class="txt__input"
          @input="checkJoinNick"
        />
        <label class="txt__label">닉네임</label>
        <span v-if="isNickCheck" class="txt__desc">{{ nickCheckTxt }}</span>
      </div>
      <div class="txt__box">
        <input
          v-model="joinPw"
          type="password"
          class="txt__input"
          @input="checkJoinPW"
        />
        <label class="txt__label">비밀번호</label>
        <span v-if="isPwCheck" class="txt__desc">{{ pwCheckTxt }}</span>
      </div>
      <div class="txt__box">
        <input
          v-model="joinPwCheck"
          type="password"
          class="txt__input"
          @input="checkJoinPwValid"
        />
        <label class="txt__label">비밀번호확인</label>
        <span v-if="isPwValidateCheck" class="txt__desc">
          {{ pwValidCheckTxt }}
        </span>
      </div>
    </div>
    <button class="join__btn-done" @click="joinSubmit">회원가입완료</button>
  </div>
</template>

<script>
export default {
  name: "joinForm",
  data() {
    return {
      joinId: "",
      joinNick: "",
      joinPw: "",
      joinPwCheck: "",
      userInfo: {},
      isIdCheck: false,
      idCheckTxt: "",
      isNickCheck: false,
      nickCheckTxt: "",
      isPwCheck: false,
      pwCheckTxt: "",
      isPwValidateCheck: false,
      pwValidCheckTxt: "",
    };
  },
  computed: {
    test() {},
  },
  methods: {
    goToLogin() {
      this.$router.push("/auth/login");
    },

    // 회원가입 완료
    joinSubmit() {
      this.$router.push("/auth/login");

      // const userInfo = {};
      // userInfo.id = this.joinId;
      // userInfo.nick = this.joinNick;
      // userInfo.pw = this.joinPw;
      // console.log(userInfo);
      // if (
      //   this.checkJoinID &&
      //   this.checkJoinNick &&
      //   this.checkJoinPW &&
      //   this.checkJoinPwValid
      // ) {
      //   this.$store.commit("auth/addUserInfo", userInfo);
      // }
    },

    // 아이디 영역 유효성 검사
    checkJoinID() {
      const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
      const result = idValCheck.test(this.joinId);
      if (!result) {
        this.isIdCheck = true;
        this.idCheckTxt = "숫자, 영문 조합으로 아이디를 만들어주세요.";
      } else {
        this.isIdCheck = false;
        return true;
      }
    },

    // 닉네임 영역 유효성 검사
    checkJoinNick() {
      const nickValCheck = /^[가-힣0-9]+$/;
      const result = nickValCheck.test(this.joinNick);
      if (!result) {
        this.isNickCheck = true;
        this.nickCheckTxt = "닉네임은 한글 + 숫자 조합으로 입력 가능합니다";
      } else {
        this.isNickCheck = false;
        return true;
      }
    },

    // PW 영역 유효성 검사
    checkJoinPW() {
      // const pwValCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
      const pwValCheck = /^[0-9]*$/;
      const result = pwValCheck.test(this.joinPw);
      if (!result) {
        this.isPwCheck = true;
        // this.pwCheckTxt = '영문,숫자,특문조합 8자리 이상 입력해주세요.';
        this.pwCheckTxt = "숫자만 입력해주세요.";
      } else {
        this.isPwCheck = false;
        return true;
      }
    },

    checkJoinPwValid() {
      if (this.joinPw !== this.joinPwCheck) {
        this.isPwValidateCheck = true;
        this.pwValidCheckTxt = "동일한 비밀번호를 입력해주세요.";
      } else {
        this.isPwValidateCheck = false;
        return true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/input/textarea.scss";
@import "@/assets/scss/components/form/joinForm.scss";
</style>
