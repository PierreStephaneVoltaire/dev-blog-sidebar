import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Groupbar from '../components/groupbar.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Sidebar
  },
  {
    path: '/post',
    component: Groupbar

  }
]

const router = new VueRouter({
  mode: 'history',

  routes
})

export default router
