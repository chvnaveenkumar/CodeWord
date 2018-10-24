import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/User/Home'
import Signup from '@/components/User/Signup'
import InstructorDashboard from '@/components/InstructorDashboard'
import ForgetPassword from '@/components/User/ForgetPassword'
import ChangePassword from '@/components/User/ChangePassword'
import StudentDashboard from '@/components/StudentDashboard'
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
      path: '/instructordashboard',
      name: 'InstructorDashboard',
      component: InstructorDashboard,
      meta: {
        role: 'instructor'
      }
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/changepassword/:loginrole',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/studentdashboard',
      name: 'StudentDashboard',
      component: StudentDashboard,
      meta: {
        role: 'student'
      }
    }
  ]
})
