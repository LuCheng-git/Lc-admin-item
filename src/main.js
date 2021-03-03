import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

//ele 按需引入
import 'element-ui/lib/theme-chalk/index.css'
import './components/common/element'

Vue.config.productionTip = false
Vue.use(router)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
