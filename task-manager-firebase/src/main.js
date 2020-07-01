import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store';

import { Datetime } from 'vue-datetime'
// // You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

import { database } from './config/firebase';

import './plugins'
import './assets/style.css'

// get data from firebase
var taskRef = database.ref('tasks');
taskRef.on('value', function (snapshot) {
  let data = snapshot.toJSON();
  store.commit('SET_LIST_TASKS', data)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
