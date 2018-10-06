import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import InstructorDashboard from '@/components/InstructorDashboard'
import ForgetPassword from '@/components/ForgetPassword'
import ChangePassword from '@/components/ChangePassword'
import DeleteCodeWordSet from '@/components/DeleteCodeWordSet'
import CreateCodeWordSet from '@/components/CreateCodeWordSet'
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
      path: '/createcodewordset',
      name: 'CreateCodeWordSet',
      component: CreateCodeWordSet,
      meta: {
        role: 'instructor'
      }
    },
    {
      path: '/deletecodewordset',
      name: 'DeleteCodeWordSet',
      component: DeleteCodeWordSet,
      meta: {
        role: 'instructor'
      }
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
