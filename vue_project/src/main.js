import Vue from 'vue'
// import App from './App.vue'
import App from "./app1.vue"
import router from "./router.js"


import store from './store.js'
import storeUsers from './components/usersManage/storeUsers.vue'
import order from './components/order/order.vue'
import pet from './components/pet/pet.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.component("storeUsers",storeUsers)
Vue.component("order", order)
Vue.component("pet", pet)


new Vue({
 
  render: h =>
   h(App),router, store,
}).$mount('#app')
