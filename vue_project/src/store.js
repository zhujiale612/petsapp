import Vue from 'vue'
import Vuex from 'vuex'

import usersManage from "./components/usersManage/store.js"
import order from "./components/order/store.js"
import pet from "./components/pet/store.js"
//宠主
import Member from "./components/member/store.js"
//服务
import Service from "./components/service/store.js"
//商品
import Goodstore from "./components/goods/store.js"
//门店
import shopHouse from "./components/shopHouse/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        order,
        pet,
        usersManage,
        Member,
        Service,
        Goodstore,
        shopHouse
    }
})
