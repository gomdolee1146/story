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
      timer: null,
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

          if ((this.count < 0)) {
            clearInterval(this.intervalId);
            this.$emit("endGame", true);
            this.count = 60;
            this.timer = null
          }
        }, 1000);
      }
    },
    gamePause() {
      clearInterval(this.intervalId);
      this.timer = this.count;
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
    count: {
      handler() {
        if (this.handler < 0) {
          console.log('실패!')
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/cardTop.scss";
</style>
