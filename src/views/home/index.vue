<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:03:07
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-09 12:42:07
 * @😍: 😃😃
-->
<template>
	<div class="home_page">
		<!-- banner -->
		<div class="part part_video">
			<div class="left">
				<h1>{{baseData.top.left_main}}</h1>
				<p>{{baseData.top.left_sub}}</p>
				<router-link
					to="/create/0"
					href="javascript:void(0)"
					class="create_btn"
				>Start Creating</router-link>
			</div>
			<div class="right">
				<video
					:src="baseData.top.right_video"
					controls
					autoplay
					loop
					muted
				/>
			</div>
		</div>
		<!-- part -->
		<div
			class="part part_img"
			v-for="(item,i) in baseData.middle"
			:key="i"
			:class="'part_'+(i+1)"
		>
			<div class="top">
				<h1>{{ item.main }}</h1>
				<p>{{item.sub}}</p>
			</div>
			<div class="bottom">
				<img :src="item.banner" />
			</div>
		</div>
		<div class="part part_img obout_our">
			<div class="top">
				<h1>{{baseData.bottom.main}}</h1>
			</div>
			<div class="bottom">
				<img :src="baseData.bottom.banner" />
			</div>
			<p>{{baseData.bottom.sub}}</p>
		</div>

		<!-- bottom btn -->
		<router-link
			to="/create/0"
			class="create_btn buttom_btn"
			:class="{'fixed_btn':createBtnState}"
		>Start Creating</router-link>
	</div>
</template>

<script>
import PageNav from '@/components/pageNav.vue'
export default {
	name: "Home",
	components: {
		PageNav
	},
	data () {
		return {
			createBtnState: 0,
			//来源类型
			sourceType: 0, // 0: 自然流星 1: 买量流量
			//基础数据
			baseData: null,
		}
	},
	mounted () {
		this.getSourceType()
	},
	methods: {
		//获取流星来源
		getSourceType () {
			this.sourceType = this.$route.query.sourceType || 0
			let baseData = {}
			if (this.sourceType == 1) {
				baseData = require('@jonsData/weidengluzhuye_mailiang.json')
			} else {
				baseData = require('@jonsData/weidengluzhuye_ziran.json')
			}
			localStorage.setItem('sourceType', this.sourceType)
			this.baseData = baseData
			this.$nextTick(() => {
				this.observerBtn()
			})
		},
		observerBtn () {
			//监控part_video是否离开视口
			const observer = new IntersectionObserver(this.handleIntersection, {
				root: null,
				rootMargin: '0px',
				threshold: 0
			})
			observer.observe(this.$el.querySelector('.part_video'))

			//监控最后一个 part_img 是否进入视口
			const lastObserver = new IntersectionObserver(this.handleLastIntersection, {
				root: null,
				rootMargin: '0px',
				threshold: 0
			})
			const part_imgs = this.$el.querySelectorAll('.part_img')
			lastObserver.observe(part_imgs[ part_imgs.length - 1 ]) // 5-1
			// lastObserver.observe(document.querySelector('.page_footer')) // 5-1
		},
		//监控part_video是否离开视口
		handleIntersection (entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.querySelector('video').play()
					this.createBtnState = 0
				} else {
					entry.target.querySelector('video').pause()
					this.createBtnState = 1
				}
			})
		},
		//监控最后一个 part_img 是否进入视口
		handleLastIntersection (entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.createBtnState = 0
				} else {
					this.createBtnState = 1
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.home_page {
		width: 1440px;
		margin: 0 auto;
		padding: 0 0 20vh 0;
		color: $white;

		.create_btn {
			display: inline-block;
			padding: 10px 30px;
			background-color: $pink;
			color: $white;
			border-radius: 20px;
			text-decoration: none;
			font-size: 20px;

			&.buttom_btn {
				display: block;
				width: 200px;
				margin: 40px auto 0 auto;
			}

			&.fixed_btn {
				position: fixed;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		.part {
			display: flex;
			// height: 100vh;
			&.part_video {
				justify-content: center;
				align-items: center;
				// background: url('~@/assets/img/home_bg_1.jpg') no-repeat center center;
				background-size: cover;
				.left {
					width: 38%;
					text-align: left;
					h1 {
						font-size: 40px;
						margin: 0 0 20px 0;
					}
					p {
						font-size: 20px;
						margin: 0 0 40px 0;
					}
				}

				.right {
					width: 50%;
					video {
						width: 100%;
						height: 684px;
					}
				}
			}

			&.part_img {
				background-size: cover;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				padding: 50px 0;
				.top {
					width: 58%;
					text-align: center;
					h1 {
						font-size: 40px;
						margin: 0 0 20px 0;
					}
					p {
						font-size: 20px;
						margin: 0 0 40px 0;
						text-align: center;
					}
				}
				.bottom {
					// width: 100%;
					img {
						width: auto;
						max-width: 100%;
					}
				}

				//sass for循环
				@for $i from 1 through 5 {
					&.part_#{$i} {
						// sass if
						@if $i < 6 {
							&::before {
								content: '';
								width: 48px;
								height: 48px;
								background: url('~@/assets/images/icon_#{$i}.png') no-repeat center center;
								background-size: cover;
								margin: 0 0 20px 0;
							}
						} @else {
							// background: url('~@/assets/img/home_bg_#{$i}.png') no-repeat center center;
						}
					}
				}

				&.obout_our {
					border-top: 2px solid $black_02;
					padding: 60px 0 0 0;
					margin: 80px 0 0 0;

					.bottom {
						width: 80%;

						img {
							width: 100%;
						}
					}

					p {
						width: 90%;
						font-size: 20px;
						margin: 40px 0;
						text-align: center;
					}
				}
			}
		}
	}
</style>