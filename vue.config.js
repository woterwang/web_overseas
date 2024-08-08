/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:30:12
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-08 11:36:02
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
				"@jonsData": path.resolve(__dirname, "public/josnData/"),
			},
		},
		devServer: {
			client: {
				overlay: false,
			},
			proxy: {
				"/api": {
					target: "http://47.88.85.17:8080",
					pathRewrite: { "^/api": "" },
					changeOrigin: true,
				},
			},
		}
	}
})
