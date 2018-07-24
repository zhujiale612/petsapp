import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/app/login.vue'
import Reg from './components/app/reg.vue'
import info from './components/app/info.vue'

//>>>>>>>>>>>>>>>平台的<<<<<<<<<<<<<<<<
//添加门店
import AddShopHouse from "./components/shopHouse/platform/addShopHouse.vue"
//已关门店
import GetShophouse from "./components/shopHouse/platform/getShopHouse.vue"
//查看图片
import LookImg from "./components/shopHouse/platform/lookImg.vue"
//修改
import AlterHouse from "./components/shopHouse/platform/alterHouse.vue"
//审核
import Auditing from "./components/shopHouse/platform/auditing.vue"
//已审核
import SuccessApply from "./components/shopHouse/platform/successApply.vue"

//>>>>>>>>>>>>>>>>>>>门店的<<<<<<<<<<<<<<<<<
//可以申请的门店
import ExistHouse from "./components/shopHouse/store/existHouse.vue"
//申请
import ApplyHouse from "./components/shopHouse/store/applyHouse.vue"
//审核中
import Applying from "./components/shopHouse/store/applying.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:username',
      name: 'Login1',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/info',
      name: 'info',
      component: info,
      children: [
        {
          path: 'addShopHouse',
          name: 'addShopHouse',
          component: AddShopHouse
        },
        {
          path: 'getShophouse',
          name: 'getShophouse',
          component: GetShophouse
        },
        {
          path: 'lookImg/:imgId',
          name: 'lookImg',
          component: LookImg
        },
        {
          path: 'alterHouse/:houseId',
          name: 'alterHouse',
          component: AlterHouse
        },
        {
          path: 'existHouse',
          name: 'existHouse',
          component: ExistHouse
        },
        {
          path: 'applyHouse/:houseId',
          name: 'applyHouse',
          component: ApplyHouse
        },
        {
          path: 'applying',
          name: 'applying',
          component: Applying
        },
        {
          path: 'auditing',
          name: 'auditing',
          component: Auditing
        },
        {
          path: 'successApply',
          name: 'successApply',
          component: SuccessApply
        },
      ]
    }
  ]
})
