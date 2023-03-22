import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-plugin-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: "store"
  })],
  state: {
    cityId: 110100,
    cinemas: []
  },
  getters: {
  },
  mutations: {

    dataUpdate(state, val) {
      state.cityId = val
    },
    changeCinemas(state, val) {
      state.cinemas = val
    }
  },
  actions: {
    dataUpdate(store, val) {

      setTimeout(function () {
        store.commit("dataUpdate", val)
      }, 1000);
    },
    updateCinemas(store) {
      // console.log('aaa', this);
      axios.get(`https://m.maizuo.com/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=1701783`, {
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753253105169126284722177","bc":"110100"}',
          "X-Host": 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        console.log(res);
        //影院数组
        // that.cinemas = res.data.data.cinemas;
        // console.log(that.cinemas);
        store.commit("changeCinemas", res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
