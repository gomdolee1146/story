<template>
  <div>
    <login-form />
    <auth-card />
  </div>
</template>

<script>
import loginForm from "@/components/form/loginForm.vue";
import authCard from "@/components/card/authCard.vue";
export default {
  name: "login",
  layout: "none",
  components: { loginForm, authCard },
};
</script>
