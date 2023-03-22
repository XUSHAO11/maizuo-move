<template>
    <div>
        <van-grid :gutter="10">
            
                 <van-grid-item v-for="item in cinemas" :text="item.districtName"/>
           
        </van-grid>
      
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