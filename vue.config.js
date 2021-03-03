const path = require('path')

module.exports = {
  // 对象和函数都可以，如果要控制开发环境可以选择函数
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve('src')
      }
    }
  }
}