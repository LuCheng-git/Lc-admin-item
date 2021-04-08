import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
//为解决el-menu标题不隐藏问题
import Fragment from "vue-fragment";
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
Vue.use(Fragment.Plugin);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
