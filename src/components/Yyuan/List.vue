<template>
  <div>
   

    <van-list v-for="item in cinemas" :key="item.id">
      <van-cell-group>
        <van-cell>
          <template #title>
            <div class="address">
              {{ item.name }}
            </div>

          </template>
          <template #label>
            <div class="address">
              {{ item.address }}
            </div>


          </template>

          <template #default>
            <div style="color:#ff5f16">
              {{ item.lowPrice / 100 }}<span> 起</span>
            </div>
            <div class="km" style="color:#797d82;font-size: 12px;">
             <span> 暂无购票</span>
            </div>



          </template>
        </van-cell>
      </van-cell-group>
    </van-list>


  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      // filmList: [],
    };
  },
  methods: {
  },
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
.address {
  max-width: 200px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>