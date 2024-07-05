<!--
 * @Author: hqwx.com
 * @Date: 2024-07-04 21:34:03
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 13:26:02
 * @😍: 😃😃
-->
<template>
	<nav class="page_nav">
		<div class="nav_item link_item link_create">Create</div>
		<div class="nav_item link_item link_repair">Repair</div>
		<div class="nav_item member_item member_level">Pro</div>
		<div class="nav_item member_item member_xp">888</div>
		<div class="nav_item user_head"></div>
	</nav>
</template>
<script>
export default {
	name: "PageNav",
	functional: false,
	data () {
		return {
			status: 90,
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 72px;
		font-size: 18px;
		background-color: $black_01;
		.nav_item {
			display: flex;
			align-items: center;
			color: $white;

			&.link_item {
				margin: 0 40px 0 0;

				&.link_create{
					&:before {
						content: '';
						margin-right: 10px;
						width: 20px;
						height: 20px;
						background: url('~@/assets/svg/icon_create.svg') no-repeat center center;
						flex: 1;
					}
				}

				&.link_repair{
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
		}
	}
</style>