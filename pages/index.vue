<template>
  <div class="main">
    <create-button />
    <board-list />
  </div>
</template>

<script>
import createButton from "@/components/button/createButton.vue";
import boardList from "@/components/list/boardList.vue";
export default {
  name: "IndexPage",
  layout: "mainLayout",
  components: { boardList, createButton },
};
</script>