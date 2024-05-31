<template>
  <div class="board_form">
    <div class="form__title">
      <h4 class="form__txt title_medium">타이틀영역</h4>
      <i></i>
    </div>
    <div class="board_form__wrap">
      <div class="board_form__cont">
        <input type="text" class="form__input" placeholder="제목" />
      </div>
      <div class="board_form__cont">
        <textarea class="form__input" placeholder="내용"></textarea>
      </div>

      <div class="borad_form__chk">
        <span>
          <input type="checkbox" />
          <label>어떤 내용에 동의합니다</label>
        </span>
      </div>
      <div class="board_form__btn_wrap">
        <button class="board_form__btn board_form__btn-active">
          글 등록하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boardForm",
  data() {
    return {
      boardTitle: '',
      boardContent: '',
    };
  },
  computed:{
    myInfo(){
      return this.$store.state.user
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/form/formCommon.scss";
@use "@/assets/scss/components/form/boardForm.scss";
</style>
