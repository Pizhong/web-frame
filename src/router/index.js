import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import systemOne from './systemOne'
import systemTwo from './systemTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const customRouter = [
  systemOne,
  systemTwo
]

function _extends(r) {
  r.forEach(item => {
    routes.push(item)
  })
}

customRouter.forEach(item => {
  _extends(item)
})

const router = new VueRouter({
  routes
})

export default router
