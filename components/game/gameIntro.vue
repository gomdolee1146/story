<template>
  <div class="game">
    <h4 class="game__title">미니게임</h4>

    <ul class="game__list">
      <li class="game__lst" v-for="(game, idx) in gameList" :key="idx">
        <div class="game__wrap" @click="goToPage(game.path)">
          <img :src="game.thumb" class="game__thumb" />
          <p class="game__name">{{ game.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "gameIntro",
  data() {
    return {
      gameList: [
        {
          name: "MBTI 테스트",
          path: "/game/mbti",
          thumb: require(`@/assets/imgs/default/profile_01.png`), 
        },
        {
          name: "카드 짝맞추기",
          path: "/game/card",
          thumb: require(`@/assets/imgs/default/profile_02.png`),
        },
        {
          name: "댕냥 틱택토",
          path: "/game/tictactoe",
          thumb: require(`@/assets/imgs/default/profile_03.png`), 
        },
      ],
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/gameIntro.scss";
</style>
