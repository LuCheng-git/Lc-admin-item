import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/page/login'
import Layout from '@/layout'

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
  {
    path: '/menu1',
    name: 'menu1',
    component: Layout,
    redirect: "/menu1",
    children: [
      {
        path: '/menu1',
        component: () => import("@/page/menu1/sub1.vue"),
        name: 'sub1',
        meta: {
          title: '菜单1',
          icon: 'el-icon-phone'
        }
      },
      {
        path: '/sub2',
        component: () => import("@/page/menu1/sub1.vue"),
        name: 'sub2',
        meta: {
          title: '菜单2',
          icon: 'el-icon-phone'
        }
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: Layout,
    redirect: "/menu2",
    children: [
      {
        path: '/sub1',
        component: () => import("@/page/menu1/sub1.vue"),
        name: 'sub1',
        meta: {
          title: '菜单二',
          icon: 'el-icon-phone'
        }
      }
    ]
  }
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

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("userName")) {
    next()
    if (to.path === "/login" || to.path === "/") {
      next({
        path: "/menu1",
        replace: true,
      });
    }
  } else {
    if (to.path === "/login") {
      next()
    }
  }
})

export default router