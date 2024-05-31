<template>
  <div class="pc">
    <sub-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import SubHeader from "@/components/layouts/subHeader.vue";
import MainFooter from "@/components/layouts/mainFooter.vue";
export default {
  name: "subLayout",
  components: { SubHeader, MainFooter },
  middleware: ["auth"],
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
