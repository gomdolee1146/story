<template>
  <div>
    <my-page-card />
    <my-history-card />
    <my-page-box @leaveStory="leaveStory" />
    <system-confirm
      v-if="isShowConfirm"
      :confirm="confirm"
      @hideConfirm="hideConfirm"
      @doneConfirm="doneConfirm"
    />
  </div>
</template>

<script>
import myPageCard from "@/components/card/myPageCard.vue";
import myHistoryCard from "@/components/card/myHistoryCard.vue";
import myPageBox from "@/components/box/myPageBox.vue";

export default {
  name: "myPage",
  layout: "mainLayout",
  components: { myPageCard, myPageBox, myHistoryCard },
  data() {
    return {
      isShowConfirm: false,
      confirm: {},
    };
  },
  computed: {
    myInfo() {
      return this.$store.state.user;
    },
  },
  methods: {
    hideConfirm(isShow) {
      this.isShowConfirm = isShow;
    },
    doneConfirm() {
      this.$store.commit("auth/removeUserInfo", this.myInfo);
      this.$store.dispatch("LEAVESTORY");
      this.$store.state.user = {};
      this.$router.push("/");
    },
    leaveStory(leaveInfo) {
      this.isShowConfirm = leaveInfo.isShowConfirm;
      this.confirm = leaveInfo.confirm;
    },
  },
  created() {
    this.$store.commit("auth/getUserInfo");
  },
};
</script>
