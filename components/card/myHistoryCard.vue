<template>
  <div class="history">
    <div class="history__box">
      <h4 class="history__title">게시글 history</h4>
      <div class="history__info">
        <div
          class="history__info_box"
          v-for="(board, idx) in boardData"
          :key="idx"
        >
          <p class="body_elarge">{{ board.title }}</p>
          <p>{{ board.count }}</p>
        </div>
      </div>
    </div>

    <div class="history__box">
      <h4 class="history__title">게임 history</h4>
      <div class="history__info">
        <div
          class="history__info_box"
          v-for="(game, idx) in gameData"
          :key="idx"
        >
          <p class="body_elarge">{{ game.title }}</p>
          <p>{{ game.result }}</p>
          <button class="history__btn" @click="goToPage(game.path)">
            {{ game.pathTxt }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHistoryCard",
  data() {
    return {
      boardData: [
        {
          title: "작성한 게시글",
          count: "" || 0,
        },
        {
          title: "작성한 댓글 수",
          count: "" || 0,
        },
      ],

      gameData: [
        {
          title: "틱택토",
          result: 0 + " 회",
          path: "/game/tictactoe",
          pathTxt: "게임하기",
        },
        {
          title: "카드게임",
          result: 0 + " 회",
          path: "/game/card",
          pathTxt: "게임하기",
        },
        {
          title: "MBTI",
          result: "기록없음",
          path: "/game/mbti",
          pathTxt: "테스트하기",
        },
      ],
    };
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
    // init() {
    //   // 게임정보 초기화
    //   this.gameData[0].result = this.myTictactoeInfo;
    //   this.gameData[1].result = this.myCardInfo;
    //   this.gameData[2].result = this.myMBTIInfo;
    // },
  },
  created() {
    this.init();
  },
  mounted(){
    console.log(this.myInfo.tictactoe);
  }
};

</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/myHistoryCard.scss";
</style>
