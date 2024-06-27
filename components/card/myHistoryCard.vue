<template>
  <div class="my_game">
    <h4 class="my_game__title">게임 history</h4>
    <div class="my_game__info_wrap">
      <div class="my_game__info" v-for="(game, idx) in gameData" :key="idx">
        <p>틱택토</p>
        <p>{{ "0" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHistoryCard",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/card/myHistoryCard.scss";
</style>
