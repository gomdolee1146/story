<template>
  <section class="question">
    <div class="question__progress">
      <div class="question__progress_bg"></div>
      <div class="question__progress_bar" :style="`width: ${progress}%`"></div>
    </div>

    <template v-for="(question, idx) in questionList">
      <div class="question__wrap" v-if="questionNum === idx" :key="idx">
        {{ idx }}
        {{ questionNum }}
        <div class="question__title">{{ question.question }}</div>
        <div class="question__btn_wrap">
          <button
            class="question__btn-a"
            @click="getAnswer(idx, question.type, 0)"
          >
            {{ question.answer[0] }}
          </button>
          <button
            class="question__btn-b"
            @click="getAnswer(idx, question.type, 1)"
          >
            {{ question.answer[1] }}
          </button>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { questionList } from "@/data/mbti";
export default {
  name: "mbtiQuestion",
  data() {
    return {
      questionList: questionList,
      questionNum: 0,
      answerList: [],
      progress: "",
    };
  },
  methods: {
    setProgress() {
      this.progress =
        (100 / (this.questionList.length + 1)) * (this.questionNum + 1);
    },

    getAnswer(idx, type, answer) {
      if (idx === this.questionList.length - 1) {
        this.countPoint();
      } else {
        this.answerList[idx] = {
          type: type,
          answer: answer,
        };
        this.questionNum++;
        this.setProgress();
      }
    },
    countPoint() {
      let eiResult = 0;
      let nsResult = 0;
      let tfResult = 0;
      let pjResult = 0;
      let result = "";

      this.answerList.map((x) => {
        if (x.type === "ei" && x.userAnswer === 0) eiResult++;
        if (x.type === "ns" && x.userAnswer === 0) nsResult++;
        if (x.type === "tf" && x.userAnswer === 0) tfResult++;
        if (x.type === "pj" && x.userAnswer === 0) pjResult++;
      });

      eiResult > 1 ? (result += "e") : (result += "i");
      nsResult > 1 ? (result += "n") : (result += "s");
      tfResult > 1 ? (result += "t") : (result += "f");
      pjResult > 1 ? (result += "p") : (result += "j");

      this.$emit("showResult", result);
    },

    goToPrevAnswer() {
      this.questionNum--;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/mbtiCommon.scss";
@use "@/assets/scss/components/game/mbtiQuestion.scss";
</style>
