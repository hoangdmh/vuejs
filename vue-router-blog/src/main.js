import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//import bootstrap
import './plugins'
import HomePage from './page/HomePage.vue'
import Home from './page/Home.vue'
import AboutUs from './page/AboutUs.vue'
import Login from './page/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: HomePage,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about-us',
        component: AboutUs
      }
    ]
  },
  { path: '/login', component: Login },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
