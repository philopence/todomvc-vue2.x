// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// Vue.use(VueRouter)
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
// const router = new VueRouter({
//   routes
// })
// export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import All from '../views/All.vue'
import Active from '../views/Active.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: All
  },
  {
    path: '/active',
    name: 'Active',
    component: Active
  },
  {
    path: '/completed',
    name: 'Completed',
    component: Completed
  }
]

export default new VueRouter({
  routes
})