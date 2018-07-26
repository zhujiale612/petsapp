import Vue from 'vue'
import Vuex from 'vuex'

import usersManage from "./components/usersManage/store.js"
import order from "./components/order/store.js"
import pet from "./components/pet/store.js"
//宠主
import Member from "./components/member/store.js"
//服务
import Service from "./components/service/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        order,
        pet,
        usersManage,
        Member,
        Service
    }
})
