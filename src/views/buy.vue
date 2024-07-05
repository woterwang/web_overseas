<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 18:11:56
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 21:05:12
 * @😍: 😃😃
-->
<template>
	<article class="page_buy">
		<!-- upgrade_list - Upgrade -->
		<section
			class="upgrade"
			v-show="currentTab === 0"
		>
			<section class="top">
				<h1>Start Your Unrestricted Creative Journey</h1>
				<div class="img">
					<img src="@/assets/temp1.png" />
				</div>
			</section>
			<section class="upgrade_list">
				<div class="package_item item_basic">
					<h4 class="title">Basic</h4>
					<div class="price">
						<span class="orgin_price">$14.99</span>
						<span class="curr_price">$9.99</span>
						<span class="unit">/month</span>
					</div>
					<div class="content">
						<div class="item"><span class="highlight">500 credits</span> /month</div>
						<div class="item">Basic AI Image Repair</div>
						<div class="item">Basic AI Video Repair</div>
						<div class="item">Basic AI Video Repair</div>
						<div class="item">Basic AI Video Repair</div>
					</div>
					<div class="btn">Get It Now</div>
				</div>
				<div class="package_item item_plus">
					<span class="tag"></span>
					<h4 class="title">Plus</h4>
					<div class="price">
						<span class="orgin_price">$44.99</span>
						<span class="curr_price">$29.99</span>
						<span class="unit">/month</span>

					</div>
					<div class="content">
						<div class="item"><span class="highlight">5000 credits</span> /month</div>
						<div class="item">Unlimited AI Image Repair</div>
						<div class="item">Basic AI Video Repair</div>
						<div class="item">Basic AI Video Repair</div>
						<div class="item">Basic AI Video Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
					</div>
					<div class="btn">Get It Now</div>
				</div>
				<div class="package_item item_pro">
					<span class="tag"></span>
					<h4 class="title">Pro</h4>
					<div class="price">
						<span class="orgin_price">$64.99</span>
						<span class="curr_price">$49.99</span>
						<span class="unit">/month</span>
					</div>
					<div class="content">
						<div class="item"><span class="highlight">50000 credits</span> /month</div>
						<div class="item">Unlimited AI Image Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
						<div class="item">Unlimited AI Video Repair</div>
					</div>
					<div class="btn">Get It Now</div>
				</div>
			</section>
		</section>
		<!-- Credit_list -->
		<section
			class="credit"
			v-show="currentTab === 1"
		>
			<section class="top">
				<h1>Purchase One-time Credits</h1>
				<h6>Enjoy the fun of art creation</h6>
				<div class="img">
					<img src="@/assets/temp1.png" />
				</div>
			</section>
			<section class="credit_list">
				<div class="credit_item credit_1">
					<span class="icon"></span>
					<span class="highlight">500 credits</span>
					<span class="curr_price">$9.99</span>
					<div class="btn">Buy Now</div>
				</div>
				<div class="credit_item credit_2">
					<span class="tag"></span>
					<span class="icon"></span>
					<span class="highlight">1300 credits</span>
					<span class="curr_price">$19.99</span>
					<div class="btn">Buy Now</div>
				</div>
				<div class="credit_item credit_3">
					<span class="tag"></span>
					<span class="icon"></span>
					<span class="highlight">3500 credits</span>
					<span class="curr_price">$49.99</span>
					<div class="btn">Buy Now</div>
				</div>
			</section>
		</section>
		<!-- Tab -->
		<section class="tab">
			<div
				class="tab_item"
				@click="tabChange(0)"
				:class="{active: currentTab === 0}"
			>Upgrade</div>
			<div
				class="tab_item"
				@click="tabChange(1)"
				:class="{active: currentTab === 1}"
			>Credits</div>
		</section>
		<!-- Reviews From Users -->
		<section class="reviews">
			<h1 class="highlight">Reviews From Users</h1>
			<div class="reviews_list">
				<div class="review_item">
					<!-- <span class="star"></span> -->
					<img
						src="@/assets/reviews_1.png"
						alt=""
					>
				</div>
				<div class="review_item">
					<img
						src="@/assets/reviews_2.png"
						alt=""
					>
				</div>
				<div class="review_item">
					<img
						src="@/assets/reviews_3.png"
						alt=""
					>
				</div>
			</div>
		</section>
	</article>
</template>

<script>
export default {
	name: "Buy",
	data () {
		return {
			currentTab: 0,
		}
	},
	methods: {
		tabChange (type) {
			this.currentTab = type
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_buy {
		width: 1440px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		color: $gray;

		.upgrade,
		.credit {
			width: 100%;
			max-width: 1440px;
		}

		.highlight {
			color: $white;
		}

		h1 {
			font-size: 24px;
			margin: 0 0 20px 0;
		}

		.top {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: $white;
			h6 {
				font-size: 16px;
				margin: 0 0 20px 0;
				font-weight: normal;
			}
			.img {
				width: 100%;
				max-width: 800px;
				img {
					width: 100%;
				}
			}
		}

		.upgrade_list {
			padding: 30px 0 0 0;
			width: inherit;
			display: flex;
			justify-content: center;
			align-items: center;
			.package_item {
				box-sizing: content-box;
				width: 30%;
				height: 624px;
				padding: 30px 20px;
				margin: 0 20px;
				border: 1px solid #ccc;
				border-radius: 8px;
				position: relative;
				.title {
					font-size: 28px;
					margin: 0 0 10px 0;
				}
				.price {
					display: flex;
					// justify-content: center;
					align-items: baseline;
					border-bottom: 1px solid $gray;
					padding: 20px 0 30px 0;
					.orgin_price {
						font-size: 16px;
						text-decoration: line-through;
						margin: 0 10px 0 0;
					}
					.curr_price {
						font-size: 24px;
						margin: 0 10px 0 0;
						color: $white;
						font-size: 28px;
					}
					.unit {
						font-size: 16px;
					}
				}
				.content {
					margin: 30px 0 10px 0;
					.item {
						font-size: 16px;
						margin: 0 0 10px 0;

						&::before {
							content: '✔';
							margin: 0 10px 0 0;
							color: $white;
						}
					}
				}
				.btn {
					width: 60%;
					border-radius: 20px;
					position: absolute;
					bottom: 30px;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					justify-content: center;
					align-items: center;
					height: 40px;
					color: $white;
					cursor: pointer;
					font-weight: bold;
				}
			}
			.item_basic {
				.title {
					color: $white;
				}

				.btn {
					background: $blue;
				}

				&:hover {
					border-color: $white;
					// border-image: linear-gradient(180deg, $white, $gold) 1;
				}
			}
			.item_plus {
				.title {
					color: $gold;
				}
				.tag {
					position: absolute;
					top: 20px;
					right: 0;
					width: 133px;
					height: 26px;
					background: url('~@/assets/svg/icon_credits_level2.svg') no-repeat center center;
				}
				.btn {
					background: $gold;
					color: $black;
				}
				.content {
					.item {
						&::before {
							color: $gold;
						}
					}
				}

				&:hover {
					border-color: $gold;
					// border-image: linear-gradient(180deg, $white, $gold) 1;
				}
			}
			.item_pro {
				.title {
					color: $purple_1;
				}
				.tag {
					position: absolute;
					top: 20px;
					right: 0;
					width: 118px;
					height: 26px;
					background: url('~@/assets/svg/icon_credits_level3.svg') no-repeat center center;
				}

				.btn {
					background: $purple;
				}

				.content {
					.item {
						&::before {
							color: $purple_1;
						}
					}
				}

				&:hover {
					border-color: $purple_1;
					
				}
			}
		}

		.upgrade {
			.top {
				h1 {
					display: flex;
					align-items: center;
					&::before {
						content: '';
						width: 26px;
						height: 26px;
						background: url('~@/assets/svg/icon_king.svg') no-repeat center center;
						background-size: contain;
						margin: 0 10px 0 0;
						
					}
				}
			}
		}

		.credit_list {
			padding: 30px 0 0 0;
			width: inherit;
			display: flex;
			justify-content: center;
			align-items: center;

			.credit_item {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				box-sizing: border-box;
				width: 360px;
				height: 300px;
				padding: 30px 20px;
				margin: 0 20px;
				border: 1px solid $gray;
				border-radius: 8px;
				position: relative;

				.icon {
					width: 22px;
					height: 22px;
					margin: 0 0 15px 0;
					background-size: contain;
					background-repeat: no-repeat;
					background-position: center center;
					background-image: url('~@/assets/svg/icon_medal.svg');
				}

				.highlight {
					font-size: 18px;
					margin: 0 0 20px 0;
				}

				.curr_price {
					font-size: 14px;
					margin: 0 0 40px 0;
					color: $white;
				}

				.btn {
					width: 60%;
					border-radius: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 40px;
					color: $white;
					cursor: pointer;
					font-weight: bold;
				}

				&.credit_1 {
					.btn {
						background: $blue;
					}

					&:hover {
						border-color: $white;
					}
				}

				&.credit_2 {
					.tag {
						position: absolute;
						top: 20px;
						right: 0;
						width: 118px;
						height: 26px;
						background: url('~@/assets/svg/icon_credits_level2.svg') no-repeat center center;
					}
					.btn {
						background: $gold;
						color: $black;
					}

					&:hover {
						border-color: $gold;
					}
				}

				&.credit_3 {
					.tag {
						position: absolute;
						top: 20px;
						right: 0;
						width: 118px;
						height: 26px;
						background: url('~@/assets/svg/icon_credits_level3.svg') no-repeat center center;
					}
					.btn {
						background: $purple;
					}

					&:hover {
						border-color: $purple;
					}
				}
			}
		}

		.tab {
			display: flex;
			justify-content: center;
			align-content: center;
			background: $black_01;
			border-radius: 6px;
			padding: 3px 2px;
			margin: 50px 0;
			color: $white;

			.tab_item {
				border-radius: 6px;
				padding: 5px 20px;
				cursor: pointer;

				&.active {
					background: $white;
					color: $black_01;
				}
			}
		}

		.reviews {
			width: 100%;
			border-top: 3px solid $black_01;
			padding: 40px 0 0 0;

			h1 {
				text-align: center;
			}

			.reviews_list {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.review_item {
					width: 30%;
					height: 300px;
					border-radius: 5px;

					img {
						width: 100%;
						height: 100%;
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>