<template>
    <div>
        <van-tabbar v-model="active" active-color="#ff5f16" inactive-color="#797d82">
  <van-tabbar-item class="tabbar-txt iconfont icon-dianying"><span class="txt"> 电影</span></van-tabbar-item>
  <van-tabbar-item class="tabbar-txt iconfont icon-yingyuan"><span class="txt">影院</span></van-tabbar-item>
  <van-tabbar-item class="tabbar-txt iconfont icon-zixun"><span class="txt">咨询</span></van-tabbar-item>
  <van-tabbar-item class="tabbar-txt iconfont icon-wode2"><span class="txt">我的</span></van-tabbar-item>
  
</van-tabbar>

    </div>
</template>

<script>
import '@/static/iconfont.css'
   export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
// tabbar文字 图标 大小
.tabbar-txt{
    font-size: 25px;
    line-height: 15px;
    color: #797d82;
}

.txt{
    font-size: 15px;
}
</style>