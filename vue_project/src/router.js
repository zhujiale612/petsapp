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
      path: '/info/:userType',
      name: 'info',
      component: info,
      children:[
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
          path: '/门店管理员/addservice',
          name: 'addservice',
          component: Addservice
        },
        {
          path: '/门店管理员/getservice',
          name: 'getservice',
          component: Getservice
        },
      ]
    }
  ]
})
