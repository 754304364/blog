import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'
// Vue.prototype.$axios = axios;
// Vue.prototype.HOST = 'http://localhost:3000'

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

