import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import './plugins/index'
import './assets/style.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
