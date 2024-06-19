<template>
  <div class="header">
    <div class="header__btn">
      <button class="btn-back" @click="goToBack"><i></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subHeader',
  methods:{
    goToBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/scss/components/layouts/subHeader.scss';
</style>