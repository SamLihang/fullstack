import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import List from '@/components/List'
import Form from '@/components/Form'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/form',
      name: 'form',
      component: Form
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
    }
  ]
})
