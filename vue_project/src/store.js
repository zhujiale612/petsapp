import Vue from 'vue'
import Vuex from 'vuex'

import usersManage from "./components/usersManage/store.js"
// import todoList from "./components/todoList/store.js"
// import emps from "./components/emps/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
//   dom,
//   todoList,
//   emps
usersManage
 }
})
