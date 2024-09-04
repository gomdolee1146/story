<template>
  <div class="card__page">
    <div class="card__top">
      <div class="card__timer"><i></i>{{ count }}초</div>
      <div class="card__btn">
        <button @click="gamePause">일시정지</button>
        <button @click="endGame">나가기</button>
      </div>
    </div>
    <ul class="card_list">
      <li class="card_lst" v-for="(card, idx) in cardList" :key="idx">
        <div class="card__wrap">
          <input
            type="checkbox"
            class="card__check"
            :value="`${card}_${idx}`"
            v-model="checkedCard"
            @change="checkCard"
          />
          <label class="card__label">
            <div class="card__front"></div>
            <div class="card__back" :class="`card__back-${card}`"></div>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { _ } from "core-js";

export default {
  name: "cardPage",
  data() {
    return {
      control: {},
      cardList: [],
      checkedCard: [],
      count: 60,
      timer: null,
      intervalId: "",

      playingCount: 0,
    };
  },
  props: {
    isStopTimer: { type: Boolean, default: true },
    gameState: { type: String, default: "start" },
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    getCardList() {
      // 카드 리스트  - 랜덤으로 구하기
      let randomNum = [];
      let check = null;
      for (let i = 0; i < 6; i++) {
        let n = _.random(1, 12);

        if (i === 0) {
          randomNum.push(n);
        } else {
          check = _.findIndex(randomNum, (o) => {
            return o === n;
          });
          if (check === -1) {
            randomNum.push(n);
          } else {
            i--;
          }
        }
      }
      this.cardList = _.shuffle(_.concat(randomNum, randomNum));
    },
    checkCard() {
      // 선택한 카드가 0개일때
      if (this.checkedCard.length === 0) return;

      // 선택한 카드가 홀수개 일 때
      if (this.checkedCard.length % 2 !== 0) return;

      setTimeout(() => {
        let firstCard = _.toString(_.split(_.last(this.checkedCard), "_", 1));
        let secondCard = _.toString(
          _.split(_.nth(this.checkedCard, -2), "_", 1)
        );
        // 카드 짝이 맞는지 확인
        if (firstCard === secondCard) return;
        this.checkedCard = _.take(
          this.checkedCard,
          this.checkedCard?.length - 2
        );
      }, 200);
    },
    startTimer() {
      if (!this.isStopTimer) {
        if (this.gameState === "start") {
          this.resetGame();
        }
        this.intervalId = setInterval(() => {
          this.count--;

          if (this.count < 0) {
            clearInterval(this.intervalId);
            this.control.value = true;
            this.control.state = "end";

            this.$emit("controlGameState", this.control);
            this.timer = null;
            this.resetGame();
          }
        }, 1000);
      }
    },
    resetGame() {
      this.checkedCard = [];
      this.count = 60;
      this.intervalId = "";
    },
    endGame() {
      this.$router.push("/game/");
    },
    gamePause() {
      clearInterval(this.intervalId);
      this.timer = this.count;
      this.control.value = true;
      this.control.state = "pause";

      this.$emit("controlGameState", this.control);
    },
    updateGameResult() {
      // playingCount 값 세팅
      _.isInteger(this.myInfo.cardCount) == false
        ? (this.playingCount = 0)
        : (this.playingCount = this.myInfo.cardCount);

      this.playingCount++;
      const userInfo = {
        id: this.myInfo.id,
        cardCount: this.playingCount,
      };
      this.$store.commit("auth/updateUserInfo", userInfo);
    },
  },
  mounted() {
    this.getCardList();
    this.resetGame();
  },
  watch: {
    isStopTimer: {
      handler() {
        this.startTimer();
      },
    },
    checkedCard: {
      handler() {
        if (this.checkedCard.length === 12) {
          this.control.state = "win";
        } else if (this.checkedCard.length < 12 && this.count < 0) {
          this.control.state = "lose";
        } else {
          return;
        }
        this.updateGameResult();
        this.control.value = true;
        this.$emit("controlGameState", this.control);
        this.$nextTick(() => {
          this.resetGame();
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardPage.scss";
</style>
