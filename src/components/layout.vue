<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:19:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 16:28:54
 * @😍: 😃😃
-->
<template>
	<div class="page_layout">
		<PageNav />
		<router-view></router-view>
		<PageFooter />
	</div>
</template>

<script>
export default {
	name: "Layout",
	components: {
		PageNav: () => import('@/components/pageNav.vue'),
		PageFooter: () => import('@/components/pageFooter.vue'),
	},
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
.page_layout {
	max-width: 1920px;
	margin: 0 auto;
}
</style>