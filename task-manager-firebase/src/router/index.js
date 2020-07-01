import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  ifNotAuthenticated,
  ifAuthenticated
} from '../plugins/authenticate';

import Login from '../pages/Login.vue';
import Register from '../pages/Register';
import KanBanBoard from '../pages/KanBanBoard';
import ListTasks from '../pages/ListTasks';
import CreateTask from '../pages/CreateTask';
import EditTask from '../pages/EditTask';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: KanBanBoard,
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '',
        name: 'home-page',
        component: ListTasks
      }, {
        path: 'create',
        name: 'create-task-page',
        component: CreateTask
      }, {
        path: 'edit/:id',
        name: 'edit-task-page',
        component: EditTask
      }
    ]
  }, {
    path: '/login',
    name: 'login-page',
    component: Login,
    beforeEnter: ifNotAuthenticated
  }, {
    path: '/register',
    name: 'register-page',
    component: Register,
    beforeEnter: ifNotAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;
