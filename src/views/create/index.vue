<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 16:17:14
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-07 12:24:15
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
							v-model="promptContent"
						></textarea>
					</div>
					<div class="option_addimg">
						<!-- 选择图片按钮 -->
						<label
							for="addimg_btn"
							class="addimg_btn_wraper"
							v-if="!textToImgFile"
						>
							<input
								id="addimg_btn"
								class="addimg_btn"
								type="file"
								accept=".png,.jpg,.jpeg"
								v-if="addimg_btn_text_to_img"
								@input="uploadTextToImg"
							/>
							<span class="add_img_icon"></span>
						</label>
						<!-- 图片缩略图 -->
						<img
							v-if="textToImgFile"
							:src="textToImgFileUrl"
							alt=""
							class="add_img_thumb"
						/>
						<!-- 图片描述 -->
						<span
							class="add_img_des"
							:class="{active: textToImgFile}"
							@click="removeTextToImgFile"
						>{{textToImgFile ? 'Remove reference image' : 'Add reference image'}}</span>
					</div>
					<div class="option_item option_quantity">
						<h4 class="option_title">
							<span>Quantity</span>
							<router-link
								to="/buy/0"
								class="to_upgrade"
							></router-link>
						</h4>
						<div class="list">
							<span
								class="quantity_level"
								v-for='v in baseData.quantity'
								:key='v.count'
								:class="{
									active: v.count == currentQuantity,
									disabled: v.level_req > userLevel
								}"
								@click="changeQuantity(v)"
							>{{ v.count }}</span>
						</div>
					</div>
					<div class="option_item option_canvas">
						<h4 class="option_title">Canvas</h4>
						<div class="list">
							<div
								class="canvas_type"
								v-for="c in canvasTypes"
								:key="c.name"
								:class="{ active: c.id === currentCanvasType }"
								@click="changeCanvasType(c)"
							>
								<div :class="c.class"></div>
								<div class="canvas_type_text">{{c.name}}</div>
							</div>
						</div>
					</div>
					<div class="option_item option_style">
						<h4 class="option_title">Style</h4>
						<div class="list">
							<div
								v-for="(style,i) in baseData.style_model"
								:key="style.model_id"
								:class="['style_item', { active: style.model_id === currentStyleId }]"
								@click="changeStyle(style)"
							>
								<div class="style_item_img">
									<img
										:src="style.banner"
										alt=""
									>
								</div>
								<div class="style_item_text">{{ style.name }}</div>
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
						<label
							for="addimg_btn_repair"
							class="addimg_btn_wraper"
							v-if="!repairImgUrl"
						>
							<div class="drop_img">
								<input
									id="addimg_btn_repair"
									class="addimg_btn"
									type="file"
									accept=".png,.jpg,.jpeg"
									@input="uploadRepairImg"
									v-if="addimg_btn_repair"
								/>
								<span class="add_icon"></span>
								<p class="add_img_desc">Add the image you want to repair, in png/jpg format</p>
							</div>
						</label>
						<!-- 缩略图 -->
						<div
							class="repair_img_thumb"
							@click="openEditImgPop"
							v-else
						>
							<img
								:src="repairImgUrl"
								alt=""
							>
							<span
								class="del_repair_img_file"
								@click="deleteRepairImgUrl"
							></span>
						</div>
					</div>
					<div class="option_item option_text">
						<h4 class="option_title">Desired Effect</h4>
						<div class="textarea_warp">
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								placeholder="Enter your prompt"
								v-model="promptContent"
							></textarea>
							<div class="textarea_tool">
								<div class="textarea_tool_item clear_txt"></div>
								<div class="textarea_tool_item random_txt">🎲</div>
							</div>
						</div>
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
								@input="changeIntensity"
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
						<h4 class="option_title">
							<span>Quantity</span>
							<router-link
								to="/buy/0"
								class="to_upgrade"
							></router-link>
						</h4>
						<div class="list">
							<span
								class="quantity_level"
								v-for='v in baseData.quantity'
								:key='v.count'
								:class="{
									active: v.count == currentQuantity,
									disabled: v.level_req > userLevel
								}"
								@click="changeQuantity(v)"
							>{{ v.count }}</span>
						</div>
					</div>
					<div class="option_item option_style">
						<h4 class="option_title">Style</h4>
						<div class="list">
							<div
								v-for="(style,i) in baseData.style_model"
								:key="style.model_id"
								:class="['style_item', { active: style.model_id === currentStyleId }]"
								@click="changeStyle(style)"
							>
								<div class="style_item_img">
									<img
										:src="style.banner"
										alt=""
									>
								</div>
								<div class="style_item_text">{{ style.name }}</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 费用充值 -->
				<router-link
					to="/output"
					class="goto_buy_credits_link"
					v-if="!abletoCreate"
				>Please obtain credits before continuing</router-link>
				<!-- 费用提示 -->
				<p
					class="cost_tips"
					v-if="abletoCreate"
				>
					<span class="txt">Cost</span>
					<span class="icon"></span>
					<span class="txt">25</span>
				</p>
				<!-- 生成按钮 -->
				<div
					class="create_btn"
					:class="{disabled:!abletoCreate}"
				>
					<span>Generate</span>
				</div>
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
				<ChoiceModule
					:baseData="baseData"
					:createType='leftCurrTab'
					@choiceItem="choiceItem"
					v-show="rightCurrTab == 0"
				/>
				<OutputModule v-show="rightCurrTab == 1" />
			</div>
		</section>
		<!-- 编辑图片 -->
		<EditImg
			ref='editImg'
			@editedImgCancel="editedImgCancel"
			@exportEditedImg="exportEditedImg"
		/>
	</section>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
const canvasTypes = [
	{
		id: 1,
		name: '1:1',
		class: 'canvas_type_1_1',
	},
	{
		id: 2,
		name: '2:3',
		class: 'canvas_type_2_3',
	},
	{
		id: 3,
		name: '3:2',
		class: 'canvas_type_3_2',
	},
	{
		id: 4,
		name: '3:4',
		class: 'canvas_type_3_4',
	},
	{
		id: 5,
		name: '4:3',
		class: 'canvas_type_4_3',
	},
	{
		id: 6,
		name: '9:16',
		class: 'canvas_type_9_16',
	},
	{
		id: 7,
		name: '16:9',
		class: 'canvas_type_16_9',
	},
]
export default {
	name: "Create",
	components: {
		VueSlider,
		ChoiceModule: () => import('./ChoiceModule.vue'),
		OutputModule: () => import('./OutputModule.vue'),
		EditImg: () => import('./EditImage.vue'),
	},
	data () {
		return {
			sourceType: 0,
			addimg_btn_text_to_img: true,
			addimg_btn_repair: true,
			//当前选项卡-左侧 - 0: Text to Image, 1: Image Repair
			leftCurrTab: Number(this.$route.params.type) || 0,
			//当前选项卡-右侧 - 0: Editor's Choice, 1: My Output
			rightCurrTab: 0,
			//默认强度
			currIntensity: 0,
			optionStyleList: [
				{
					id: 1,
					img: require('@/assets/temp3.png'),
					text: 'Style 1',
				},
				{
					id: 2,
					img: require('@/assets/temp3.png'),
					text: 'Style 2',
				},
				{
					id: 3,
					img: require('@/assets/temp3.png'),
					text: 'Style 3',
				},
				{
					id: 4,
					img: require('@/assets/temp3.png'),
					text: 'Style 4',
				},
				{
					id: 5,
					img: require('@/assets/temp3.png'),
					text: 'Style 5',
				},
				{
					id: 6,
					img: require('@/assets/temp3.png'),
					text: 'Style 6',
				},
				{
					id: 7,
					img: require('@/assets/temp3.png'),
					text: 'Style 7',
				},
				{
					id: 8,
					img: require('@/assets/temp3.png'),
					text: 'Style 8',
				},
				{
					id: 9,
					img: require('@/assets/temp3.png'),
					text: 'Style 9',
				},
				{
					id: 10,
					img: require('@/assets/temp3.png'),
					text: 'Style 10',
				},
			],
			//
			textToImgFile: null,
			textToImgFileUrl: '',
			repairImgUrl: '',
			//生成按钮是否可点击
			abletoCreate: false,
			currentQuantity: 1,
			userLevel: 1,
			currentStyleId: 'reality',
			currentCanvasType: 1,
			canvasTypes,
			//来源类型数据
			baseData: {},
			//promptContent
			promptContent: '',
		}
	},
	mounted () {
		this.getSourceType();
	},
	methods: {
		//获取流星来源
		getSourceType () {
			this.sourceType = localStorage.getItem('sourceType') || 0
			let baseData = {}
			if (this.sourceType == 1) {
				baseData = require('@jonsData/chuangzuosucai_mailiang.json')
			} else {
				baseData = require('@jonsData/chuangzuosucai_ziran.json')
			}
			this.baseData = baseData
		},
		changeLeftTab (type) {
			this.leftCurrTab = type
			this.getSourceType();
		},
		changeRightTab (type) {
			this.rightCurrTab = type
		},
		changeIntensity (e) {
			console.log(e.target.value)
		},
		uploadRepairImg (e) {
			const abledType = [ 'image/png', 'image/jpg', 'image/jpeg' ];
			const fileMaxSize = 1024 * 1024 * 3;
			const file = e.target.files[ 0 ]
			if (!file) return
			if (file.size > fileMaxSize) {
				alert('The image size cannot exceed 3MB')
				return
			}
			if (!abledType.includes(file.type)) {
				alert('Only png/jpg/jpeg format images are supported')
				return
			}
			this.repairImgUrl = URL.createObjectURL(file)
			this.repairImgFile = file
			this.openEditImgPop()
		},
		openEditImgPop () {
			this.$refs.editImg.open(this.repairImgFile)
		},
		deleteRepairImgUrl () {
			this.repairImgUrl = ''
		},
		uploadTextToImg (e) {
			const abledType = [ 'image/png', 'image/jpg', 'image/jpeg' ];
			const fileMaxSize = 1024 * 1024 * 3;
			const file = e.target.files[ 0 ]
			if (!file) return
			if (file.size > fileMaxSize) {
				alert('The image size cannot exceed 3MB')
				return
			}
			if (!abledType.includes(file.type)) {
				alert('Only png/jpg/jpeg format images are supported')
				return
			}
			this.textToImgFile = file
			this.textToImgFileUrl = URL.createObjectURL(file)
		},
		removeTextToImgFile () {
			if (!this.textToImgFile) return
			this.textToImgFile = null
			this.addimg_btn_text_to_img = false;
			setTimeout(() => {
				this.addimg_btn_text_to_img = true;
			}, 10);
		},
		editedImgCancel () {
			this.addimg_btn_repair = false;
			setTimeout(() => {
				this.addimg_btn_repair = true;
			}, 10);

		},
		exportEditedImg (data) {
			this.editedImgCancel()
			const { editedBase64, originBase64 } = data
			console.log('🚀 ~ file: index.vue:406 ~ exportEditedImg ~ editedBase64:', editedBase64, originBase64);
		},
		changeQuantity (item) {
			const { userLevel } = this
			const { level_req, count } = item
			if (level_req > userLevel) return;
			this.currentQuantity = count
		},
		changeStyle (style) {
			this.currentStyleId = style.model_id
		},
		changeCanvasType (type) {
			this.currentCanvasType = type.id
		},
		choiceItem (item) {
			console.log('🚀 ~ file: index.vue:406 ~ exportEditedImg ~ editedBase64:', item);
			const { id, style_model, prompt } = item
			this.currentStyleId = style_model
			this.promptContent = prompt
		},
	},
	watch: {
		[ '$route.params.type' ] (newValue, oldValue) {
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
							right: 0;
							cursor: pointer;
							width: 150px;
							height: 24px;
							display: flex;
							align-items: center;
							text-decoration: none;
							background: url('~@/assets/svg/icon_goto_upgrade.svg') no-repeat 0 0;
							background-size: contain;

							// &::after {
							// 	content: '';
							// 	margin-left: 5px;
							// 	width: 18px;
							// 	height: 18px;
							// 	background: url('~@/assets/svg/icon_to_upgrade.svg') no-repeat center center;
							// 	background-size: contain;
							// }
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
						// border: none;
						resize: none;
						background: none;
						border: 1px solid $gray_02;
						border-radius: 9px;

						&:focus {
							border: 1px solid $pink;
							outline: none;
						}

						&::placeholder {
							color: $gray_02;
						}
					}

					&:has(.textarea_warp) {
						.textarea_warp {
							textarea {
								width: 100%;
								color: $white;
								font-size: 16px;
								// padding: 10px;
								padding: 10px 10px 30px 10px;
								border: none;
								resize: none;
								background: none;
								border: none;
								border-radius: 9px;
								// background-color: red;

								&:focus {
									outline: none;
								}

								&::placeholder {
									color: $gray_02;
								}
							}
						}
					}

					.textarea_warp {
						position: relative;
						width: 100%;
						height: 147px;
						border: 1px solid $gray_02;
						border-radius: 9px;

						.textarea_tool {
							position: absolute;
							right: 0;
							bottom: 10px;
							display: flex;
							justify-content: flex-end;
							align-items: center;

							.textarea_tool_item {
								cursor: pointer;
								margin: 0 0 0 10px;
							}

							.random_txt {
								font-size: 18px;
								transform-origin: center;
								transition: all 1s ease-in-out;
								margin-right: 10px;

								&:hover {
									animation: rotate 1s ease-in-out;
								}
								@keyframes rotate {
									0% {
										transform: rotate(0deg);
									}
									100% {
										transform: rotate(360deg);
									}
								}
							}

							.clear_txt {
								width: 18px;
								height: 18px;
								background: url('~@/assets/svg/icon_delete.svg') no-repeat center center;
								background-size: contain;

								&:hover {
									animation: jitter 0.5s ease-in-out;
								}
							}
						}
					}

					.textarea_warp:has(textarea:focus) {
						border: 1px solid $pink;
					}
				}
				.option_addimg {
					display: flex;
					// justify-content: space-between;
					align-items: center;
					.add_img_des {
						color: $white;
						font-size: 16px;
						display: flex;
						align-items: center;

						&.active {
							cursor: pointer;
						}
					}
					.add_img_thumb {
						width: 100px;
						height: 100px;
						border-radius: 9px;
						margin: 0 10px 0 0;
					}
				}
				.option_quantity {
					.quantity_level {
						width: 52px;
						height: 52px;
						margin: 0 10px 0 0;
						border: 2px solid $black_02;
						background-color: $black_02;
						color: $white;
						font-size: 16px;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 6px;
						cursor: pointer;

						&.disabled {
							// background: $gray;
							cursor: not-allowed;
							position: relative;
							&.disabled {
								cursor: not-allowed;
								position: relative;
								&::after {
									content: '';
									background: url('~@/assets/svg/icon_disabled.svg') no-repeat 0 0;
									background-size: contain;
									width: 10px;
									height: 10px;
									position: absolute;
									right: 5px;
									top: 5px;
								}
							}
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
						border: 2px solid $black_02;
						cursor: pointer;

						&.active {
							border-color: $pink;
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
						width: calc(var(--w) * 0.67);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_3_2 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 0.67);
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
						width: calc(var(--w) * 0.562);
						height: calc(var(--w) * 1);
						background-color: $gray_02;
					}
					.canvas_type_16_9 {
						width: calc(var(--w) * 1);
						height: calc(var(--w) * 0.562);
						background-color: $gray_02;
					}
				}
				.option_style {
					.style_item {
						width: 84px;
						min-height: 117px;
						margin: 0 10px 10px 0;
						// border: 1px solid $black_02;
						// background-color: $black_02;
						display: flex;
						flex-direction: column;
						// justify-content: center;
						align-items: center;
						cursor: pointer;
						border-radius: 6px;
						.style_item_img {
							flex-shrink: 0;
							width: 84px;
							height: 84px;
							border-radius: 6px;
							overflow: hidden;
							margin: 0 0 10px 0;
							border: 2px solid transparent;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
						.style_item_text {
							font-size: 16px;
						}

						&.active {
							.style_item_img {
								border-color: $pink;
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
					.addimg_btn_wraper {
						height: unset;
						width: unset;
						margin: 0;
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
			.cost_tips {
				width: fit-content;
				padding: 4px 10px;
				margin: 0 auto;
				font-size: 14px;
				color: $white;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 20px;
				background-color: $black_02;

				.icon {
					width: 20px;
					height: 20px;
					background: url('~@/assets/svg/icon_medal.svg') no-repeat center center;
					background-size: contain;
					margin: 0 5px;
				}
			}
			.goto_buy_credits_link {
				display: flex;
				justify-content: center;
				align-items: center;
				color: $gold;
				text-decoration: none;
				margin: 20px 0;
				font-size: 14px;

				&::after {
					content: '';
					width: 18px;
					height: 18px;
					background: url('~@/assets/svg/icon_arrow_right.svg') no-repeat 0 0;
					margin: 3px 0 0 0;
					background-size: contain;
				}
			}
			.create_btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 420px;
				height: 48px;
				margin: 20px auto 0 auto;
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

				&.disabled {
					// background-color: $pink_disabled;
					opacity: 0.7;
					cursor: not-allowed;
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

		.addimg_btn_wraper {
			width: fit-content;
			height: 50px;
			margin: 0 10px 0 0;
			color: $white;
			font-size: 16px;
			cursor: pointer;
			display: flex;
			align-items: center;

			.add_img_icon {
				width: 30px;
				height: 30px;
				background: url('~@/assets/svg/icon_add.svg') no-repeat center center;
				background-size: contain;
			}
		}
		.addimg_btn {
			display: none;
		}

		.repair_img_thumb {
			width: 100%;
			height: 210px;
			border-radius: 9px;
			margin: 0 10px 0 0;
			position: relative;
			background: $black_02;
			display: flex;
			justify-content: center;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}

			.del_repair_img_file {
				width: 18px;
				height: 18px;
				background: url('~@/assets/svg/icon_delete.svg') no-repeat center center;
				background-size: contain;
				position: absolute;
				right: 10px;
				bottom: 10px;
				cursor: pointer;

				&:hover {
					animation: jitter 0.5s ease-in-out;
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

	@keyframes jitter {
		0%,
		50% {
			transform: rotate(30deg);
		}
		30%,
		70% {
			transform: rotate(-30deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>