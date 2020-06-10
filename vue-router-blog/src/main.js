import Vue from 'vue'
import App from './App.vue'

//import bootstrap
import './plugins'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
