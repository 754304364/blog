import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signing:false,
    username:null
  },
  mutations: {
    updateSigning(state){
      state.signing = true;
      var storage=window.localStorage;
      storage.signing = state.signing
      // 在本地存储登录的 用户名 和 登录状态
      storage.username = this.userName;
    }
  },
  actions: {
  },
  modules: {
  }
})
