<template>
  <div>
    <board-list />
  </div>
</template>

<script>
import boardList from "@/components/list/boardList.vue";
export default {
  name: "IndexPage",
  layouts: 'mainLayout',
  components: { boardList },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/test";
</style>
