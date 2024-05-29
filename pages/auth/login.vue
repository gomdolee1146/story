<template>
  <login-form />
</template>

<script>
import loginForm from '@/components/form/loginForm.vue'
export default {
  name: 'login',
  layout: 'none',
  components: { loginForm },
}
</script>