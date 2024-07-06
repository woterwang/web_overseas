<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 16:17:14
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 23:01:15
 * @😍: 😃😃
-->
<template>
	<section class="page_create">
		<section class="left">
			<div class="tab">
				<div
					class="tab_item"
					@click="changeLeftTab(0)"
					:class="{active: leftCurrTab == 0}"
				>Text to Image</div>
				<div
					class="tab_item"
					@click="changeLeftTab(1)"
					:class="{active: leftCurrTab == 1}"
				>Image Repair</div>
			</div>
			<div class="options">
				<!-- text_to_image -->
				<div
					class="text_to_image"
					v-show="leftCurrTab == 0"
				>
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
						<h4 class="option_title"><span>Quantity</span><span class="to_upgrade">Upgrade to unlock</span></h4>
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
				</div>
				<!-- Image Repair -->
				<div
					class="image_repair"
					v-show="leftCurrTab == 1"
				>
					<div class="option_item option_drop_img">
						<h4 class="option_title">Image</h4>
						<div class="drop_img">
							<span class="add_icon"></span>
							<p class="add_img_desc">Add the image you want to repair, in png/jpg format</p>
						</div>
					</div>
					<div class="option_item option_text">
						<h4 class="option_title">Desired Effect</h4>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Enter your prompt"
							class=""
						></textarea>
					</div>
					<div class="option_item itme_intensity">
						<p class="itme_intensity_desc">Change Intensity</p>
						<!-- 滑块 -->
						<div class="slider">
							<span class="intensity_level">0</span>
							<!-- <input
								type="range"
								min="0"
								max="100"
								:value="currIntensity"
								class="slider_range"
								@change="changeIntensity"
							> -->
							<vue-slider
								v-model="currIntensity"
								:drag-on-click="true"
								:min="0"
								:max="1"
								width="90%"
								class="slider_range"
								:interval="0.01"
							></vue-slider>
							<span class="intensity_level">1</span>
						</div>
					</div>
					<div class="option_item option_quantity">
						<h4 class="option_title"><span>Quantity</span><span class="to_upgrade">Upgrade to unlock</span></h4>
						<div class="list">
							<span class="quantity_level active">1</span>
							<span class="quantity_level disabled">2</span>
							<span class="quantity_level">3</span>
							<span class="quantity_level">4</span>
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
				</div>
				<!-- Button -->
				<div class="create_btn"><span>Generate</span></div>
			</div>
		</section>
		<section class="right">
			<div class="right_tab">
				<div
					class="tab_item"
					@click="changeRightTab(0)"
					:class="{active: rightCurrTab == 0}"
				>Editor's Choice</div>
				<div
					class="tab_item"
					@click="changeRightTab(1)"
					:class="{active: rightCurrTab == 1}"
				>My Output</div>
			</div>
			<div class="right_content">
				<ChoiceCard v-show="rightCurrTab == 0" />
				<OutputCard v-show="rightCurrTab == 1" />
			</div>
		</section>
	</section>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
	name: "Create",
	components: {
		VueSlider,
		ChoiceCard: () => import('./ChoiceModule.vue'),
		OutputCard: () => import('./OutputModule.vue'),
	},
	data () {
		return {
			//当前选项卡-左侧 - 0: Text to Image, 1: Image Repair
			leftCurrTab: this.$route.params.type || 0,
			//当前选项卡-右侧 - 0: Editor's Choice, 1: My Output
			rightCurrTab: 0,
			//默认强度
			currIntensity: 0,
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
		changeLeftTab (type) {
			this.leftCurrTab = type
		},
		changeRightTab (type) {
			this.rightCurrTab = type
		},
		changeIntensity (e) {
			console.log(e.target.value)
		},
	},
	watch: {
		['$route.params.type'](newValue, oldValue) {
			this.leftCurrTab = newValue
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.page_create {
		width: 100%;
		margin: 0 auto;
		min-height: var(--contentH);
		color: $white;
		padding: 20px 10px;
		display: flex;
		justify-content: center;
		overflow: hidden;
		.left {
			width: 524px;
			display: flex;
			flex-direction: column;
			height: inherit;
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
					// &:hover,
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
				min-height: inherit;

				.option_item {
					margin: 20px 0 0 0;
					
					.option_title {
						font-size: 16px;
						font-weight: 500;
						margin: 0 0 10px 0;
						position: relative;
	
						.to_upgrade {
							color: $pink;
							font-size: 14px;
							position: absolute;
							top: 0;
							right: 10px;
							cursor: pointer;
							display: flex;
							align-items: center;
	
							&::after {
								content: '';
								margin-left: 5px;
								width: 18px;
								height: 18px;
								background: url('~@/assets/svg/icon_to_upgrade.svg') no-repeat center center;
								background-size: contain;
							}
						}
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
						--w: 18px;
						background: red;
						margin: 0 10px 10px 0;
						padding: 5px;
						border-radius: 6px;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
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
					}
					.canvas_type_text {
						text-align: center;
						font-size: 14px;
						// display: none;
					}
					.canvas_type_1_1 {
						width: var(--w);
						height: var(--w);
						background-color: $gray_02;
					}
					.canvas_type_2_3 {
						width: calc(var(--w) * 0.7);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_3_2 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 0.7);
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
						width: calc(var(--w) * 0.56);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_16_9 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 0.56);
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
				.option_drop_img {
					.drop_img {
						width: 100%;
						height: 200px;
						border: 1px dashed $gray_02;
						border-radius: 9px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						.add_icon {
							width: 30px;
							height: 30px;
							background: url('~@/assets/svg/icon_add.svg') no-repeat center center;
							background-size: contain;
						}
						.add_img_desc {
							font-size: 16px;
							color: $gray_02;
							width: 50%;
							text-align: center;
						}
					}
				}
				.itme_intensity {
					padding: 30px 20px;
					border-radius: 10px;
					background: $black_02;
					.itme_intensity_desc {
						color: $gray_02;
					}
					.slider {
						padding: 10px 0;
						display: flex;
						align-items: center;
						.slider_range {
							width: 80%;
							margin: 0 6%;
						}
						.intensity_level {
							font-size: 16px;
							color: $gray_02;
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
				margin: 20px 0 0 0;
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

		.right {
			flex: 1;
			padding: 0 10px;
			box-sizing: content-box;
			// height: var(--contentH);
			// overflow-y: auto;

			.right_tab {
				display: flex;
				// justify-content: center;
				align-items: center;
				width: 100%;
				height: 36px;
				// background-color: $black_01;
				color: $white;
				border-radius: 8px;
				margin: 0 0 20px 0;
				.tab_item {
					padding: 0 30px;
					color: $gray;
					display: flex;
					font-size: 15px;
					align-items: center;
					border-right: 1px solid $gray;
					cursor: pointer;

					&:first-child {
						padding-left: 0;
					}

					&:last-child {
						border-right: none;
					}

					&.active {
						color: $white;
					}
				}
			}
		}
	}
	// 滑块样式
	// [type='range'] {
	// 	-webkit-appearance: none;
	// 	appearance: none;
	// 	margin: 0;
	// 	outline: 0;
	// 	background-color: transparent;
	// 	width: 100%;
	// 	position: relative;

	// 	&::before {
	// 		content: '00000';
	// 		width: 20px;
	// 		height: 20px;
	// 		border-radius: 50%;
	// 		background-color: $pink;
	// 		position: absolute;
	// 		top: 0;
	// 		left: 20%;
	// 		z-index: 9;
	// 		// transform: scale(1.2);
	// 	}
	// }
	// [type='range']::-webkit-slider-runnable-track {
	// 	height: 4px;
	// 	background: $black_03;
	// 	border-radius: 10px;
	// }
	// [type='range' i]::-webkit-slider-container {
	// 	height: 20px;
	// 	overflow: hidden;
	// }
	// [type='range']::-webkit-slider-thumb {
	// 	-webkit-appearance: none;
	// 	appearance: none;
	// 	width: 20px;
	// 	height: 20px;
	// 	border-radius: 50%;
	// 	background-color: $pink;
	// 	border: 1px solid transparent;
	// 	margin-top: -8px;
	// 	border-image: linear-gradient($pink, $pink) 0 fill / 8 20 8 0 / 0px 0px 0 2000px;
	// }
	::v-deep .vue-slider-rail {
		background-color: $black_03;
		.vue-slider-dot-tooltip-inner,
		.vue-slider-dot-handle,
		.vue-slider-process {
			background-color: $pink;
			box-shadow: unset;
		}

		.vue-slider-dot-tooltip-inner {
			border-color: $pink;
		}
	}
</style>