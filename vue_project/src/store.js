import Vue from 'vue'
import Vuex from 'vuex'

import shopHouse from "./components/shopHouse/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shopHouse
    }
})
