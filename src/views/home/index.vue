<!--
 * @Author: hqwx.com
 * @Date: 2024-07-05 12:03:07
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 17:16:13
 * @😍: 😃😃
-->
<template>
	<div class="home_page">
		<!-- banner -->
		<div class="part part_video">
			<div class="left">
				<h1>Explore Unlimited And Realistic AI Art</h1>
				<p>Bring your deepest fantasies to life, including reality, anime, 3D, and more. Join now to start your creation.</p>
				<a
					href="javascript:void(0)"
					class="create_btn"
				>Start Creating</a>
			</div>
			<div class="right">
				<video
					src="../../assets/video.mp4"
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
			:class="'part_'+item"
			v-for="item in 5"
			:key="item"
		>
			<div class="top">
				<h1>Image Repair</h1>
				<p>Edit images using repair mode. Simply select an area and write a description of what you want to change. Photo editing with AI Images has never been easier.</p>
			</div>
			<div class="bottom">
				<img src="../../assets/temp.png" />
			</div>
		</div>
		<!-- bottom btn -->
		<a
			href="javascript:void(0)"
			class="create_btn buttom_btn"
			:class="{'fixed_btn':createBtnState}"
		>Start Creating</a>
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
		}
	},
	mounted () {
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
			rootMargin: '10px',
			threshold: 0
		})
		const part_imgs = this.$el.querySelectorAll('.part_img')
		// lastObserver.observe(part_imgs[ part_imgs.length - 1 ]) // 5-1
		lastObserver.observe(document.querySelector('.page_footer')) // 5-1
	},
	methods: {
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
				padding: 50px 0 0 0;
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
					}
				}
				.bottom {
					// width: 100%;
					img {
						// width: 100%;
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
							}
						} @else {
							// background: url('~@/assets/img/home_bg_#{$i}.png') no-repeat center center;
						}
					}
				}
			}
		}
	}
</style>