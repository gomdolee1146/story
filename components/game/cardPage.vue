<template>
  <ul class="card_list">
    <li class="card_lst" v-for="(card, idx) in cardList" :key="idx">
      <div class="card__wrap">
        <input type="checkbox" class="card__check" />
        <label class="card__label"></label>
      </div>
      {{ card }}
    </li>

  </ul>
</template>

<script>
export default {
  name: "cardPage",
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    this.cardList = _.times(12, _.stubString); // 일단 임시1
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardPage.scss";
</style>
