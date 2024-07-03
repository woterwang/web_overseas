/**
 * @Author: woterWang
 * @Date: 2024-07-03 23:43:36
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-03 23:48:13
 * @😍: 😃😃
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/generaterImg',
		name: 'generaterImg',
		component: () => import('@/views/GeneraterImg.vue'),
		meta: {
			title: 'generaterImg'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
