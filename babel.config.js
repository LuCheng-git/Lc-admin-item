module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //ele 按需引入
    ["@babel/preset-env", {
      "modules": false,
    }],
  ],
  "plugins": [
    //ele 按需引入
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
