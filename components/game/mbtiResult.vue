<template>
  <section class="result">
    <div class="result__header">
      <div class="result__header_box">MBTI 테스트</div>
      <div class="result__thumb">
        <!-- <img :src="resultInfo.thumb" /> -->
      </div>
      <div class="result__title"></div>
    </div>
    <div class="result__wrap">
      <div class="result__content">
        <div class="result__box">
          <div class="mbti__desc">
            <span>이런게 좋아!</span>
            <i class="ico-like"></i>
          </div>
          <ul class="result__list">
            <li
              class="result__lst"
              v-for="(like, idx) in resultInfo.likeDescription"
              :key="idx"
            >
              {{ like }}
            </li>
          </ul>
        </div>
        <div class="result__box">
          <div class="mbti__desc">
            <span>이런건 싫어!</span>
            <i class="ico-xmark"></i>
          </div>
          <ul class="result__list">
            <li
              class="result__lst"
              v-for="(hate, idx) in resultInfo.hateDescription"
              :key="idx"
            >
              {{ hate }}
            </li>
          </ul>
        </div>

        <div class="result__box">
          <div class="mbti__desc">
            <span>나의 특징은?</span>
            <i class="ico-check"></i>
          </div>
          <ul class="result__list">
            <li
              class="result__lst"
              v-for="(character, idx) in resultInfo.character"
              :key="idx"
            >
              {{ character }}
            </li>
          </ul>
        </div>
      </div>
      <div class="result__footer">
        <div class="result__footer_box">
          <h4>나와의 궁합은?</h4>
        </div>
        <div class="result__footer_box">
          <p>Good!</p>
          <span>{{ result.bestType }}</span>
        </div>
        <div class="result__footer_box">
          <p>Bad!</p>
          <span>{{ result.worstType }}</span>
        </div>
      </div>
    </div>

    <button class="btn-reload" @click="showIntro">다시 시작하기</button>
  </section>
</template>

<script>
import { resultList } from "@/data/mbti";

export default {
  name: "mbtiResult",
  data() {
    return {
      resultList: resultList,
      resultInfo: {},
    };
  },
  props: {
    result: { type: String, default: "" },
  },
  methods: {
    showIntro() {
      this.$emit("showIntro");
    },
    getResultInfo() {
      let idx = _.findIndex(this.resultList, (o) => {
        return o.type === this.result;
      });

      this.resultInfo = this.resultList[idx];
    },
  },
  mounted() {
    this.getResultInfo();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/game/mbtiCommon.scss";
@use "@/assets/scss/components/game/mbtiResult.scss";
</style>
