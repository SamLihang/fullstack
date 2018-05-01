import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import List from '@/components/List'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      redirect: '/admin/list',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/admin/list',
          name: 'list',
          component: List,
        },
        {
          path: '/admin/form',
          name: 'form',
          component: Form,
        }
      ]
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
    }
  ]
})
