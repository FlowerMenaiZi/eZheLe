import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = () => import('views/index/Index')
const mine = () => import('views/mine/Mine')
const cart = () => import('views/cart/Cart')
const collection = () => import('views/mine/collection')
const login = () => import('views/login/Login')
const register = () => import('views/register/Register')
const forget = () => import('views/forgetPass/Forget')
const seller = () => import('views/seller/Seller')
const searchResult = () => import('views/searchResult/SearchRes')
const changePos = () => import('views/changePos/ChangePos')
const sellerAdmin = () => import('views/sellerAdmin/SellerAdmin')
const addPay = () => import('views/mine/addPayPass')
const modifyPayPass = () => import('views/mine/modifyPayPass')
const myOrder = () => import('views/mine/myOrder')
const evaluation = () => import('views/mine/evaluation')
const history = () => import('views/mine/historyShop')
const balance = () => import('views/mine/balance')
const address = () => import('views/mine/shipAddress')
const entry = () => import('views/mine/storeEntry')
const shop = () => import('views/shop/Shop')

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
    path: '/order',
    component: myOrder
  },
  {
    path: '/eval',
    component: evaluation
  },
  {
    path: '/hShop',
    component: history
  },
  {
    path: '/balance',
    component: balance
  },
  {
    path: '/address',
    component: address
  },
  {
    path: '/entry',
    component: entry
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
  {
    path: '/shop/:shopId',
    component: shop
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
