import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import test from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/test',
      name: 'test_name',
      component: test
    }
  ]
})
