<template>
  <join-form :editInfo="$route.params" />
</template>

<script>
import joinForm from "@/components/form/joinForm.vue";
export default {
  name: "mypageEdit",
  components: { joinForm },
};
</script>
