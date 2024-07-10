<template>
  <article class="card">
    <card-intro
      :isShowIntro="isShowIntro"
      :gameState="gameState"
      @controlGameState="controlGameState"
    />
    <card-page
      :isStopTimer="isStopTimer"
      :gameState="gameState"
      @controlGameState="controlGameState"
    />
  </article>
</template>

<script>
import cardIntro from "@/components/game/cardIntro.vue";
import cardPage from "@/components/game/cardPage.vue";

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
  components: { cardIntro, cardPage },
  methods: {
    controlGameState(val) {
      this.isShowIntro = val.value;
      this.isStopTimer = val.value;
      this.gameState = val.state;
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 8px;
  width: 100%;
  height: 100vh;
  z-index: 200;
}
</style>
