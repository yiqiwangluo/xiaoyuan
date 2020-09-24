<template>
	<!-- 此组件用于首页的模块及模块列表渲染的显示 -->
	<!-- 外层卡片 -->
	<card :style_list="style_list" class="module_list_box">
		<!-- 模块标题 -->
		<view class="card_title">{{ list_title }}</view>
		<!-- 模块主体 -->
		<view class="card_body">
			<!-- 模块子项 -->
			<view :class="['card_item', specal_class]" v-for="(item, index) in list_data" :key="index" @click="natigateToNewPage(item.url)">
				<!-- 子项的icon图标 -->
				<image :src="item.icon" class="item_image" mode="aspectFit"></image>
				<!-- 子项的文字 -->
				<text class="explain_text">{{ item.title }}</text>
			</view>
		</view>
	</card>
</template>

<script>
// 引入卡片组件
import card from './card.vue';
export default {
	components: {
		card
	},
	data() {
		return {
			// 列表子项不为6个时的特殊类名
			specal_class: ''
		};
	},
	mounted() {
		// 页面初始化完成后，给特殊子项类名赋值
		this.specal_class = 'card_item_specal' + this.list_data.length;
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
	},
	methods: {
		// 跳转到指定页面
		natigateToNewPage(url) {
			uni.navigateTo({
				url,
				fail(err) {
					console.log(err);
				}
			});
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
			flex: 0 0 33%;
			height: 222rpx;
			flex-direction: column;
			justify-content: center;
			border: 1rpx solid #e5e5e5;
			// 卡片子项的图标
			.item_image {
				width: 100rpx;
				height: 50rpx;
				margin-bottom: 20rpx;
			}
			// 卡片子项的标题
			.explain_text {
				font-size: 28rpx;
			}
		}
		// 特殊子项(有4个子项时的样式)
		.card_item_specal4 {
			&:nth-child(4) {
				margin-top: -1rpx;
				border-right: 1rpx solid #e5e5e5;
			}
			// 右侧元素
			&:nth-child(3n) {
				border-right: none;
			}
			// 顶部元素
			&:nth-child(2),
			&:nth-child(3) {
				border-bottom: 1rpx solid #e5e5e5;
			}
		}
		// 特殊子项(有5个子项时的样式)
		.card_item_specal5 {
			&:nth-child(5) {
				border-right: 1rpx solid #e5e5e5;
			}

			// 右侧元素
			&:nth-child(3n) {
				border-right: none;
				margin-bottom: -1rpx;
				margin-left: -1rpx;
			}
			&:nth-child(3) {
				border-bottom: 1rpx solid #e5e5e5;
			}
		}
		// 特殊子项（有7个子项时的样式）
		.card_item_specal7 {
			&:nth-child(7) {
				border-top: none;
				margin-left: -1rpx;
			}
		}
	}
}
</style>
