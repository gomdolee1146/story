<template>
  <ul class="board__list">
    <li class="board__lst" v-for="(board, idx) in boardList" :key="idx">
      <board-card :board="board" :idx="idx" />
    </li>
    <li class="board__lst" v-if="boardList.length === 0">
      <none-box />
    </li>
  </ul>
</template>

<script>
import boardCard from "@/components/card/boardCard.vue";

export default {
  name: "boardList",
  components: { boardCard },
  computed: {
    boardList() {
      return [...this.$store.state.board.boardInfo].reverse();
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/list/boardList.scss";
</style>
