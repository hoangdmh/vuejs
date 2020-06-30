import Vue from 'vue'
import App from './App.vue'
import router from './router/index';

import { Datetime } from 'vue-datetime'
// // You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

import database from './config/firebase';

import './plugins'
import './assets/style.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
