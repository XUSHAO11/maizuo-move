<template>
  <div class="tab">
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
  <van-tabbar-item icon="home-o">电影</van-tabbar-item>
  <van-tabbar-item icon="search">影院</van-tabbar-item>
  <van-tabbar-item icon="friends-o">资讯</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped lang="scss">

</style>