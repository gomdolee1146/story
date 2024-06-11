<template>
  <div>
    <board-form />
    {{ $route.params.isEdit }}
    {{ $route.params.boardIdx }}
  </div>
</template>

<script>
import boardForm from "@/components/form/boardForm.vue";
export default {
  components: { boardForm },
  layout: "subLayout",
};
</script>
