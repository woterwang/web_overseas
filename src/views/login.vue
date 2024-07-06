<template>
	<div class='page_login'>
		<div class='login_title'>Get Ready for Limitless Creation</div>
		<div class='login_box'>
			<div class='box_left'>
				<h3 class="left_title">FantasyLabs</h3>
				<div class="left_content">
					<p>Enjoy creative freedom</p>
					<p>Various art styles</p>
					<p>Faster processing</p>
					<p>Better image quality</p>
				</div>
			</div>
			<div class='box_right'>
				<p class="login_subtitle">Log in or sign up to FantasyLabs</p>
				<div class="login_type login_type_google">
					<div class="login_btn"></div>
				</div>
				<p class="or">or</p>
				<div class="login_type login_type_email">
					<input
						type="text"
						class="email_address"
						placeholder="Enter email address"
					>
					<div class="login_btn">Login with Email</div>
				</div>
				<p class="login_tips"><a
						href="javascript:void 0"
						class="a"
					>Already have an account?</a></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data () {
		return {

		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_login {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: var(--contentH);
		background-color: $gray_01;
		.login_title {
			color: $white;
			font-size: 30px;
			margin: 0 0 40px 0;
		}
		.login_box {
			display: flex;
			width: 658px;
			height: 321px;
			border-radius: 6px;
			overflow: hidden;
			.box_left {
				width: 237px;
				height: 100%;
				padding: 30px 20px;
				background: $white url('~@/assets/images/login_pop_bg.jpg') no-repeat 0 center;
				background-size: cover;
				.left_title {
					color: $white;
					font-size: 24px;
					margin: 0 0 20px 0;
				}
				.left_content {
					color: $white;
					font-size: 14px;
					p {
						margin: 0 0 10px 0;
						&::before {
							content: '✔';
							margin: 0 10px 0 0;
						}
					}
				}
			}
			.box_right {
				flex: 1;
				padding: 34px 32px;
				background-color: $black;
				color: $gray_01;
				overflow: hidden;
				.login_subtitle {
					color: $white;
					font-size: 14px;
					margin: 0 0 10px 0;
				}
				.login_type {
					display: flex;
					align-items: center;
					margin: 0 0 15px 0;
					.login_btn {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						background-color: $white;
						color: $black_01;
						font-size: 16px;
						cursor: pointer;
					}
					&.login_type_google {
						.login_btn {
							width: 384px;
							height: 40px;
							background: url('~@/assets/svg/icon_login_google.svg') no-repeat center center;
							background-size: contain;
						}
					}
					&.login_type_email {
						display: flex;
						flex-direction: column;
						margin-bottom: 15px;
						.email_address {
							width: 384px;
							height: 45px;
							padding: 0 20px;
							margin: 0 0 20px 0;
							background-color: $black;
							color: $white;
							font-size: 16px;
							border: 1px solid $gray_01;
							border-radius: 18px;

							&::placeholder {
								color: $gray_01;
							}
						}

						.login_btn {
							width: 384px;
							height: 40px;
							background: $gray_02;
							border-radius: 18px;
							font-size: 16px;

							&::before {
								content: '';
								margin-right: 10px;
								width: 18px;
								height: 18px;
								background: url('~@/assets/svg/icon_email.svg') no-repeat center center;
								background-size: contain;
							}

							&.active,
							&:hover {
								background: $white;
							}
						}
					}
				}
				.or {
					color: $white;
					font-size: 16px;
					margin: 0 0 15px 0;
					color: $gray_01;
					text-align: center;
				}
				.login_tips {
					font-size: 16px;
					text-align: center;
					a {
						color: $gray_01;
						text-decoration: underline;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>