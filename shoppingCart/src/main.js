import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'

import store from './store/index';

Vue.use(Notifications)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
