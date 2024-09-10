export const authCheck = {
  methods: {
    checkId(id) {
      const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
      const result = idValCheck.test(id);
      const idResultObj = {};

      if (!result) {
        idResultObj.isCheck = true;
        idResultObj.checkTxt =
          "아이디는 영문 + 숫자 4~8자리 조합으로 입력 가능합니다.";
        idResultObj.checkResult = false;
      } else {
        idResultObj.isCheck = false;
        idResultObj.checkTxt = "";
        idResultObj.checkResult = true;
      }
      return idResultObj;
    },
    checkPw(pw) {
      const pwValCheck =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
      // const pwValCheck = /^[0-9]*$/;
      const result = pwValCheck.test(pw);
      const pwResultObj = {};

      if (!result) {
        pwResultObj.isCheck = true;
        pwResultObj.checkTxt = "영문,숫자,특문조합 8자리 이상 입력해주세요.";
        pwResultObj.checkResult = false;
      } else {
        pwResultObj.isCheck = false;
        pwResultObj.checkTxt = "";
        pwResultObj.checkResult = true;
      }
      return pwResultObj;
    },
    checkNick(nick) {
      const nickValCheck = /^[가-힣0-9]+$/;
      const result = nickValCheck.test(nick);
      const nickResultObj = {};

      if (!result) {
        nickResultObj.isCheck = true;
        nickResultObj.checkTxt =
          "닉네임은 한글 + 숫자 조합으로 입력 가능합니다";
        nickResultObj.checkResult = false;
      } else {
        nickResultObj.isCheck = false;
        nickResultObj.checkTxt = "";
        nickResultObj.checkResult = true;
      }
      return nickResultObj;
    },
  },
};
