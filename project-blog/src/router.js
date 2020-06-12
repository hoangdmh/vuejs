import Vue from 'vue'
import VueRouter from 'vue-router'

import BlogDetail from './pages/BlogDetail.vue'
import AboutUs from './pages/AboutUs.vue'
import Contact from './pages/Contact.vue'
import HomePage from './pages/HomePage.vue'

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
    path: '/blog-detail/:title.:id',
    name: 'blog-detail',
    component: BlogDetail
  }
]

const router = new VueRouter({
  //mode: 'history',
  routes // short for `routes: routes`
})

export default router
