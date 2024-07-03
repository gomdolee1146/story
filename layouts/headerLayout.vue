<template>
  <div class="pc__bg">
    <div class="pc__wrap">
      <main-header />
      <div class="header_fix">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/layouts/mainHeader.vue";

export default {
  name: "headerLayout",
  components: { mainHeader },
  middleware: ["auth"],
  created() {
    this.$store.commit("getMyInfo");
  },
};
</script>
<style lang="scss" scoped>
</style>
