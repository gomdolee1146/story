<template>
  <section class="question">
    <div class="question__progress">
      <div class="question__progress_bg"></div>
      <div class="question__progress_bar" :style="`width: ${progress}%`"></div>
    </div>

    <template v-for="(question, idx) in questionList">
      <div class="question__wrap" v-if="questionNum === idx" :key="idx">
        <div class="question__title" v-html="question.question"></div>
        <div class="question__btn_wrap">
          <button
            class="question__btn-a"
            @click="getAnswer(idx, question.type, 0)"
            v-html="question.answer[0]"
          ></button>
          <button
            class="question__btn-b"
            @click="getAnswer(idx, question.type, 1)"
            v-html="question.answer[1]"
          ></button>
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
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    setProgress() {
      this.progress =
        (100 / (this.questionList.length + 1)) * (this.questionNum + 1);
    },

    getAnswer(idx, type, answer) {
      // MBTI 선택지 저장하기 + 프로그레스바
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
      // MBTI 점수계산하기
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
      this.updateGameResult(result);
    },
    updateGameResult(result) {
      const userInfo = {
        id: this.myInfo.id,
        mbtiResult: result,
      };
      this.$store.commit("auth/updateUserInfo", userInfo);
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
