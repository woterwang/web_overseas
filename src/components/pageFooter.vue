<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 16:25:01
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-16 15:56:10
 * @😍: 😃😃
-->
<template>
	<footer class="page_footer">
		<section class="footer_content">
			<section class="footer_copyright">
				Copyright ⓒ {{ currentYear }} FantasyLabs All rights reserved.
			</section>
			<section class="footer_link">
				<a :href="linkData.terms">Terms of Service</a>
				<a :href="linkData.policy">Privacy Policy</a>
				<a :href="'mailto:'+linkData.email">Contact Us</a>
			</section>
		</section>
	</footer>
</template>

<script>
const linkData = require('@jonsData/dibulan.json');
export default {
	name: "PageFooter",
	data () {
		return {
			// currentYear: new Date().getFullYear(),
			currentYear: 2024,
			linkData,
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120px;
		// background-color: $black_01;
		color: $gray;
		padding: 0 20px;
		border-top: 1px solid $gray;

		.footer_content {
			width: 1440px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.footer_copyright {
			width: 50%;
			display: flex;
			// flex-direction: column;
		}

		.footer_link {
			width: 50%;
			display: flex;
			justify-content: flex-end;
			a {
				margin: 0 20px 0 0;
				color: $gray;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>