<template>
  <button class="btn-create" @click="goToCreate"><i></i></button>
</template>

<script>
export default {
  name: 'createButton',
  methods:{
    goToCreate(){
      this.$router.push("/board/create"); 
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components/button/button.scss'
</style>