<template>
	<!-- 身份码页面盒子 -->
	<view class="id_code_box" style="background-image: url(https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/idcode_paymentcode/blue_sky.png);">
		<!-- 身份码盒子 -->
		<view class="id_code">
			<!-- 身份码头部 -->
			<view class="id_code_head center">
				<!-- icon图片 -->
				<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/id_card.png" />
				<text class="explain_text">身份码</text>
			</view>
			<!-- 身份码主体 -->
			<view class="id_code_body"><image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/idcode_paymentcode/tengtu.jpg"></image></view>
		</view>
		<!-- 每5分钟刷新提示 -->
		<view class="refresh_text center">
			<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/idcode_paymentcode/refresh.png" />
			<text style="font-size: 28rpx;letter-spacing: 1rpx;">每五分钟自动刷新</text>
		</view>
		<!-- 付款码 -->
		<nav-card icon="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/idcode_paymentcode/qrCode.png" title="付款码" url="../../pages/school_card/payment_code" />
	</view>
</template>

<script>
// 引入跳转卡片组件
import navCard from '../../components/school_card-components/nav_card.vue';
export default {
	data() {
		return {};
	},
	components: {
		// 注册跳转卡片组件
		navCard
	},
	methods: {
		// 跳转到付款码页面
		toPaymentCodePage() {
			uni.navigateTo({
				url: './payment_code'
			});
		}
	}
};
</script>

<style lang="less" scoped>
// 垂直水平居中
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
// 身份码页面盒子
.id_code_box {
	width: 100%;
	min-height: 100vh;
	background-repeat: no-repeat;
	background-position: 0, 0;
	background-size: cover;
	overflow: hidden;
	// 身份码盒子
	.id_code {
		width: 580rpx;
		height: 544rpx;
		border-radius: 10rpx;
		background-color: #fff;
		margin: 74rpx auto;
		margin-bottom: 0;
		overflow: hidden;
		// 身份码头部
		.id_code_head {
			height: 90rpx;
			background-color: rgb(240, 240, 240);
			// 身份码icon图标
			image {
				width: 57rpx;
				height: 47rpx;
				margin-right: 17rpx;
			}
		}
		// 身份码主体
		.id_code_body {
			background-color: #ffffff;
			height: 100%;
			// 二维码
			image {
				width: 324rpx;
				height: 325rpx;
				display: block;
				margin: 60rpx auto;
			}
		}
	}
	// 每5分钟自动刷新提示-盒子
	.refresh_text {
		color: #ffffff;
		margin-top: 35rpx;
		image {
			width: 33rpx;
			height: 30rpx;
			margin-right: 14rpx;
		}
	}
	// 付款码盒子
	.payment_code_box {
		width: 575rpx;
		height: 81rpx;
		border-radius: 10rpx;
		background-color: rgba(255, 255, 255, 0.16);
		justify-content: flex-start;
		color: #ffffff;
		margin: 49rpx auto;
		display: flex;
		align-items: center;
		image {
			width: 45rpx;
			height: 45rpx;
			margin-left: 43rpx;
			margin-right: 36rpx;
		}
	}
	.explain_text {
		font-size: 32rpx;
	}
}
</style>
