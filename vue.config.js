/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:30:12
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 14:44:16
 * @😍: 😃😃
 */
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  }

})
