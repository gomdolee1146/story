<template>
  <div class="tictactoe">
    <div class="selectPlayer">
      <button class="select-dog" @click="setFirstPlayer('dog')"></button>
      <button class="select-cat" @click="setFirstPlayer('cat')"></button>
    </div>

    <div class="table">
      <div
        class="table__block"
        :class="`table__block-${nameList[idx]}`"
        v-for="(block, idx) in nameList"
        :key="idx"
        @click="checkTable(idx)"
      ></div>
    </div>
    {{ winner }}
  </div>
</template>

<script>
export default {
  name: "tictactoePage",
  data() {
    return {
      nameList: [],
      playerList: ["dog", "cat"],
      player: "cat",
      nowPlaying: "",
      checkNum: 0,
      winner: "",
      boardArray: [[], [], []],
      gameOver: false,
    };
  },
  methods: {
    checkTable(idx) {
      let firstPlayer = this.player;
      let secondPlayer = firstPlayer === "dog" ? "cat" : "dog";

      let hNum = Math.floor(idx / 3);
      let vNum = idx % 3;

      this.$nextTick(() => {
        this.$set(this.nameList, idx, this.nowPlaying);
      });

      if (this.boardArray[hNum][vNum] !== "") {
        if (this.nowPlaying === firstPlayer) {
          this.boardArray[hNum][vNum] = firstPlayer;
          this.nowPlaying = secondPlayer;
        } else {
          this.boardArray[hNum][vNum] = secondPlayer;
          this.nowPlaying = firstPlayer;
        }
        console.log(this.boardArray);
        this.checkNum++;
      }
      if (this.checkNum >= 5) {
        this.winner = this.checkResult(hNum, vNum);
        if (this.winner) {
          this.setResult();
        }
      }
      if (this.checkNum > 9) return;
    },
    checkResult(hNum, vNum) {
      let winner = "";

      if (
        this.boardArray[hNum][0] === this.boardArray[hNum][1] &&
        this.boardArray[hNum][0] === this.boardArray[hNum][2]
      ) {
        winner = this.boardArray[hNum][0] === "dog" ? "dog" : "cat";
      } else if (
        this.boardArray[0][vNum] === this.boardArray[1][vNum] &&
        this.boardArray[0][vNum] === this.boardArray[2][vNum]
      ) {
        winner = this.boardArray[0][vNum] === "dog" ? "dog" : "cat";
      } else if (
        (this.boardArray[0][0] == this.boardArray[1][1] &&
          this.boardArray[0][0] == this.boardArray[2][2]) ||
        (this.boardArray[0][2] == this.boardArray[1][1] &&
          this.boardArray[2][0] == this.boardArray[1][1])
      ) {
        winner = this.boardArray[0][0] == "dog" ? "dog" : "cat";
      } else {
        winner = "";
      }
      return winner;
    },

    setResult() {
      this.gameOver = true;
    },
    setFirstPlayer(player) {
      this.player = player;
    },
    resetGame() {
      this.player = '';
      this.checkNum = 0;
      this.boardArray = [[], [], []];
      this.nameList = _.times(9, _.stubString);
      this.gameOver = false;
    },
  },
  mounted() {
    this.nameList = _.times(9, _.stubString);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/tictactoePage.scss";
</style>
