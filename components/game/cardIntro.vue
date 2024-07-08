<template>
  <div class="card__intro" v-if="isShowIntro">
    <div class="g_modal"></div>
    <div class="card__intro_box">
      <span class="card__title">{{ gameState }}</span>
      <h4 class="card__title">{{ endComment }}</h4>
      <p class="card__count" v-if="gameState === 'start'">{{ count }}</p>
      <button
        class="card__btn-play"
        @click="resumeCardGame"
        v-if="gameState === 'pause'"
      >
        <i></i>계속하기
      </button>
      <button
        class="card__btn-restart"
        @click="startCardGame"
        v-if="gameState !== 'start'"
      >
        <i></i>다시하기
      </button>
      <button
        class="card__btn-restart"
        @click="goToGame"
        v-if="gameState !== 'start'"
      >
        <i></i>나가기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardIntro",
  data() {
    return {
      control: {},
      count: 3,
    };
  },
  props: {
    isShowIntro: { type: Boolean, default: true },
    gameState: { type: String, default: "start" },
  },
  computed: {
    endComment() {
      let comment = {
        pause: "일시정지",
        start: "준비하세요!",
        win: "Congratulation!",
        lose: "게임에 실패하셨습니다!",
        over: "Game Over!",
      };
      return comment[this.gameState];
    },
  },
  methods: {
    checkCount() {
      if (this.gameState === "start") {
        setInterval(() => {
          this.count--;
          if (this.count <= 0) {
            clearInterval;
            this.control.value = false;
            this.control.state = "start";

            this.$emit("controlGameState", this.control);
            this.count = 3;
          }
        }, 1000);
      } else {
        this.count = 3;
      }
    },
    startCardGame() {
      this.control.value = false;
      this.control.state = "start";

      this.$emit("controlGameState", this.control);
      this.count = 3;
    },
    resumeCardGame() {
      this.control.value = false;
      this.control.state = "resume";

      this.$emit("controlGameState", this.control);
    },
    goToGame() {
      this.$router.push("/game/");
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
