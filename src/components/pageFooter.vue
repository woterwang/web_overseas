<template>
	<footer class="page_footer">
		<section class="footer_content">
			<section class="footer_copyright">
				Copyright ⓒ {{ currentYear }} FantasyLabs All rights reserved.
			</section>
			<section class="footer_link">
				<a href="javascript:void(0)">Terms of Service</a>
				<a href="javascript:void(0)">Privacy Policy</a>
				<a href="javascript:void(0)">Contact Us</a>
			</section>
		</section>
	</footer>
</template>

<script>
export default {
	name: "PageFooter",
	data () {
		return {
			// currentYear: new Date().getFullYear(),
			currentYear: 2024,
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

		.footer_content{
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
			}
		}
	}
</style>