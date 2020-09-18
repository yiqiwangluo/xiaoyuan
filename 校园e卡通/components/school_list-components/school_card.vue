<template>
	<!-- 此组件用于学校列表页的学校渲染 -->
	<!-- 学校卡片组件盒子 -->
	<view class="school_card_box row_center">
		<!-- 学校logo图片 -->
		<view class="logo"><image :src="logo"></image></view>
		<!-- 学校信息 -->
		<view class="school_msg">
			<!-- 学校名称 -->
			<view class="school_name">{{ name }}</view>
			<!-- 学校地址 -->
			<view class="school_adress">{{ address }}</view>
		</view>
		<!-- 学校距离 -->
		<view class="distance row_center">
			<text>{{ distance }}km</text>
			<!-- 右箭头图片 -->
			<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_list_images/left_arrow.png" class="right_arrow_image"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 学校logo
		logo: {
			require: true,
			type: String
		},
		// 学校名称
		name: {
			require: true,
			type: String
		},
		// 学校地址
		address: {
			require: true,
			type: String
		},
		// 学校距离，单位：KM
		distance: {
			require: true,
			type: String
		}
	}
};
</script>

<style lang="less" scoped>
// 横向排列并主轴居中
.row_center {
	display: flex;
	align-items: center;
}
// 学校卡片盒子
.school_card_box {
	height: 139rpx;
	padding-left: 28rpx;
	margin-bottom: 4rpx;
	background-color: #ffffff;
	// 学校logo
	.logo > image {
		width: 74rpx;
		height: 49rpx;
	}
	// 学校信息
	.school_msg {
		height: 87rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 23rpx;
		// 学校名称
		.school_name {
			font-size: 30rpx;
		}
		// 学校地址
		.school_adress {
			font-size: 24rpx;
			color: rgb(153, 153, 153);
		}
	}
	// 学校距离
	.distance {
		margin-left: auto;
		color: rgb(153, 153, 153);
		// 右箭头
		.right_arrow_image {
			width: 25rpx;
			height: 25rpx;
			transform: rotate(180deg);
			margin-left: 11rpx;
			margin-right: 30rpx;
		}
	}
}
</style>
