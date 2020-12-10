import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = () => import('views/index/Index')
const mine = () => import('views/mine/Mine')
const cart = () => import('views/cart/Cart')
const collection = () => import('views/collection/Collection')
const login = () => import('views/login/Login')
const register = () => import('views/register/Register')
const forget = () => import('views/forgetPass/Forget')
const seller = () => import('views/seller/Seller')
const searchResult = () => import('views/searchResult/SearchRes')
const changePos = () => import('views/changePos/ChangePos')
const sellerAdmin = () => import('views/sellerAdmin/SellerAdmin')
const addPay = () => import('views/mine/addPayPass')
const modifyPayPass = () => import('views/mine/modifyPayPass')

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/mine',
    component: mine,
  },
  {
    path: '/addPay',
    component: addPay
  },
  {
    path: '/modifyPay',
    component: modifyPayPass
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
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/result/:item',
    component: searchResult
  },
  {
    path: '/selectpos',
    component: changePos
  },
  {
    path: '/admin',
    component: sellerAdmin
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
