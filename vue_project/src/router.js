import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/app/login.vue'
import Reg from './components/app/reg.vue'
import info from './components/app/info.vue'
import storeUsers from "./components/usersManage/storeUsers.vue"
import order from './components/order/order.vue'
import pet from './components/pet/pet.vue'
//宠主
import Addmember from './components/member/addmember.vue'
import Getmember from './components/member/getmember.vue'
//服务
import Addservice from "./components/service/addservice"
import Getservice from "./components/service/getservice"
//商品
import Addgoods from "./components/goods/addgoods.vue"
import Goodslist from './components/goods/goodslist.vue'
import Goodsgrid from './components/goods/goodsgrid.vue'



//>>>>>>>>>>>>>>>平台的<<<<<<<<<<<<<<<<
//添加门店
import AddShopHouse from "./components/shopHouse/platform/addShopHouse.vue"
//已关门店
import GetShophouse from "./components/shopHouse/platform/getShopHouse.vue"
//查看图片
import LookImg from "./components/shopHouse/platform/lookImg.vue"
//修改
// import AlterHouse from "./components/shopHouse/platform/alterHouse.vue"
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
//拥有的门店
import HaveHouse from "./components/shopHouse/store/haveHouse.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:userName',
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
          path: '/storeUsers',
          name: 'storeUsers',
          component: storeUsers
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/pet',
          name: 'pet',
          component: pet
        },
        {
          path: '/addmember',
          name: 'addmember',
          component: Addmember
        },
        {
          path: '/getmember',
          name: 'getmember',
          component: Getmember
        },
        {
          path: '/addservice',
          name: 'addservice',
          component: Addservice
        },
        {
          path: '/getservice',
          name: 'getservice',
          component: Getservice
        },
        {
          path: '/addgoods',
          name: 'addgoods',
          component: Addgoods
        },
        {
          path: '/goodslist',
          name: 'goodslist',
          component: Goodslist
        },
        {
          path: '/goodsgrid/:goodsId',
          name: 'goodsgrid',
          component: Goodsgrid
        },
        //门店
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
        // {
        //   path: 'alterHouse/:houseId',
        //   name: 'alterHouse',
        //   component: AlterHouse
        // },
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
        {
          path: 'haveHouse',
          name: 'haveHouse',
          component: HaveHouse
        },
      ]
    }
  ]
})
