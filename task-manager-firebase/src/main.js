import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import database from './config/firebase';

import './plugins'
import './assets/style.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
