<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 16:17:14
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 18:17:33
 * @😍: 😃😃
-->
<template>
	<section class="page_create">
		<section class="left">
			<div class="tab">
				<div class="tab_item">Text to Image</div>
				<div class="tab_item">Image Repair</div>
			</div>
			<!-- text_to_image -->
			<div class="options">
				<!-- <div class="text_to_image"> -->
				<div class="option_text">
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Enter your prompt"
						class=""
					></textarea>
				</div>
				<!-- </div> -->

				<div class="option_addimg">
					<label
						for="addimg_btn"
						class="addimg_btn_wraper"
					>
						<input
							id="addimg_btn"
							class="addimg_btn"
							type="file"
							accept=".png,.jpg,.jpeg"
						/>
						<span class="add_img_des">Add reference image</span>
					</label>
				</div>
				<div class="option_item option_quantity">
					<h4 class="option_title">Quantity</h4>
					<div class="list">
						<span class="quantity_level active">1</span>
						<span class="quantity_level disabled">2</span>
						<span class="quantity_level">3</span>
						<span class="quantity_level">4</span>
					</div>
				</div>
				<div class="option_item option_canvas">
					<h4 class="option_title">Canvas</h4>
					<div class="list">
						<div class="canvas_type active">
							<div class="canvas_type_1_1"></div>
							<div class="canvas_type_text">1:1</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_2_3"></div>
							<div class="canvas_type_text">2:3</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_3_2"></div>
							<div class="canvas_type_text">3:2</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_3_4"></div>
							<div class="canvas_type_text">3:4</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_4_3"></div>
							<div class="canvas_type_text">4:3</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_9_16"></div>
							<div class="canvas_type_text">9:16</div>
						</div>
						<div class="canvas_type">
							<div class="canvas_type_16_9"></div>
							<div class="canvas_type_text">16:9</div>
						</div>
					</div>
				</div>
				<div class="option_item option_style">
					<h4 class="option_title">Style</h4>
					<div class="list">
						<div
							v-for="(style,i) in optionStyleList"
							:key="style.id"
							:class="['style_item', { active: i === 0 }]"
						>
							<div class="style_item_img">
								<img
									:src="style.img"
									alt=""
								>
							</div>
							<div class="style_item_text">{{ style.text }}</div>
						</div>
					</div>
				</div>
				<!-- Button -->
				<div class="create_btn"><span>Generate</span></div>
			</div>
		</section>
		<!-- Image Repair -->
		<section class="right">
		</section>
	</section>
</template>

<script>
export default {
	name: "Create",
	data () {
		return {
			optionStyleList: [
				{
					id: 1,
					img: require('@/assets/temp1.png'),
					text: 'Style 1',
				},
				{
					id: 2,
					img: require('@/assets/temp1.png'),
					text: 'Style 2',
				},
				{
					id: 3,
					img: require('@/assets/temp1.png'),
					text: 'Style 3',
				},
				{
					id: 4,
					img: require('@/assets/temp1.png'),
					text: 'Style 4',
				},
				{
					id: 5,
					img: require('@/assets/temp1.png'),
					text: 'Style 5',
				},
				{
					id: 6,
					img: require('@/assets/temp1.png'),
					text: 'Style 6',
				},
				{
					id: 7,
					img: require('@/assets/temp1.png'),
					text: 'Style 7',
				},
				{
					id: 8,
					img: require('@/assets/temp1.png'),
					text: 'Style 8',
				},
				{
					id: 9,
					img: require('@/assets/temp1.png'),
					text: 'Style 9',
				},
				{
					id: 10,
					img: require('@/assets/temp1.png'),
					text: 'Style 10',
				},
			],
		}
	},
	methods: {
		gotoLogin () {
			this.$router.push({ path: '/login' })
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_create {
		width: 1920px;
		margin: 0 auto;
		min-height: var(--contentH);
		color: $white;
		padding: 20px 10px;
		display: flex;
		justify-content: space-between;

		.left {
			width: 524px;
			display: flex;
			flex-direction: column;
			.tab {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 285px;
				height: 36px;
				background-color: $black_01;
				color: $white;
				border-radius: 8px;
				margin: 0 auto 20px auto;
				.tab_item {
					width: 50%;
					height: 32px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 6px;
					cursor: pointer;
					&:hover,
					&.active {
						background-color: $white;
						color: $black;
					}
				}
			}
			.options {
				border-radius: 20px;
				background-color: $black_01;
				padding: 20px;

				.option_item {
					margin: 20px 0 0 0;

					.option_title {
						font-size: 16px;
						font-weight: 500;
						margin: 0 0 10px 0;
					}

					.list {
						display: flex;
						flex-wrap: wrap;
					}
				}

				.option_text {
					textarea {
						width: 100%;
						height: 147px;
						color: $white;
						font-size: 16px;
						padding: 10px;
						border: none;
						resize: none;
						background: none;
						border: 1px solid $gray_02;
						border-radius: 9px;

						&::placeholder {
							color: $gray_02;
						}
					}
				}
				.option_addimg {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.addimg_btn_wraper {
						width: 100%;
						height: 50px;
						color: $white;
						font-size: 16px;
						cursor: pointer;
						display: flex;
						align-items: center;
					}
					.addimg_btn {
						display: none;
					}
					.add_img_des {
						cursor: pointer;
						color: $white;
						font-size: 16px;
						display: flex;
						align-items: center;

						&::before {
							content: '';
							margin-right: 10px;
							width: 30px;
							height: 30px;
							background: url('~@/assets/svg/icon_add.svg') no-repeat center center;
							background-size: contain;
						}
					}
				}
				.option_quantity {
					.quantity_level {
						width: 52px;
						height: 52px;
						margin: 0 10px 0 0;
						border: 1px solid $black_02;
						background-color: $black_02;
						color: $white;
						font-size: 16px;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 6px;
						cursor: pointer;

						&.disabled {
							background: $gray;
							cursor: not-allowed;
						}

						&.active {
							border-color: $pink;
						}
					}
				}
				.option_canvas {
					.canvas_type {
						width: 60px;
						height: 72px;
						--w: 60px;
						margin: 0 10px 10px 0;
						padding: 5px;
						border-radius: 6px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						background-color: $black_02;
						border: 1px solid $black_02;
						cursor: pointer;

						&.active {
							border: 1px solid $pink;
						}

						&:last-child {
							margin: 0;
						}

						* {
							&:first-child {
								transform: scale(0.5);
							}
						}
					}
					.canvas_type_text {
						text-align: center;
						font-size: 16px;
					}
					.canvas_type_1_1 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_2_3 {
						width: calc(var(--w) * 0.5);
						height: calc(var(--w) * 0.75);
						background-color: $gray_02;
					}
					.canvas_type_3_2 {
						width: calc(var(--w) * 0.75);
						height: calc(var(--w) * 0.5);
						background-color: $gray_02;
					}
					.canvas_type_3_4 {
						width: calc(var(--w) * 0.75);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_4_3 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 0.75);
						background-color: $gray_02;
					}
					.canvas_type_9_16 {
						width: calc(var(--w) * 0.45);
						height: calc(var(--w) * 0.8);
						background-color: $gray_02;
					}
					.canvas_type_16_9 {
						width: calc(var(--w) * 0.8);
						height: calc(var(--w) * 0.45);
						background-color: $gray_02;
					}
				}
				.option_style {
					.style_item {
						width: 84px;
						height: 117px;
						margin: 0 10px 10px 0;
						// border: 1px solid $black_02;
						// background-color: $black_02;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						border-radius: 6px;
						.style_item_img {
							width: 84px;
							height: 84px;
							border-radius: 6px;
							overflow: hidden;
							margin: 0 0 10px 0;
							border: 1px solid transparent;
						}
						.style_item_text {
							font-size: 16px;
						}

						&.active {
							.style_item_img {
								border: 1px solid $pink;
							}
						}
					}
				}
			}
			.create_btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 420px;
				height: 48px;
				background-color: $pink;
				color: $white;
				font-size: 16px;
				border-radius: 24px;
				cursor: pointer;
				&::after {
					content: '';
					// margin-left: 10px;
					width: 30px;
					height: 30px;
					background: url('~@/assets/svg/icon_create.svg') no-repeat 0 0;
					margin: 3px 0 0 0;
					background-size: contain;
				}
			}
		}
	}
</style>