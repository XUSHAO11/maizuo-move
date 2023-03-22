import Vue from 'vue'
import App from './Address.vue'
import router from './router'
import store from './store'
import axios from 'axios';
var bus = new Vue()
Vue.prototype.$http = axios;
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  data(){
    return {bus:bus}
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
