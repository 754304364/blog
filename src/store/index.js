import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    username:null,
    loadingTime:0,
    user:[]
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
