<template>
  <div>
    首页
    <ul>
            <!-- 二级导航 -->
            <li> <router-link to="/home/item1" tag="span">item1</router-link>   </li>
            <li> <router-link to="/home/item2"  tag="span">item2</router-link>   </li>
</ul>
        <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // 可以获得路由传参
    created(){
      this.id=this.$route.query.age;
      console.log('created',this.$route.query);
    },
    // 可以获得路由传参
    mounted(){
      console.log('mounted',this.$route.query);
    }
  }
</script>

<style lang="scss" scoped>

</style>