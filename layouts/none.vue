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
  created(){
    this.$store.commit("auth/getUserInfo");
  }
};
</script>
