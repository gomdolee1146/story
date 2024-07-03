<template>
  <div class="pc">
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/components/layouts/mainHeader.vue";
import MainFooter from "@/components/layouts/mainFooter.vue";
export default {
  name: "mainLayout",
  components: { MainHeader, MainFooter },
  middleware: ["auth"],
  created() {
    this.$store.commit("getMyInfo");
  },
};
</script>
