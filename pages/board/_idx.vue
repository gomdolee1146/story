<template>
  <div class="detail">
    <board-card :isDetail="true" :board="boardList" />
    <comment-card
      :commentInfo="boardList.commentList"
      :writerInfo="boardList.writer"
    />
  </div>
</template>

<script>
import boardCard from "@/components/card/boardCard.vue";
import commentCard from "@/components/card/commentCard.vue";
export default {
  name: "boardDetail",
  data() {
    return {
      idx: this.$route.params.idx,
    };
  },
  layout: "mainLayout",
  components: { boardCard, commentCard },
  computed: {
    boardList() {
      return this.$store.state.board.boardInfo[this.idx];
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/card/boardCard.scss";
</style>
