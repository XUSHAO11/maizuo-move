import Vue from 'vue'
import VueRouter from 'vue-router'
import Yyuan from '../components/Yyuan.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'yingyuan',
    component:Yyuan
   },
 {
  path:'/xq',
  name:'xq',
  component:()=>{
    return import('../components/Yyuan/Xqing.vue')
  }
 },
 {
  path:'/search',
  name:'search',
  component:()=>{
    return import('../components/Yyuan/Search.vue')
  }
 }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
