import Vue from 'vue'
import Vuex from 'vuex'

import usersManage from "./components/usersManage/store.js"
import order from "./components/order/store.js"
import pet from "./components/pet/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
    order,
    pet,
usersManage
 }
})
