<template>
	<div class="choice_card">
		<div class="choice_card_img">
			<img
				:src="item.banner"
				alt=""
			>
		</div>
		<div class="choice_card_desc">{{item.prompt}}</div>
		<!-- 需要解锁 -->
		<div
			class="choice_locked"
			v-if="isLocked"
		>
			<span class="icon"></span>
			<span
				class="btn"
				@click="gotoUpgrade"
			>Upgrade to unlock</span>
		</div>
		<div
			v-else
			class="choice_card_btn"
			@click="applyCard"
		>Try</div>
	</div>
</template>

<script>
export default {
	name: "ChoiceCard",
	props: {
		item: {
			type: Object,
			default: () => ({})
		},
	},
	data () {
		return {
			status: 90,
		}
	},
	computed: {
		//是否需要解锁
		isLocked () {
			return this.item.is_vip
		},
	},
	methods: {
		applyCard () {
			//跳转到 /create/0
			this.$emit('changeSub', this.item)
		},
		gotoCreate () {
		},
		gotoUpgrade () {
			//跳转到 /buy/0
			this.$router.push({
				path: '/buy/0',
			})
		},
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.choice_card {
		margin: 0 0 20px 20px;
		width: 314px;
		height: 430px;
		border-radius: 10px;
		position: relative;
		overflow: hidden;

		.choice_card_img {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.choice_card_desc {
			word-break: break-all;
			padding: 10px;
			width: 100%;
			height: 100%;
			opacity: 0;
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.4);
			z-index: 1;
			transition: all 0.8s;
		}

		.choice_card_btn {
			padding: 10px;
			background-color: $white;
			color: $white;
			text-align: center;
			opacity: 0;
			position: absolute;
			bottom: 10px;
			right: 10px;
			border-radius: 20px;
			width: 66px;
			height: 35px;
			color: $black;
			cursor: pointer;
			z-index: 2;
			transition: all 0.5s;
		}

		.choice_locked {
			opacity: 0;
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.3);
			//高斯模糊
			backdrop-filter: blur(20px);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 1;

			.icon {
				width: 34px;
				height: 30px;
				background: url('~@/assets/svg/icon_king.svg') no-repeat;
				background-size: contain;
				margin-bottom: 20px;
			}

			.btn {
				width: 190px;
				height: 40px;
				background: $gold;
				color: $black;
				border-radius: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}
		}

		// &:not(:has(.choice_locked)) {
		&:hover {
			.choice_card_desc {
				opacity: 1;
			}
			.choice_card_btn {
				opacity: 1;
			}
			.choice_locked {
				opacity: 1;
			}
		}
		// }
	}
	//媒体查询
	@media screen and (max-width: 768px) {
		.choice_card {
			width: 100%;
		}
	}
	@media screen and (max-width: 1560px) {
		.choice_card {
			&:nth-child(3) {
				margin-right: 0;
			}
		}
	}
	@media screen and (max-width: 1920px) {
		.choice_card {
			&:nth-child(4) {
				margin-right: 0;
			}
		}
	}
</style>