<template>
  <div class="pc">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "game",
  props: {},
  middleware: ["auth"],
  created() {
    this.$store.commit("getMyInfo");
  },
};
</script>
