import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signing:false,
    username:null,
    loadingTime:0
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
