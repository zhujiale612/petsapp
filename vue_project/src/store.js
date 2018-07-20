import Vue from 'vue'
import Vuex from 'vuex'

import dom from "./components/dom/store.js"
import todoList from "./components/todoList/store.js"
import emps from "./components/emps/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
  dom,
  todoList,
  emps
 }
})
