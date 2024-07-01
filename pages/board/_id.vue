<template>
  <div class="detail">
    <board-card :isDetail="true" :board="boardList" />
    <comment-card :writerInfo="boardList.writer" :id="id" />
  </div>
</template>

<script>
import boardCard from "@/components/card/boardCard.vue";
import commentCard from "@/components/card/commentCard.vue";
export default {
  name: "boardDetail",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  layout: "subLayout",
  components: { boardCard, commentCard },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
    boardList() {
      let board = this.$store.state.board.boardInfo;
      let data = board.find((e) => {
        return e.id.toString() === this.id.toString();
      });
      return data;
    },
  },ㅌ
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/card/boardCard.scss";
</style>
