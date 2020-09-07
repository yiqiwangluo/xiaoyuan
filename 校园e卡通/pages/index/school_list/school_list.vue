<template>
	<view class="school_list_box">
		<!-- 顶部地区选择及学校搜索盒子 -->
		<view class="topNav row_center">
			<!-- 地区选择 -->
			<view class="choise_area row_center">
				<view class="area">{{ area }}</view>
				<image src="../../../static/images/school_list_images/left_arrow.png" class="left_arrow_image"></image>
			</view>
			<!-- 搜索框 -->
			<view class="search_box row_center">
				<image src="../../../static/images/school_list_images/magnifying_glass.png" class="search_image"></image>
				<text>搜索</text>
			</view>
		</view>
		<!-- 学校列表盒子 -->
		<view class="school_list">
			<school-card
				logo="https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
				name="梅州中学"
				address="广东省梅州市梅州大道9号"
				distance="5.6"
			/>
			<school-card
				logo="https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
				name="梅州中学"
				address="广东省梅州市梅州大道9号"
				distance="5.6"
			/>
			<school-card
				logo="https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
				name="梅州中学"
				address="广东省梅州市梅州大道9号"
				distance="5.6"
			/>
		</view>
	</view>
</template>

<script>
// 引入学校卡片组件
import schoolCard from '../../../components/school_list-components/school_card.vue';
export default {
	data() {
		return {
			// 地区
			area: '梅州市'
		};
	},
	components: {
		// 注册学校卡片组件
		schoolCard
	}
};
</script>

<style lang="less" scoped>
// 横向排列并主轴居中
.row_center {
	display: flex;
	align-items: center;
}
// 学校列表盒子
.school_list_box {
	min-height: 100vh;
	background-color: #f8f8f8;
}
// 顶部地区选择及学校搜索盒子
.topNav {
	width: 750rpx;
	height: 88rpx;
	padding-left: 32rpx;
	background-color: #ffffff;
	// 地区选择
	.choise_area {
		// 地区文字
		.area {
			font-size: 30rpx;
		}
		// 左箭头图片
		.left_arrow_image {
			width: 25rpx;
			height: 25rpx;
			transform: rotate(-90deg);
			margin-left: 12rpx;
		}
	}
	// 搜索框
	.search_box {
		width: 496rpx;
		height: 55rpx;
		background-color: #f3f4f6;
		border-radius: 24rpx;
		margin-left: 18rpx;
		// 放大镜图片
		.search_image {
			width: 26rpx;
			height: 26rpx;
			margin-left: 19rpx;
		}
		text {
			color: #666666;
			font-size: 28rpx;
			margin-left: 16rpx;
		}
	}
}
// 学校列表
.school_list  {
	margin-top: 8rpx;
}
</style>
