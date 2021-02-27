import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$http = axios;


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

import axios from 'axios'
axios.get('/', function() {});
axios.post('/', function() {});

// 将 axios 添加的 Vue 原型上后就不需要再在每个需要使用它的页面引入了
Vue.prototype.$http = axios;
$http.get('/', function() {});
$http.post('/', function() {});