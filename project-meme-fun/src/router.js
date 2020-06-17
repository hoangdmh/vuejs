import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ChangePassword from './pages/ChangePassword'
import PostDetail from './pages/PostDetail'
import PostUpload from './pages/PostUpload'
import UserPage from './pages/UserPage'
import UserProfile from './pages/UserProfile'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user/:id',
    name: 'user-page',
    component: UserPage
  },
  {
    path: '/user/:id/profile',
    name: 'user-profile',
    component: UserProfile
  },
  {
    path: '/user/:id/password',
    name: 'change-password',
    component: ChangePassword
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail
  },
  {
    path: '/upload',
    name: 'upload',
    component: PostUpload
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
