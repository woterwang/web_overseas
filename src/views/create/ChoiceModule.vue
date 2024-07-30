<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 21:22:23
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-30 08:58:08
 * @😍: 😃😃
-->
<template>
	<div class="choice_page">
		<div class="choice_category_list">
			<div
				v-for="(c,i) in categoryList"
				:key="c.name"
				class="choice_category_item"
				:class="{ active: currentCategory === c.name }"
				@click="changeCategory(c)"
			>{{c.name}}</div>
		</div>
		<div class="choice_box">
			<ChoiceCard
				v-for="card in currentSublist"
				:item="card"
				:key="card.name"
				@changeSub="changeSub"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "ChoiceModule",
	components: {
		ChoiceCard: () => import('./ChoiceCard.vue'),
	},
	props: {
		baseData: {
			type: Object,
			default: () => ({})
		},
		createType: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			categoryList: [],
			currentCategory: null,
			currentSublist: [],
			currentSub: null,
		}
	},
	mounted () {
		this.initData();
	},
	methods: {
		initData () {
			switch (this.createType) {
				case 0:
					this.initTextToImg()
					break;
				case 1:
					this.initRepairData()
					break;
				default:
					break;
			}
		},
		initTextToImg () {
			const { t2i_editorschoice, } = this.baseData
			const { t2i_sort, t2i_items } = t2i_editorschoice
			t2i_sort.list = t2i_sort.map(v => {
				const items = v.items
				v.list = []
				t2i_items.forEach(item => {
					if (items.includes(item.id)) {
						v.list.push(item)
					}
				})
				return v
			})
			this.categoryList = t2i_sort
			this.currentSublist = t2i_sort[ 0 ][ 'list' ]
			this.currentCategory = this.categoryList[ 0 ][ 'name' ]
			this.currentSub = this.currentSublist[ 0 ][ 'id' ]
		},
		initRepairData () {
			const {  irp_editorschoice } = this.baseData
			const { irp_sort, irp_items } = irp_editorschoice
			irp_sort.list = irp_sort.map(v => {
				const items = v.items
				v.list = []
				irp_items.forEach(item => {
					if (items.includes(item.id)) {
						v.list.push(item)
					}
				})
				return v
			})
			this.categoryList = irp_sort
			this.currentSublist = irp_sort[ 0 ][ 'list' ]
			this.currentCategory = this.categoryList[ 0 ][ 'name' ]
			this.currentSub = this.currentSublist[ 0 ][ 'id' ]
		},
		changeCategory (item) {
			const { list, name } = item
			this.currentCategory = name
			this.currentSublist = list
			this.currentSub = this.currentSublist[ 0 ][ 'id' ]
		},
		changeSub (item) {
			const { id } = item
			this.currentSub = id
			this.$emit('choiceItem', item)
		}
	},
	watch: {
		createType(newValue, oldValue) {
			this.initData()
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