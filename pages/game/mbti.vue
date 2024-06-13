<template>
  <div class="mbti">
    <mbti-intro v-if="isShowIntro" @showMBTI="showMBTI" />
    <mbti-question v-if="isShowQuestion" @showResult="showResult" />
    <mbti-result v-if="isShowResult" :result="result" />
  </div>
</template>

<script>
import mbtiIntro from "@/components/game/mbtiIntro.vue";
import mbtiQuestion from "@/components/game/mbtiQuestion.vue";
import mbtiResult from "@/components/game/mbtiResult.vue";
export default {
  name: "mbti",
  layouts: "game",
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
