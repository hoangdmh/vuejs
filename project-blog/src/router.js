import Vue from 'vue'
import VueRouter from 'vue-router'

import BlogDetail from './pages/BlogDetail.vue'
import AboutUs from './pages/AboutUs.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/NotFound.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    // dynamic router, start with a colon ":"
    path: '/blog-detail/:title.:id',
    name: 'blog-detail',
    component: BlogDetail,
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin) {
        next()
      } else {
        next('/login')
      }
    }
  },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router
