import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/tornado/Home')
const Test = () => import('views/tornado/Test')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
})

// Router Interceptors
// router.beforeEach((to, from, next) => {
// next()
// })

// router.beforeResolve((to, from, next) => {
// next()
// })

// router.afterEach((to, from) => {
// })

export default router
