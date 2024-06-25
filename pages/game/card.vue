<template>
  <div class="card">
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
  </div>
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
  align-items: flex-start;
  flex-direction: column;
}
</style>
