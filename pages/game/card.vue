<template>
  <div class="card">
    <card-intro
      :isShowIntro="isShowIntro"
      :gameState="gameState"
      @startGame="startGame"
    />

    <card-top
      :isStopTimer="isStopTimer"
      @endGame="endGame"
      @pauseGame="pauseGame"
    />
    <card-page />
  </div>
</template>

<script>
import cardIntro from "@/components/game/cardIntro.vue";
import cardPage from "@/components/game/cardPage.vue";
import cardTop from "@/components/game/cardTop.vue";

export default {
  name: "card",
  layout: "game",
  data() {
    return {
      isShowIntro: true,
      isStopTimer: true,
      gameState: "start",
    };
  },
  components: { cardIntro, cardPage, cardTop },
  methods: {
    startGame(val) {
      this.isShowIntro = val;
      this.isStopTimer = val;
      this.gameState = "start";
    },
    pauseGame(val) {
      this.isShowIntro = val;
      this.isStopTimer = val;
      this.gameState = "pause";
    },
    endGame(val) {
      this.isShowIntro = val;
      this.isStopTimer = val;
      this.gameState = "end";
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items:flex-start;
  flex-direction:column; 
}
</style>
