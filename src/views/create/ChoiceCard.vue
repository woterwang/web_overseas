<template>
	<div class="choice_card">
		<div class="choice_card_img">
			<img
				src="../../assets/temp3.png"
				alt=""
			>
		</div>
		<div class="choice_card_desc">DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</div>
		<div
			class="choice_card_btn"
			@click="applyCard"
		>Try</div>
	</div>
</template>

<script>
export default {
	name: "ChoiceCard",
	data () {
		return {
			status: 90,
		}
	},
	methods: {
		applyCard () {
		},
		gotoCreate () {
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

		&:hover {
			.choice_card_desc {
				opacity: 1;
			}
			.choice_card_btn {
				opacity: 1;
			}
		}
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