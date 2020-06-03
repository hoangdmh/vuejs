import Vue from 'vue'
import App from './App.vue'


import './plugins'; // Tự động tìm tới file index.js

new Vue({
  el: '#app',
  render: h => h(App)
})
