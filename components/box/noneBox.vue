<template>
  <div class="none">
    <div class="none__ico" :class="`none__ico-${noneType}`"></div>
    <div class="none__txt">{{ noneTxt }}</div>
  </div>
</template>

<script>
export default {
  name: "noneBox",
  props: {
    noneType: { type: String, default: "info" },
    noneTxt: { type: String, default: "게시물이 없습니다." },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/box/noneBox.scss";
</style>
