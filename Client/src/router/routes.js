import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import Dashboard from '@/components/Dashboard'
import ForgetPassword from '@/components/ForgetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    }
  ]
})
