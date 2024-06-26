<template>
  <div class="mbti">
    <transition name="fade">
      <mbti-intro v-if="isShowIntro" @showMBTI="showMBTI" />
    </transition>
    <transition name="fade">
      <mbti-question v-if="isShowQuestion" @showResult="showResult" />
    </transition>
    <transition name="fade">
      <mbti-result v-if="isShowResult" :result="mbtiResult" @showIntro="showIntro" />
    </transition>
  </div>
</template>

<script>
import mbtiIntro from "@/components/game/mbtiIntro.vue";
import mbtiQuestion from "@/components/game/mbtiQuestion.vue";
import mbtiResult from "@/components/game/mbtiResult.vue";
export default {
  name: "mbti",
  layout: "game",
  components: { mbtiIntro, mbtiQuestion, mbtiResult },
  data() {
    return {
      isShowIntro: true,
      isShowQuestion: false,
      isShowResult: false,

      mbtiResult: "",
    };
  },
  methods: {
    showIntro() {
      this.isShowIntro = true;
      this.isShowQuestion = false;
      this.isShowResult = false;
    },

    showMBTI() {
      this.isShowIntro = false;
      this.isShowQuestion = true;
      this.isShowResult = false;
    },

    showResult(result) {
      this.isShowIntro = false;
      this.isShowQuestion = false;
      this.isShowResult = true;
      this.mbtiResult = result;
    },
  },
};
</script>
