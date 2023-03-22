<template>
  <div class="tab">
<van-tabs v-model="active"  animated>
  <van-tab title="正在热映" type="'line-width'='60px'" line-height="20px">
   <ul>
    <li v-for="n in 10" :key="n">111</li>
   </ul>
  </van-tab>
  <van-tab title="即将上映">
    <ul>
      <li v-for="i in 10" :key="i">222</li>
    </ul>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
    return {
      active: 2,
    };
  },
  
}
</script>

<style scoped lang="scss">

</style>