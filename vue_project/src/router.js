import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/app/login.vue'
import Reg from './components/app/reg.vue'
import info from './components/app/info.vue'

//添加门店
import AddShopHouse from "./components/shopHouse/addShopHouse/addShopHouse.vue"


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
      children:[
        {
          path: 'addShopHouse',
          name: 'addShopHouse',
          component: AddShopHouse
        }
      ]
    }
  ]
})
