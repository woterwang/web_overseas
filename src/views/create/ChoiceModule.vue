<!--
 * @Author: hqwx.com
 * @Date: 2024-07-06 21:22:23
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 22:04:01
 * @😍: 😃😃
-->
<template>
	<div class="choice_page">
		<div class="choice_category_list">
			<div class="choice_category_item active">Category 1</div>
			<div class="choice_category_item">Category 2</div>
			<div class="choice_category_item">Category 3</div>
			<div class="choice_category_item">Category 4</div>
		</div>
		<div class="choice_box">
			<ChoiceCard v-for="card in 10" :key="card" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "ChoiceModule",
		components: {
			ChoiceCard: () => import('./ChoiceCard.vue'),
		},
	}
</script>

<style lang="scss" scoped>
@import '~@/styles/_var.scss';
.choice_page{
	.choice_category_list{
		display: flex;
		margin: 20px 0;
		flex-wrap: wrap;
		.choice_category_item{
			padding: 10px 20px;
			border: 1px solid $gray_02;
			color: $gray_02;
			margin: 0 10px 10px 0;
			border-radius: 20px;
			cursor: pointer;
			&.active{
				border-color: $pink;
				color: $white;
			}
		}
	}
	.choice_box{
		display: flex;
		flex-wrap: wrap;
	}
}
</style>