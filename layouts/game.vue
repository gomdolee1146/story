<template>
  <div class="pc">
    <sub-header class="header-border_none" />
    <nuxt />
  </div>
</template>

<script>
import SubHeader from "@/components/layouts/subHeader.vue";
export default {
  name: "game",
  components: { SubHeader },
  middleware: ["auth"],
  created() {
    this.$store.commit("getMyInfo");
  },
};
</script>
