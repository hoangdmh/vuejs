import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './page/HomePage.vue'
import Home from './page/Home.vue'
import AboutUs from './page/AboutUs.vue'
import Login from './page/Login.vue'
import ListUser from './page/ListUser.vue'
import NotFound from './page/NotFound.vue'

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
  { path: '/user/:id?', component: ListUser },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router
