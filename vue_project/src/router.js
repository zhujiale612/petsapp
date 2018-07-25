import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/app/login.vue'
import Reg from './components/app/reg.vue'
import info from './components/app/info.vue'
import storeUsers from "./components/usersManage/storeUsers.vue"
// import todolist from './components/todoList/todolist.vue'
// import dom from './components/dom/dom.vue'
// import emps from './components/emps/emps.vue'

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
      //   {
      //     path: '/dom',
      //     name: 'dom',
      //     component: dom
      //   },
      //   {
      //     path: '/emps',
      //     name: 'emps',
      //     component: emps
      //   },
      ]
    }
  ]
})
