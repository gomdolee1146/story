<template>
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
</template>

<script>
import { _ } from "core-js";

export default {
  name: "cardPage",
  data() {
    return {
      cardList: [],
      checkedCard: [],
    };
  },
  methods: {
    getCardList() {
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
      if (this.checkedCard.length === 0) return;
      if (this.checkedCard.length % 2 !== 0) return;
      setTimeout(() => {
        let firstCard = _.toString(_.split(_.last(this.checkedCard), "_", 1));
        let secondCard = _.toString(
          _.split(_.nth(this.checkedCard, -2), "_", 1)
        );

        if (firstCard === secondCard) return;
        this.checkedCard = _.take(
          this.checkedCard,
          this.checkedCard?.length - 2
        );
      }, 500);
    },
  },
  mounted() {
    this.getCardList();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardPage.scss";
</style>
