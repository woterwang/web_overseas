/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:40:34
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 14:51:47
 * @😍: 😃😃
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueRouter from "vue-router";
Vue.use(vueRouter);
// createApp(App).use(router).mount("#app");
new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
