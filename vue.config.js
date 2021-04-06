const path = require('path')

module.exports = {
  // 对象和函数都可以，如果要控制开发环境可以选择函数
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve('src') //别名
      }
    }
  },
  // 代理
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "0.0.0.0",
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
  }
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
}