<template>
  <div class="pc">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "none",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted(){
    this.$store.commit("auth/test");
  }
};
</script>
