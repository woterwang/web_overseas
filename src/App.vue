<!--
 * @Author: hqwx.com
 * @Date: 2024-07-04 21:09:38
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-08 22:04:05
 * @😍: 😃😃
-->
<template>
	<router-view />
</template>
<script>
import createFingerprint from '@/utils/createFingerprint.js';
import { checkLogin, loginByMail } from '@/utils/actions.js';
export default {
	name: 'App',
	data () {
		return {
		}
	},
	async mounted () {
		const browerId = await createFingerprint()
		localStorage.setItem('account_id', 'woter_wang@live.com')
		localStorage.setItem('browerId', browerId)
		checkLogin().then(res => {
			console.log('🚀 ~ file: App.vue:23 ~ checkLogin ~ res:', res);
		})
	},
	methods: {
	},
}
</script>
<style lang="scss">
	@import '~@/styles/_reset.scss';
</style>
