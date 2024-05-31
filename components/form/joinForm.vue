<template>
  <div class="join">
    <h4 class="join__title">회원가입</h4>
    <div class="join__wrap">
      <div class="txt__box">
        <input
          v-model="joinId"
          type="text"
          class="txt__input"
          @input="checkJoinId"
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
import { authCheck } from "@/mixins/authCheck";
export default {
  name: "joinForm",
  mixins: [authCheck],
  data() {
    return {
      joinId: "",
      joinNick: "",
      joinPw: "",
      joinPwCheck: "",
      userInfo: {},

      isIdCheck: false,
      idCheckTxt: "",
      idCheckResult: false,

      isNickCheck: false,
      nickCheckTxt: "",
      nickCheckResult: false,

      isPwCheck: false,
      pwCheckTxt: "",
      pwCheckResult: false,

      isPwValidateCheck: false,
      pwValidCheckTxt: "",
      pwCheckValidResult: false,
    };
  },
  computed: {
  },
  methods: {
    // 회원가입 완료
    joinSubmit() {
      const userInfo = {};
      userInfo.id = this.joinId;
      userInfo.nick = this.joinNick;
      userInfo.pw = this.joinPw;
      if (
        this.idCheckResult &&
        this.nickCheckResult &&
        this.pwCheckResult &&
        this.pwCheckValidResult
      ) {
        this.$router.push("/auth/login");
        this.$store.commit("auth/addUserInfo", userInfo);
      } else {
        console.log("안내창 띄우기");
      }
    },

    // 아이디 영역 유효성 검사
    checkJoinId() {
      const { idCheck, idCheckTxt, idCheckResult } = this.checkId(this.joinId);
      this.isIdCheck = idCheck;
      this.idCheckTxt = idCheckTxt;
      this.idCheckResult = idCheckResult;
    },

    // 닉네임 영역 유효성 검사
    checkJoinNick() {
      const { nickCheck, nickCheckTxt, nickCheckResult } = this.checkNick(
        this.joinNick
      );
      this.isNickCheck = nickCheck;
      this.nickCheckTxt = nickCheckTxt;
      this.nickCheckResult = nickCheckResult;
    },

    // PW 영역 유효성 검사
    checkJoinPW() {
      const { pwCheck, pwCheckTxt, pwCheckResult } = this.checkPw(this.joinPw);
      this.isPwCheck = pwCheck;
      this.pwCheckTxt = pwCheckTxt;
      this.pwCheckResult = pwCheckResult;
    },

    checkJoinPwValid() {
      if (this.joinPw !== this.joinPwCheck) {
        this.isPwValidateCheck = true;
        this.pwValidCheckTxt = "동일한 비밀번호를 입력해주세요.";
        this.pwCheckValidResult = false;
      } else {
        this.isPwValidateCheck = false;
        this.pwValidCheckTxt = "";
        this.pwCheckValidResult = true;
      }
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/input/textarea.scss";
@use "@/assets/scss/components/form/joinForm.scss";
</style>
