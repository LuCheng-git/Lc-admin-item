import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/page/login'
// import Layout from '@layout'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true,
    noCache: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true,
    noCache: true,
  },
]

const createRouter = () => 
  new VueRouter({
    scrollBehavior: () => ({
      y: 0,
    }),
    mode: 'hash',
    routes: constantRoutes,
  })


const router = createRouter()


export default router