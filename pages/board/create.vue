<template>
  <div>
    <board-form :editInfo="$route.params" />
  </div>
</template>

<script>
import boardForm from "@/components/form/boardForm.vue";
export default {
  components: { boardForm },
  layout: "subLayout",
};
</script>
