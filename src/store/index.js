import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules',false,/\.js$/)
const modules ={}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true //导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突
})

const store = new Vuex.Store({
  modules
})

export default store