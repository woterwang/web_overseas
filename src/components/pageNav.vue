<!--
 * @Author: hqwx.com
 * @Date: 2024-07-04 21:34:03
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-09 12:37:58
 * @😍: 😃😃
-->
<template>
	<nav class="page_nav">
		<router-link
			to="/home"
			class="nav_item log_txt"
		>FantasyLabs</router-link>
		<router-link
			to="/create/0"
			class="nav_item link_item link_create"
		>Create</router-link>
		<router-link
			to="/create/1"
			class="nav_item link_item link_repair"
		>Repair</router-link>
		<router-link
			to="/buy/3"
			class="nav_item member_item member_level"
		>Pro</router-link>
		<router-link
			:to="upgradeUrl"
			class="nav_item member_item member_normal"
		>Upgrade</router-link>
		<router-link
			:to="creditUrl"
			class="nav_item member_item member_xp"
		>888</router-link>
		<div
			class="nav_item user_head"
			v-if="accountId"
		>
			<div class="user_drop_menu">
				<div
					to="/user"
					class="nav_item userid"
				>
					<div class="info">
						<span>User ID</span>
						<span>{{accountId}}</span>
					</div>
				</div>
				<a
					class="nav_item support"
					:href="'mailto:'+linkData.email"
				>Support</a>
				<div
					class="nav_item logout"
					@click="logout"
				>Logout</div>
			</div>
		</div>
		<router-link
			to="/login"
			class="nav_item login_btn"
			v-else
		>Login</router-link>
	</nav>
</template>
<script>
const linkData = require('@jonsData/dibulan.json');
import { logout } from '@/utils/actions.js';
export default {
	name: "PageNav",
	functional: false,
	data () {
		return {
			linkData,
			accountId: localStorage.getItem('account_id') || '',
			// 1、如果用户已有会员等级，则点击顶栏的积分icon时，会直接切到积分页；
			// 2、如用户未有等级，则点击顶栏的升级或积分icon，都是跳转升级页，主动点击升级页下方的“credit”的tab才会切换到积分页；
			creditUrl: this.userLevel() ? '/buy/1' : '/buy/0',
			//用户购买某个等级后，其他两个等级都会消失，只剩当前等级居中显示；且上方不显示级别和价格信息
			upgradeUrl: this.userLevel() ? '/buy/1' : '/buy/0',
		}
	},
	methods: {
		//用户是否有会员等级
		userLevel: () => Math.random() > 0.5 ? true : false,
		logout () {
			localStorage.removeItem('account_id');
			logout({
				account_id: this.accountId,
			}).then(res => {
				console.log('🚀 ~ file: pageNav.vue ~ logout ~ res:', res);
			});
			this.$router.push('/login');
		},
	},
	watch: {
		['$route'](newValue, oldValue) {
			this.accountId = localStorage.getItem('account_id') || '';
		}
	},
}
</script>
<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_nav {
		display: flex;
		align-items: center;
		height: 72px;
		font-size: 16px;
		background-color: $black_01;
		padding: 0 30px;
		position: relative;
		.log_txt {
			margin: 0 auto 0 0;
			color: $white;
			justify-self: flex-start;
			font-size: 24px;
		}
		.nav_item {
			display: flex;
			align-items: center;
			color: $white;
			text-decoration: none;
			cursor: pointer;

			&.link_item {
				margin: 0 40px 0 0;

				&.link_create {
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						background: url('~@/assets/svg/icon_create.svg') no-repeat center center;
						flex: 1;
					}
				}

				&.link_repair {
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						background: url('~@/assets/svg/icon_repair.svg') no-repeat center center;
						flex: 1;
					}
				}
			}

			&.member_item {
				margin: 0 10px 0 0;
				border-radius: 20px;
				border: 1px solid $gray;
				&.member_level {
					padding: 8px 30px;
					// width: 100px;

					&:before {
						content: '';
						margin-right: 10px;
						width: 18px;
						height: 18px;
						background: url('~@/assets/svg/icon_king.svg') no-repeat center center;
					}
				}
				&.member_normal {
					padding: 8px 30px;
					background: $pink;
					border: 0;
				}
				&.member_xp {
					padding: 8px 20px;

					&:before {
						content: '';
						margin-right: 10px;
						width: 18px;
						height: 18px;
						background: url('~@/assets/svg/icon_medal.svg') no-repeat center center;
						flex: 1;
					}
				}
			}
			&.user_head {
				width: 60px;
				height: 60px;
				// border-radius: 50%;
				// border: 1px solid $gray;
				margin: 0;
				background: url('~@/assets/svg/icon_user.svg') no-repeat center center;
				background-size: 68% 68%;

				&:hover {
					.user_drop_menu {
						display: flex;
					}
				}
			}

			&.login_btn {
				padding: 8px 30px;
				background: $pink;
				border: 0;
				border-radius: 20px;
				margin: 0 0 0 auto;
			}
		}
		.user_drop_menu {
			display: none;
			position: absolute;
			top: 62px;
			right: 40px;
			background-color: $black_01;
			border: 1px solid $black_03;
			border-radius: 10px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.nav_item {
				display: flex;
				// flex-direction: column;
				// justify-content: center;
				align-items: center;
				width: 204px;
				height: 48px;
				padding: 10px 20px;
				border-bottom: 1px solid $black_03;
				font-size: 16px;
				&:last-child {
					border: 0;
				}

				&:hover {
					background-color: $black_02;
				}

				&.userid {
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						flex-shrink: 0;
						background: url('~@/assets/svg/icon_userid.svg') no-repeat center center;
					}
				}
				&.support {
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						flex-shrink: 0;
						background: url('~@/assets/svg/icon_support.svg') no-repeat center center;
					}
				}
				&.logout {
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						flex-shrink: 0;
						background: url('~@/assets/svg/icon_logout.svg') no-repeat center center;
					}
				}

				.info {
					display: flex;
					flex-direction: column;
					justify-content: center;
					// align-items: center;

					span {
						&:last-child {
							font-size: 14px;
							color: $gray;
						}
					}
				}
			}
		}
	}
</style>