<template>
  <div class="board_form">
    <div class="form__title">
      <h4 class="form__txt title_medium">글 작성하기</h4>
      <i></i>
    </div>
    <div class="board_form__wrap">
      <div class="board_form__cont">
        <input
          type="text"
          class="form__input"
          placeholder="제목"
          v-model="boardTitle"
        />
      </div>
      <div class="board_form__cont">
        <textarea
          class="form__input"
          placeholder="내용"
          v-model="boardContent"
        ></textarea>
      </div>
      <div class="borad_form__chk">
        <p>
          <input type="checkbox" v-model="boardCheck" />
          <label>어떤 내용에 동의합니다</label>
        </p>
      </div>
      <div class="board_form__btn_wrap">
        <button
          class="board_form__btn board_form__btn-active"
          @click="saveBoardForm"
        >
          글 등록하기
        </button>
      </div>
    </div>

    <system-confirm
      v-if="isShowConfirm"
      :confirm="confirm"
      @hideConfirm="hideConfirm"
    />
  </div>
</template>

<script>
export default {
  name: "boardForm",
  data() {
    return {
      boardTitle: "",
      boardContent: "",
      boardCheck: false,
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
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    saveBoardForm() {
      const boardData = {};

      if (!this.boardTitle) {
        this.isShowConfirm = true;
        this.confirm.text = "제목을 입력해주세요.";
      } else if (!this.boardContent) {
        this.isShowConfirm = true;
        this.confirm.text = "내용을 입력해주세요.";
      } else {
        boardData.id = Date.now();
        boardData.title = this.boardTitle;
        boardData.content = this.boardContent;
        boardData.writer = this.myInfo.nick;

        this.$store.commit("board/saveBoardInfo", boardData);
        this.$router.push("/");
      }
    },
    hideConfirm(isShow) {
      this.isShowConfirm = isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/form/formCommon.scss";
@use "@/assets/scss/components/form/boardForm.scss";
</style>
