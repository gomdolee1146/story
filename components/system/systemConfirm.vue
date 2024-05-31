<template>
  <div class="confirm">
    <div class="g_modal" @click="hideConfirm"></div>
    <div class="confirm__wrap">
      <div class="confirm__top">
        <p class="body_default confirm__text">{{ confirm.text }}</p>
      </div>
      <div class="confirm__btm">
        <button
          class="confirm__btn-cancel body_default"
          :class="confirm.cancelClass"
          @click="hideConfirm"
        >
          {{ confirm.cancelTxt }}
        </button>
        <button
          class="confirm__btn-done body_default"
          v-if="confirm.isShowDoneBtn"
          @click="doneConfirm"
        >
          {{ confirm.doneTxt }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemConfirm",
  props: {
    confirm: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    hideConfirm() {
      this.$emit("hideConfirm", false);
    },
    doneConfirm() {
      this.$emit("doneConfirm");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/system/systemConfirm.scss";
</style>
