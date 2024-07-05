/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:30:12
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 22:47:31
 * @😍: 😃😃
 */
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false, // 是否在构建生产包时生成sourceMap文件，false将提高构建速度
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  }

})
