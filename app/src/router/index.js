import Vue from 'vue'
import VueRouter from 'vue-router'
import PeopleList from '../views/PeopleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PeopleList',
    component: PeopleList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
