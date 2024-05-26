export const authCheck = {
  methods: {
    checkID() {
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
  }
}