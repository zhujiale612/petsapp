import Vue from 'vue'
// import App from './App.vue'
import App from "./App.vue"
import router from "./router.js"


import store from './store.js'
import storeUsers from './components/usersManage/storeUsers.vue'
import order from './components/order/order.vue'
import pet from './components/pet/pet.vue'
//宠主
import addmember from "./components/member/addmember.vue"
import ElementUI from 'element-ui';
//服务
import addservice from "./components/service/addservice"
import getservice from "./components/service/getservice"


import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.component("storeUsers",storeUsers)
Vue.component("order", order)
Vue.component("pet", pet)
Vue.component("addmember", addmember)
Vue.component("addservice", addservice)
Vue.component("getservice", getservice)
new Vue({
 
  render: h =>
   h(App),router, store,
}).$mount('#app')
