<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:19:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 13:08:24
 * @😍: 😃😃
-->
<template>
	<div class="page_layout">
		<PageNav />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Layout",
	components: {
		PageNav: () => import('@/components/pageNav.vue')
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