<!--
 * @Author: hqwx.com
 * @Date: 2024-07-04 21:34:03
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 23:43:26
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
			to="/buy/0"
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
		<div class="nav_item user_head"></div>
		<router-link
			to="/login"
			class="nav_item login_btn"
		>Login</router-link>
	</nav>
</template>
<script>
export default {
	name: "PageNav",
	functional: false,
	data () {
		return {
			// 1、如果用户已有会员等级，则点击顶栏的积分icon时，会直接切到积分页；
			// 2、如用户未有等级，则点击顶栏的升级或积分icon，都是跳转升级页，主动点击升级页下方的“credit”的tab才会切换到积分页；
			creditUrl: this.userLevel ? '/buy/1' : '/buy/0',
			//用户购买某个等级后，其他两个等级都会消失，只剩当前等级居中显示；且上方不显示级别和价格信息
			upgradeUrl: this.userLevel ? '/buy/3' : '/buy/0',
		}
	},
	methods: {
		//用户是否有会员等级
		userLevel: () => Math.random() > 0.5 ? true : false,

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
				width: 40px;
				height: 40px;
				border-radius: 50%;
				border: 1px solid $gray;
				margin: 0;
				background: url('~@/assets/svg/icon_user.svg') no-repeat center center;
			}

			&.login_btn {
				padding: 8px 30px;
				background: $pink;
				border: 0;
				border-radius: 20px;
				margin: 0 0 0 auto;
			}
		}
	}
</style>