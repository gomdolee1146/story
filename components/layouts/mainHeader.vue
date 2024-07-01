<template> 
  <div class="header">
    <div class="header__logo" @click="goToMain">
      <i class="header__logo_el"></i>
    </div>
    <div class="header__btn_wrap">
      <button class="header__btn header__btn-alarm">알람버튼</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'mainHeader',
  methods:{
    goToMain(){
      this.$router.push('/');
    }
  }

}
</script>
<style lang="scss" scoped>
@use '@/assets/scss/components/layouts/mainHeader.scss';
</style>
