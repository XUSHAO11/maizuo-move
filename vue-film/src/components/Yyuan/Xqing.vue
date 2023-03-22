<template>
    <div>
        <div v-for="item in cinemas.districtName">
             <van-nav-bar :title="item" left-arrow @click-left="onClickLeft" />
        </div>
       
    </div>
</template>

<script>
export default {
    computed:{
    cityId() { 
      return this.$store.state.cityId;
    },
    cinemas() { 
      return  this.$store.state.cinemas;
    }
  },
  created(){
    this.$store.dispatch("updateCinemas")

  }
};
</script>

<style lang="scss" scoped>

</style>