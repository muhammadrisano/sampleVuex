import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './view/Login.vue'
import Post from './view/Post.vue'
import Register from './view/Register.vue'
import { store } from './store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/',
    name: 'post',
    component: Post,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
