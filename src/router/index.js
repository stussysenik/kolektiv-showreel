import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onás',
    name: 'O nás',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/časováos',
    name: 'Časova Os',
    component: () => import(/* webpackChunkName: "about" */ '../views/Osa.vue')
  },
  {
    path: '/projekty',
    name: 'Projekty',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/basketbalovyihrisko',
    name: 'Basketbalovy ihrisko',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasketballProject.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
