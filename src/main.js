import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

//引入总线
import bus from '@/utils/bus'
//ele 按需引入
import 'element-ui/lib/theme-chalk/index.css'
import '@/plugins/element'
//引入svg
import '@/icons' 

Vue.config.productionTip = false
Vue.use(router)
Vue.use(bus)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
