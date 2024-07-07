<!--
 * @Author: hqwx.com
 * @Date: 2024-07-07 11:19:33
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-07 20:40:05
 * @😍: 😃😃
-->
<template>
	<div
		class="edit_pop"
		v-if="visible"
	>
		<div
			class="edit_pop_mask"
			@click="close"
		></div>
		<div class="edit_pop_content">
			<span
				class="close_btn"
				@click="close"
			></span>
			<div class="edit_pop_body">
				<!-- 左侧图片 -->
				<div class="edit_pop_image_canvas">
					<div class="img_origin">
						<img
							:src="imgUrl"
							alt=""
							ref="originImg"
						/>
					</div>
					<div
						class="canvas_img"
						ref="canvas"
					></div>
				</div>
				<!-- 右侧工具 -->
				<div class="edit_pop_image_tool">
					<p class="tool_desc">Please draw the area you want repaired and click Confirm.</p>
					<div class="tool_btns">
						<span
							class="tool_item tool_brush"
							@click="changeTool('brush')"
							:class="{active: curTool == 'brush'}"
						></span>
						<span
							class="tool_item tool_eraser"
							@click="changeTool('eraser')"
							:class="{active: curTool == 'eraser'}"
						></span>
						<span
							class="tool_item tool_clear"
							@click="clearCanvas"
						>
							Clear
						</span>
					</div>
					<div class="tool_size">
						<vue-slider
							v-model="currSize"
							:drag-on-click="true"
							:min="0"
							:max="100"
							width="90%"
							class="slider_range"
							:interval="1"
							@change="changeSize"
						></vue-slider>
					</div>
					<span
						class="confirm_btn"
						@click="exportEditedImg"
					>Confirm</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { EditImg, OutputWithCanvas } from '@/utils/cavasWithEditImg.js'
export default {
	name: 'EditImage',
	components: {
		VueSlider,
	},
	data () {
		return {
			//是否显示弹窗
			visible: false,
			//图片
			currSize: 50,
			//ChoiceCard.vue
			curTool: 'brush',
			//imgUrl
			imgUrl: require('@/assets/temp3.png'),
		}
	},
	mounted () {
		// this.initCanvas();
	},
	methods: {
		initCanvas () {
			if (!this.visible) return;
			if (this.canvas) {
				this.canvas = null;
			}
			this.canvas = new EditImg({
				imgUrl: this.imgUrl,
				el: this.$refs.canvas,
				tool: this.curTool,
				size: this.currSize,
			});
		},
		close () {
			this.visible = false;
			this.$emit('editedImgCancel')
		},
		open (file) {
			this.visible = true;
			this.imgFile = file;
			this.imgUrl = URL.createObjectURL(file);
			this.$nextTick(() => {
				this.initCanvas();
			});
		},
		changeTool (tool) {
			this.curTool = tool;
			this.canvas.changeTool(tool);
		},
		changeSize (size) {
			this.currSize = size;
			this.canvas.setBrushSize(size);
		},
		clearCanvas () {
			this.canvas.clear();
		},
		async exportEditedImg () {
			const editedBase64 = await this.canvas.exportImg();
			const originBase64 = await OutputWithCanvas(this.imgFile, 'image/png', 1);
			this.$emit('exportEditedImg', {
				editedBase64,
				originBase64,
			});
			this.visible = false;
		},
	},
	beforeDestroy () {
		this.visible = false;
		if (this.canvas) {
			this.canvas = null;
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.edit_pop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 9999;
		.edit_pop_mask {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
		}
		.edit_pop_content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 1021px;
			height: 720px;
			border-radius: 10px;
			background: $black_02;
			.close_btn {
				position: absolute;
				top: 20px;
				right: 20px;
				width: 20px;
				height: 20px;
				background: url('~@/assets/svg/icon_close.svg') no-repeat center;
				background-size: contain;
				cursor: pointer;
				z-index: 9999;
			}
			.edit_pop_body {
				display: flex;
				width: 100%;
				height: 100%;
				.edit_pop_image_canvas {
					width: 70%;
					height: 100%;
					position: relative;
					.img_origin {
						width: 100%;
						height: 100%;
						position: absolute;
						inset: 0;
						z-index: 1;
						overflow: hidden;

						img {
							width: 100%;
							height: 100%;
							object-fit: fill;
						}
					}
					.canvas_img {
						width: 100%;
						height: 100%;
						position: absolute;
						inset: 0;
						z-index: 2;
					}
				}
				.edit_pop_image_tool {
					width: 30%;
					height: 100%;
					border-left: 1px solid $gray;
					padding: 0 20px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-content: center;
					position: relative;
					.tool_desc {
						padding: 20px;
						font-size: 14px;
						color: $gray;
						// margin: 0 0 20% 0;
					}
					.tool_btns {
						display: flex;
						justify-content: space-around;
						margin: 20% 0;
						.tool_item {
							width: 54px;
							height: 54px;
							background: $black_03;
							display: flex;
							justify-content: center;
							align-items: center;
							border-radius: 6px;
							border: 2px solid $black_03;
							cursor: pointer;
							&.tool_brush {
								&::before {
									content: '';
									width: 24px;
									height: 24px;
									background: url('~@/assets/svg/icon_draw.svg') no-repeat center;
									background-size: contain;
								}
							}
							&.tool_eraser {
								&::before {
									content: '';
									width: 24px;
									height: 24px;
									background: url('~@/assets/svg/icon_eraser.svg') no-repeat center;
									background-size: contain;
								}
							}
							&.active {
								border-color: $pink;
							}
						}
					}
					.tool_size {
						width: 100%;
						height: 40px;
					}
					.confirm_btn {
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						bottom: 20px;
						left: 50%;
						transform: translateX(-50%);
						width: 80%;
						height: 40px;
						border-radius: 20px;
						background: $pink;
						color: $white;
						cursor: pointer;
					}
				}
			}
		}
		.slider_range {
			// margin: 0 auto;
		}
	}
</style>