<template>
  <div class="mbti">
    <mbti-intro v-if="isShowIntro" @startMBTI="startMBTI" />
    <mbti-question v-if="isShowQuestion" />
    <mbti-result v-if="isShowResult" />
  </div>
</template>

<script>
import mbtiIntro from "@/components/mbti/mbtiIntro.vue";
import MbtiQuestion from "@/components/mbti/mbtiQuestion.vue";
import MbtiResult from "@/components/mbti/mbtiResult.vue";
export default {
  name: "",
  layouts: "game",
  data() {
    return {
      isShowIntro: true,
      isShowQuestion: false,
      isShowResult: false,
    };
  },
  components: { mbtiIntro, MbtiQuestion, MbtiResult },
  methods: {
    startMBTI() {
      this.isShowIntro = false;
      this.isShowQuestion = true;
    },
  },
};
</script>
