<template>
  <article class="tictactoe">
    <transition name="fade">
      <div class="select__wrap" v-if="step === 1">
        <h4 class="select__title">댕냥 틱택토!</h4>
        <p class="select__sub">처음 플레이 할 캐릭터를 선택해주세요!</p>
        <div class="select__btn">
          <button
            class="select__btn-dog"
            @click="setFirstPlayer('dog')"
          ></button>
          <button
            class="select__btn-cat"
            @click="setFirstPlayer('cat')"
          ></button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="table__wrap">
        <div class="table" v-if="step === 2">
          <div
            class="table__block"
            :class="`table__block-${nameList[idx]}`"
            v-for="(block, idx) in nameList"
            :key="idx"
            @click="checkTable(idx)"
          ></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="result" v-if="step === 3">
        <h4 class="result__txt">{{ winner }}가 승리했습니다!</h4>
        <button class="btn-reload" @click="resetGame">다시 게임하기</button>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  name: "tictactoePage",
  data() {
    return {
      step: 1,

      nameList: [],
      playerList: ["dog", "cat"],
      player: "",
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
        winner = this.boardArray[hNum][0] === "dog" ? "고먐미" : "댕댕이";
      } else if (
        this.boardArray[0][vNum] === this.boardArray[1][vNum] &&
        this.boardArray[0][vNum] === this.boardArray[2][vNum]
      ) {
        winner = this.boardArray[0][vNum] === "dog" ? "고먐미" : "댕댕이";
      } else if (
        (this.boardArray[0][0] == this.boardArray[1][1] &&
          this.boardArray[0][0] == this.boardArray[2][2]) ||
        (this.boardArray[0][2] == this.boardArray[1][1] &&
          this.boardArray[2][0] == this.boardArray[1][1])
      ) {
        winner = this.boardArray[0][0] == "dog" ? "고먐미" : "댕댕이";
      } else {
        winner = "";
      }
      return winner;
    },

    setResult() {
      this.gameOver = true;
      this.step = 3;
    },
    setFirstPlayer(player) {
      this.player = player;
      this.step = 2;
    },
    resetGame() {
      this.player = "";
      this.checkNum = 0;
      this.boardArray = [[], [], []];
      this.nameList = _.times(9, _.stubString);
      this.gameOver = false;
      this.step = 1;
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
