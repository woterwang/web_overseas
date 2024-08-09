<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:19:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-09 12:45:39
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
import { checkLogin, } from '@/utils/actions.js';
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
	mounted () {
		this.checkLogin()
	},
	methods: {
		checkLogin () {
			checkLogin().then(res => {
				const { status, data } = res
				if (data.error_msg !== 'success') {
					//清除登录信息
					localStorage.removeItem('account_id')
					//跳转到登录
					this.$router.push('/login')
				}
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