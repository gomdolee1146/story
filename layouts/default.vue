<template>
  <div class="pc">
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainFooter from "../components/layouts/mainFooter.vue";
export default {
  name: "default",
  components: { MainFooter },
  middleware: ["auth"],
};
</script>
