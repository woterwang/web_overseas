<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:19:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-08 22:06:24
 * @😍: 😃😃
-->
<template>
	<div class="page_layout">
		<PageNav />
		<section class="page_content">
			<router-view></router-view>
		</section>
		<PageFooter />
	</div>
</template>

<script>
import { checkLogin, loginByMail } from '@/utils/actions.js';
export default {
	name: "Layout",
	components: {
		PageNav: () => import('@/components/pageNav.vue'),
		PageFooter: () => import('@/components/pageFooter.vue'),
	},
	data () {
		return {
			// linkData,
		}
	},
	mounted () {
		this.loginByMail()
	},
	methods: {
		loginByMail () {
			const token = this.$route.query.token || ''
			console.log('🚀 ~ file: layout.vue:37 ~ loginByMail ~ token:', token);
			if (!token) return
			loginByMail({
				token
			}).then(res => {
				// console.log('🚀 ~ file: layout.vue:42 ~ loginByMail ~ res:', res);
			})
		}
	}
}
</script>

<style lang="scss">
	.page_layout {
		max-width: 1920px;
		margin: 0 auto;
		.page_content {
			--contentH: calc(100vh - 72px - 120px);
			min-height: unquote('calc(100vh - 72px - 120px)');
		}
	}
</style>