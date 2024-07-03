<template>
  <div class="pc">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "none",
  created() {
    this.$store.commit("auth/getUserInfo");
    this.$store.commit("getMyInfo");
  },
};
</script>
