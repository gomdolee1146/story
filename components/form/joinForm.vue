<template>
  <div class="join">
    <button class="btn-back" @click="goToBack"><i></i></button>
    <div class="join__container">
      <div class="join__logo" v-if="!editInfo.isEdit"></div>
      <h4 class="join__title">
        {{ editInfo.isEdit ? "회원정보수정" : "회원가입" }}
      </h4>
      <div class="join__wrap">
        <div class="txt__box">
          <input
            v-model="joinId"
            type="text"
            class="txt__input"
            @input="checkJoinId"
            required
          />
          <label class="txt__label">아이디</label>
          <span v-if="isIdCheck" class="txt__desc">{{ idCheckTxt }}</span>
          <div v-if="editInfo.isEdit" class="input__blind"></div>
        </div>
        <div class="txt__box">
          <input
            v-model="joinNick"
            type="text"
            class="txt__input"
            @input="checkJoinNick"
            required
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
            required
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
            required
          />
          <label class="txt__label">비밀번호확인</label>
          <span v-if="isPwValidateCheck" class="txt__desc">
            {{ pwValidCheckTxt }}
          </span>
        </div>
      </div>
      <div class="join__btn_wrap">
        <p class="form__check" v-if="!editInfo.isEdit">
          <input type="checkbox" v-model="joinCheck" />
          <label><i></i><span>약관 내용에 동의합니다</span></label>
        </p>

        <button
          class="join__btn-done"
          :class="isActive ? 'on' : ''"
          @click="joinSubmit"
        >
          {{ editInfo.isEdit ? "회원정보 수정완료" : "회원가입완료" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { authCheck } from "@/mixins/authCheck";
export default {
  name: "joinForm",
  mixins: [authCheck],
  props: {
    editInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    myInfo() {
      if (this.editInfo) {
        return this.$store.state.user;
      }
    },
    isActive() {
      if (
        (this.nickCheckResult &&
          this.pwCheckResult &&
          this.pwCheckValidResult) ||
        (this.editInfo.isEdit && this.pwCheckResult && this.pwCheckValidResult)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      joinId: this.myInfo?.userId || "",
      joinNick: this.myInfo?.nick || "",
      joinPw: "",
      joinPwCheck: "",
      joinCheck: false,
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
  methods: {
    goToBack() {
      this.$router.go(-1);
    },
    setEditInfo() {
      if (this.myInfo) {
        this.joinId = this.myInfo.userId;
        this.joinNick = this.myInfo.nick;
      }
    },
    // 회원가입 완료
    joinSubmit() {
      const userInfo = {
        id: this.myInfo.id || Date.now(),
        userId: this.myInfo.userId || this.joinId,
        nick: this.joinNick,
        password: this.joinPw,
        photoList: require(`@/assets/imgs/profile/profile_${_.padStart(
          _.random(0, 12),
          2,
          "0"
        )}.png`),
        boardCount: 0,
        commentCount: 0,
        tictactoeCount: 0,
        cardCount: 0,
        mbtiResult: "",
      };

      if (
        this.idCheckResult &&
        this.nickCheckResult &&
        this.pwCheckResult &&
        this.pwCheckValidResult
      ) {
        if (this.editInfo.isEdit) {
          this.$store.commit("auth/updateUserInfo", userInfo);
        } else if (this.joinCheck) {
          this.$store.commit("auth/addUserInfo", userInfo);
        }
        this.$router.push("/auth/login");
      } else {
        return;
      }
    },

    // 아이디 영역 유효성 검사
    checkJoinId() {
      const { isIdCheck, idCheckTxt, idCheckResult } = this.checkId(
        this.joinId
      );
      this.isIdCheck = isIdCheck;
      this.idCheckTxt = idCheckTxt;
      this.idCheckResult = idCheckResult;
    },

    // 닉네임 영역 유효성 검사
    checkJoinNick() {
      const { isNickCheck, nickCheckTxt, nickCheckResult } = this.checkNick(
        this.joinNick
      );
      this.isNickCheck = isNickCheck;
      this.nickCheckTxt = nickCheckTxt;
      this.nickCheckResult = nickCheckResult;
    },

    // PW 영역 유효성 검사
    checkJoinPW() {
      const { isPwCheck, pwCheckTxt, pwCheckResult } = this.checkPw(
        this.joinPw
      );
      this.isPwCheck = isPwCheck;
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
    getEditData() {
      this.joinId = this.myInfo.userId;
      this.joinNick = this.myInfo.nick;
    },
  },
  mounted() {
    if (this.editInfo.isEdit) {
      this.getEditData();
    }
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/form/formCommon.scss";
@use "@/assets/scss/components/input/textarea.scss";
@use "@/assets/scss/components/form/joinForm.scss";
</style>
