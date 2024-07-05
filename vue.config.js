/**
 * @Author: hqwx.com
 * @Date: 2024-07-03 23:31:14
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 12:16:10
 * @😍: 😃😃
 */
const { defineConfig } = require("@vue/cli-service");
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
});
