import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = ()=>import('views/index/Index')
const mine = ()=>import('views/mine/Mine')
const cart = ()=>import('views/cart/Cart')
const collection = ()=>import('views/collection/Collection')
const login = ()=>import('views/login/Login')
const register = ()=>import('views/register/Register')
const forget = ()=>import('views/forgetPass/Forget')

const routes = [
  {
    path: '',
    redirect:'/index',
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/collection',
    component: collection
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/forget',
    component: forget
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
