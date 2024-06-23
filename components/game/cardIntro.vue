<template>
  <div class="card__intro" v-if="isShowIntro">
    <div class="g_modal"></div>
    <div class="card__intro_box" v-if="gameState === 'pause'">
      <h4 class="card__title">일시정지</h4>
      <button class="card__btn-play" @click="resumeCardGame">
        <i></i>계속하기
      </button>
      <button class="card__btn-restart" @click="startCardGame">
        <i></i>다시하기
      </button>
    </div>
    <div class="card__intro_box" v-if="gameState === 'start'">
      <h4 class="card__title">준비하세요</h4>
      <p class="card__count">{{ count }}</p>
    </div>
    <div class="card__intro_box" v-if="gameState === 'end'">
      <h4 class="card__title">GAME OVER!</h4>
      <button class="card__btn-restart" @click="startCardGame">
        <i></i>다시하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardIntro",
  data() {
    return {
      count: 3,
    };
  },
  props: {
    isShowIntro: { type: Boolean, default: true },
    gameState: { type: String, default: "start" },
  },
  methods: {
    checkCount() {
      if (this.gameState === "start") {
        setInterval(() => {
          this.count--;
          if (this.count <= 0) {
            clearInterval;
            this.$emit("startGame", false);
            this.count = 3;
          }
        }, 1000);
      } else {
        this.count = 3;
      }
    },
    startCardGame() {
      this.$emit("startGame", false);
      this.count = 3;
    },
    resumeCardGame() {
      this.$emit("resumeGame", false);
    },
  },
  mounted() {
    this.checkCount();
  },
  watch: {
    gameState: {
      handler() {
        if (this.gameState !== "start") {
          this.count = 200;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardIntro.scss";
</style>
