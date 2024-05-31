<template>
  <div class="main">
    <board-list />
    <create-button />
  </div>
</template>

<script>
import boardList from "@/components/list/boardList.vue";
import createButton from "@/components/button/createButton.vue";
export default {
  name: "IndexPage",
  layout: "mainLayout",
  components: { boardList, createButton },
  methods: {},
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/test";
</style>
