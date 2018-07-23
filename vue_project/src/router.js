import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/app/login.vue'
import Reg from './components/app/reg.vue'
import info from './components/app/info.vue'

//添加门店
import AddShopHouse from "./components/shopHouse/addShopHouse.vue"
//已关门店
import GetShophouse from "./components/shopHouse/getShopHouse.vue"
//查看图片
import LookImg from "./components/shopHouse/lookImg.vue"
//修改
import AlterHouse from "./components/shopHouse/alterHouse.vue"

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
      ]
    }
  ]
})
