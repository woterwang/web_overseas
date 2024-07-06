<!--
 * @Author: hqwx.com
 * @Date: 2024-07-04 21:09:38
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 19:38:55
 * @😍: 😃😃
-->
<template>
	<router-view />
</template>
<script>
import createFingerprint from '@/utils/createFingerprint.js';
export default {
	name: 'App',
	data () {
		return {
		}
	},
	async mounted () {
		const browerId = await createFingerprint()
		console.log('🚀 ~ file: App.vue:21 ~ mounted ~ browerId:', browerId);
	},
}
</script>
<style lang="scss">
	@import '~@/styles/_reset.scss';
</style>
