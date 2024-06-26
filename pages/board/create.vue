<template>
  <board-form :editInfo="$route.params" />
</template>

<script>
import boardForm from "@/components/form/boardForm.vue";
export default {
  components: { boardForm },
  layout: "subLayout",
  mounted() {
  },
};
</script>
