<template>
	<!-- 此组件用于首页的模块及模块列表渲染的显示 -->
	<!-- 外层卡片 -->
	<card :style_list="style_list" class="module_list_box">
		<!-- 模块标题 -->
		<view class="card_title">{{ list_title }}</view>
		<!-- 模块主体 -->
		<view class="card_body">
			<!-- 模块子项 -->
			<view :class="['card_item', list_data.length % 2 === 0 ? '' : 'card_item_specal']" v-for="(item, index) in list_data" :key="index">
				<!-- 子项的icon图标 -->
				<image :src="item.icon" class="item_image"></image>
				<!-- 子项的文字 -->
				<view>{{ item.title }}</view>
			</view>
		</view>
	</card>
</template>

<script>
// 引入卡片组件
import card from './card.vue';
export default {
	components: {
		// 注册卡片组件
		card
	},
	props: {
		// 样式字符串
		style_list: {
			type: String
		},
		// 模块标题
		list_title: {
			type: String,
			require: true
		},
		// 模块数据
		list_data: {
			type: Array,
			require: true
		}
	}
};
</script>

<style lang="less" scoped>
// 模块卡片盒子
.module_list_box {
	// 卡片标题
	.card_title {
		width: 100%;
		height: 62rpx;
		line-height: 62rpx;
		text-indent: 34rpx;
		font-size: 30rpx;
		color: rgb(102, 102, 102);
	}
	// 卡片内容
	.card_body {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		// 子项样式
		.card_item {
			// 左侧元素
			&:nth-child(1),
			&:nth-child(4) {
				border-left: none;
			}
			// 中间元素
			&:nth-child(2),
			&:nth-child(5) {
				border-left: none;
				border-right: none;
			}
			// 右侧元素
			&:nth-child(3n) {
				border-right: none;
			}
			// 顶部元素
			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(3) {
				border-bottom: none;
			}
			display: flex;
			align-items: center;
			width: 234rpx;
			height: 222rpx;
			flex-direction: column;
			justify-content: center;
			border: 1rpx solid #e5e5e5;
			// 卡片子项的图标
			.item_image {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 20rpx;
			}
		}
		// 特殊子项(只有4个子项时的样式)
		.card_item_specal {
			&:nth-child(5) {
				border-right: 1rpx solid #e5e5e5;
			}
			// 右侧元素
			&:nth-child(3n) {
				border-right: none;
				margin-bottom: -1rpx;
			}
			// 顶部元素
			&:nth-child(1),
			&:nth-child(2) {
				border-bottom: none;
			}
			&:nth-child(3) {
				border-bottom: 1rpx solid #e5e5e5;
			}
		}
	}
}
</style>
