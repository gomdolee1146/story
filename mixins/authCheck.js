export const authCheck = {
  methods: {
    checkId(id) {
      const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
      const result = idValCheck.test(id);
      const idResultObj = {};

      if (!result) {
        idResultObj.isIdCheck = true;
        idResultObj.idCheckTxt = "아이디를 정확하게 입력해주세요.";
        idResultObj.idCheckResult = false;
      } else {
        idResultObj.isIdCheck = false;
        idResultObj.idCheckTxt = "";
        idResultObj.idCheckResult = true;
      }
      return idResultObj;
    },
    checkPw(pw) {
      // const pwValCheck =
      //   /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
      const pwValCheck = /^[0-9]*$/;
      const result = pwValCheck.test(pw);
      const pwResultObj = {};

      if (!result) {
        pwResultObj.isPwCheck = true;
        pwResultObj.pwCheckTxt = "영문,숫자,특문조합 8자리 이상 입력해주세요.";
        pwResultObj.pwCheckResult = false;
      } else {
        pwResultObj.isPwCheck = false;
        pwResultObj.pwCheckTxt = "";
        pwResultObj.pwCheckResult = true;
      }
      return pwResultObj;
    },
    checkNick(nick) {
      const nickValCheck = /^[가-힣0-9]+$/;
      const result = nickValCheck.test(nick);
      const nickResultObj = {};

      if (!result) {
        nickResultObj.isNickCheck = true;
        nickResultObj.nickCheckTxt =
          "닉네임은 한글 + 숫자 조합으로 입력 가능합니다";
        nickResultObj.nickCheckResult = false;
      } else {
        nickResultObj.isNickCheck = false;
        nickResultObj.nickCheckTxt = "";
        nickResultObj.nickCheckResult = true;
      }
      return nickResultObj;
    },
  },
};
