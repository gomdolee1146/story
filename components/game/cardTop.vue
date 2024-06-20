<template>
  <div class="card__top">
    <div class="card__timer"><i></i>{{ count }}초</div>
    <div class="card__btn">
      <button class="card__btn-pause" @click="gamePause">일시정지</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardTop",
  data() {
    return {
      count: 60,
      timer: "",
      intervalId: "",
    };
  },
  props: {
    isStopTimer: { type: Boolean, default: true },
  },
  methods: {
    startTimer() {
      if (!this.isStopTimer) {
        this.intervalId = setInterval(() => {
          this.count--;
        }, 1000);
        if (this.count <= 0) {
          clearInterval();
          this.$emit("endGame", true);
          this.count = 60;
        }
      }
    },
    gamePause() {
      clearInterval(this.intervalId);
      this.$emit("pauseGame", true);
    },
  },
  mounted() {},
  watch: {
    isStopTimer: {
      handler() {
        this.startTimer();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardIntro.scss";
</style>
