<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 21:22:23
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-29 13:31:28
 * @😍: 😃😃
-->
<template>
	<div class="choice_page">
		<div class="choice_category_list">
			<div
				class="choice_category_item"
				:class="{ active: currentCategory === key }"
				v-for="(c,key,i) in list"
				:key="key"
			>{{key}}</div>
		</div>
		<div class="choice_box">
			<ChoiceCard
				v-for="card in 6"
				:item="card"
				:key="card.name"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "ChoiceModule",
	props: {
		list: {
			type: Object,
			default: () => ({})
		},
	},
	components: {
		ChoiceCard: () => import('./ChoiceCard.vue'),
	},
	data () {
		return {
			currentCategory: null,
			currentSublist: [],
			currentSub: null,
		}
	},
	methods: {
		initFirst () {
			const keys = Object.keys(this.list)
			this.currentCategory = keys[ 0 ]
			this.currentSublist = this.list[ this.currentCategory ]
			this.currentSub = this.currentSublist[ 0 ]
		},
		changeCategory (index) {
			this.currentCategory = index
			this.currentSublist = this.list[ index ]
			this.currentSub = this.currentSublist[ 0 ]
		},
		changeSub (index) {
			this.currentSub = this.currentSublist[ index ]
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_var.scss';
	.choice_page {
		.choice_category_list {
			display: flex;
			margin: 20px 0;
			flex-wrap: wrap;
			.choice_category_item {
				padding: 10px 20px;
				border: 1px solid $gray_02;
				color: $gray_02;
				margin: 0 10px 10px 0;
				border-radius: 20px;
				cursor: pointer;
				&.active {
					border-color: $pink;
					color: $white;
				}
			}
		}
		.choice_box {
			display: flex;
			flex-wrap: wrap;
		}
	}
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