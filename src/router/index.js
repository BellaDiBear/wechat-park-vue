import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import LicensePay from '@/page/licensePay'
import ChargeDetail from '@/page/chargeDetail'
import ArrearsRecord from '@/page/arrearsRecord'
import AddCar from '@/page/addCar'
import MyCar from '@/page/myCar'
import Account from'@/page/account'
import ChargeRec from '@/page/chargeRec'
import Purse from '@/page/purse'
import Success from '@/page/success'
import ParkRec from '@/page/parkRec'
import AppDownload from '@/page/appDownload'
import ParkMine from'@/page/parkMine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Login
    },{
      path: '/login',
      component: Login
    },
    {
      path: '/licensePay',
      component: LicensePay
    },
    {
      path: '/chargeDetail',
      component: ChargeDetail
    },
    {
      path: '/arrearsRecord',
      component: ArrearsRecord
    },
    {
      path: '/addCar',
      component: AddCar
    },{
      path: '/myCar',
      component: MyCar
    },
    {
      path:'/account',
      component:Account
    },
    {
      path:'/chargeRec',
      component:ChargeRec
    },{
      path:'/purse',
      component:Purse
    },{
      path:'/success',
      component:Success
    },{
      path:'/parkMine',
      component:ParkMine
    },{
      path:'/parkRec',
      component:ParkRec
    },{
      path:'/appDownload',
      component:AppDownload
    }
  ]
})
