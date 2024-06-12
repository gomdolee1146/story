<template>
  <div class="detail">
    <!-- v-if="boardList.writer === myInfo.nick" -->
    <div class="detail__btn_wrap">
      <button class="btn-edit" @click="editBoardInfo">수정</button>
      <button class="btn-delete" @click="deleteBoardInfo">삭제</button>
    </div>
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
    myInfo() {
      return this.$store.state.user;
    },
    boardList() {
      return this.$store.state.board.boardInfo[this.idx];
    },
  },
  methods: {
    editBoardInfo() {
      this.$router.push({
        // path: "/board/create",
        name: "board-create",
        params: {
          isEdit: true,
          boardIdx: this.idx,
        },
      });
    },
    deleteBoardInfo() {
      this.$commit("board/deleteBoardInfo", this.idx);
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/card/boardCard.scss";
</style>
