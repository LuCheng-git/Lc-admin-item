const path = require('path')
const webpack = require("webpack");
const resolve = (dir) => path.join(__dirname, dir);
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
  },
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  
  // webpack主要配置
  chainWebpack: (config) => {
    // 使用svg-sprite-loader对assets/icon里面对svg图片处理
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
    // 排除assets/icons之外对svg仍然使用vuecli自带对loader处理
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons/svg"))
      .end();
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"));
    // 注册全局引用
    config.plugin("provide").use(webpack.ProvidePlugin, [{
      _: "lodash",
    }, ]);
  },
}