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
						v-model="email"
					>
					<div
						class="login_btn"
						:class="{disabled:!ableLoginWithEmail}"
						@click="loginWithEmail"
					>
						<span>Login with Email</span>
						<span
							class="countdown_str"
							v-if="countdownTime"
						>{{countdownTime}}s</span>
					</div>
					<p
						class="error_tips"
						:class="errorTipsInfo.type"
						v-if="errorTipsInfo.show"
					>{{errorTipsInfo.content}}</p>
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
import createFingerprint from '@/utils/createFingerprint.js';
import { checkLogin, loginByMail, login } from '@/utils/actions.js';
export default {
	name: 'Login',
	data () {
		return {
			email: null,
			countdownTime: 0,
			ableLoginWithEmail: true,
			errorTipsInfo: {
				show: false,
				type: 'error',
				content: 'Please enter a valid email address'
			}
		}
	},
	mounted () {
		this.checkLogin()
	},
	methods: {
		checkEmail () {
			const emailExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
			if (!this.email) {
				this.ableLoginWithEmail = false;
				this.showErrorTips('error', 'Please fill in a valid email address');
				return false;
			} else if (!emailExp.test(this.email)) {
				this.showErrorTips('error', 'Please fill in a valid email address');
				return false;
			}
			return true;
		},
		//60s countdown
		countdown () {
			let count = 60;
			const timer = setInterval(() => {
				count--;
				if (count > 0) {
					this.ableLoginWithEmail = false;
					this.countdownTime = count;
				} else {
					clearInterval(timer);
					this.ableLoginWithEmail = true;
					this.countdownTime = 0;
				}
			}, 1000);
		},
		loginWithEmail () {
			if (!this.ableLoginWithEmail) return;
			if (!this.checkEmail()) return;
			this.countdown();
			this.sendTokenToEmail();
		},
		showErrorTips (type = 'error', content = 'Please enter a valid email address') {
			this.errorTipsInfo = {
				show: true,
				type,
				content,
			}
		},
		hideErrorTips () {
			this.errorTipsInfo.show = false;
		},
		loginWithToken (token = '') {
			loginByMail({
				token
			}).then(res => {
				const { status, data } = res
				if (status == 200 && data.error_msg == 'success') {
					//存储account_id到本地
					if (data.account_id) localStorage.setItem('account_id', data.account_id);
					//跳转到首页
					this.$router.push('/');
					return;
				}
			})
		},
		checkLogin () {
			const token = this.$route.query.token || ''
			if (!token) {
				checkLogin().then(res => {
					console.log('🚀 ~ file: login.vue:23 ~ checkLogin ~ res:', res);
				})
				return
			}
			this.loginWithToken(token)
		},
		async sendTokenToEmail () {
			this.showErrorTips('error', null);
			const browerId = await createFingerprint()
			login({
				account_id: this.email,
				user_id: browerId,
			}).then(res => {
				const { status, data } = res
				if (status !== 200 || data.error_msg !== 'success') {
					this.showErrorTips('error', data.error_msg);
					return;
				}
				this.showErrorTips('success', 'An email has been sent. Please check your inbox and click on the link to complete the login process (be sure to check junk/spam inbox).');
			})
		}
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
			margin: 0 0 30px 0;
		}
		.login_box {
			display: flex;
			width: 685px;
			// height: 321px;
			border-radius: 6px;
			overflow: hidden;
			.box_left {
				width: 237px;
				height: 100%;
				padding: 30px 20px;
				background: $white url('~@/assets/images/login_pop_bg.jpg') no-repeat 27% center;
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
						width: 384px;
						background-color: $white;
						color: $black_01;
						font-size: 16px;
						cursor: pointer;
					}
					&.login_type_google {
						.login_btn {
							width: 384px;
							height: 40px;
							background: url('~@/assets/svg/icon_login_google.svg') no-repeat 0 0;
							background-size: fill;
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
							border-radius: 23px;

							&::placeholder {
								color: $gray_01;
							}
						}

						.login_btn {
							width: 384px;
							height: 40px;
							background: $pink;
							color: $white;
							border-radius: 18px;
							font-size: 16px;
							position: relative;

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
								// background: $white;
							}

							&.disabled {
								// background: $gray_02;
								// color: $gray_01;
								cursor: not-allowed;
								opacity: 0.7;
							}
						}

						.countdown_str {
							position: absolute;
							right: 20px;
							top: 50%;
							transform: translateY(-50%);
						}

						.error_tips {
							width: inherit;
							font-size: 16px;
							margin: 15px 0;
							color: $gray_01;

							&.error {
								color: $red;
							}

							&.success {
								color: $green;
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