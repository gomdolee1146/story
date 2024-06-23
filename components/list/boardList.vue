<template>
  <ul class="board__list">
    <li class="board__lst" v-for="(board, idx) in boardList" :key="idx">
      <boardCard :board="board" :idx="idx" />
    </li>
  </ul>
</template>

<script>
import boardCard from "@/components/card/boardCard.vue";

export default {
  name: "boardList",
  components: { boardCard },
  props: {},
  data() {
    return {};
  },
  computed: {
    boardList() {
      return [...this.$store.state.board.boardInfo].reverse();
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/list/boardList.scss";
</style>
