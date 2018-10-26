import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/User/SignIn'
import Signup from '@/components/User/Signup'
import InstructorDashboard from '@/components/InstructorDashboard'
import ForgetPassword from '@/components/User/ForgetPassword'
import ChangePassword from '@/components/User/ChangePassword'
import StudentDashboard from '@/components/StudentDashboard'
import CourseStudent from '@/components/CourseStudent'
import CodeWordSet from '@/components/CodeWordSet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
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
      path: '/coursestudent',
      name: 'CourseStudent',
      component: CourseStudent
    },
    {
      path: '/codewordset',
      name: 'CodeWordSet',
      component: CodeWordSet
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
