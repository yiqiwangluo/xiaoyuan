<template>
	<!-- 付款码页面盒子 -->
	<view class="payment_code_box" style="background-image: url(../../static/images/idcode_paymentcode/blue_sky.png);">
		<!-- 付款码盒子 -->
		<view class="payment_code">
			<!-- 顶部tab栏 -->
			<view class="payment_code_head">
				<!-- 电子钱包tab栏 -->
				<view :class="['electric_wallet', tabIndex === 0 ? 'select_tabItem' : '']" @click="tabIndex = 0">
					<image src="../../static/images/idcode_paymentcode/wallet.png" />
					<text>电子钱包</text>
				</view>
				<!-- 校园卡tab栏 -->
				<view :class="['school_card', tabIndex === 1 ? 'select_tabItem' : '']" @click="tabIndex = 1">
					<image src="../../static/images/idcode_paymentcode/bang_card.png" />
					<text>校园卡</text>
				</view>
			</view>
			<!-- 内容区 -->
			<view class="payment_code_body">
				<image src="../../static/images/idcode_paymentcode/tengtu.jpg" />
				<view class="money_left">余额：￥200元</view>
			</view>
		</view>
		<!-- 每分钟刷新提示 -->
		<view class="refresh_text center">
			<image src="../../static/images/idcode_paymentcode/refresh.png" />
			<text>每分钟自动刷新</text>
		</view>
		<!-- 身份码 -->
		<nav-card icon="../../static/images/idcode_paymentcode/id_card.png" title="身份码" url="../../pages/school_card/id_code" />
		<!-- 分隔横线 -->
		<view class="line"></view>
		<!-- 优惠信息 -->
		<nav-card icon="../../static/images/idcode_paymentcode/gift.png" title="优惠信息" url="" :marginTop="false" />
	</view>
</template>

<script>
// 引入跳转卡片组件
import navCard from '../../components/school_card-components/nav_card.vue';
export default {
	data() {
		return {
			// 被选中的tab项（0为电子钱包，1为校园卡）
			tabIndex: 0
		};
	},
	components: {
		// 注册跳转卡片组件
		navCard
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
// 付款码页面盒子
.payment_code_box {
	width: 100%;
	min-height: 100vh;
	background-repeat: no-repeat;
	background-position: 0, 0;
	background-size: cover;
	overflow: hidden;
	// 付款码盒子
	.payment_code {
		width: 580rpx;
		height: 544rpx;
		margin: 0 auto;
		margin-top: 74rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		justify-content: flex-end;
		// 顶部tab栏
		.payment_code_head {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 580rpx;
			height: 90rpx;
			// 电子钱包和校园卡的公共样式
			.electric_wallet,
			.school_card {
				width: 290rpx;
				height: 98rpx;
				border-radius: 10rpx;
				position: absolute;
				top: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				background-color: rgb(102, 102, 102);
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				image {
					width: 55rpx;
					height: 55rpx;
					margin-right: 18rpx;
				}
			}
			// 电子钱包
			.electric_wallet {
				left: 0;
			}
			// 校园卡
			.school_card {
				right: 0;
			}
			// 被选中的tab项
			.select_tabItem {
				top: -10rpx;
				height: 108rpx;
				color: #000;
				background-color: #ffffff;
			}
		}
		// 内容区
		.payment_code_body {
			width: 580rpx;
			height: 454rpx;
			border-radius: 10rpx;
			background-color: #ffffff;
			// 二维码图片
			image {
				width: 324rpx;
				height: 325rpx;
				margin: 0 auto;
				display: block;
				margin-top: 49rpx;
				margin-bottom: 25rpx;
			}
			// 余额提示
			.money_left {
				text-align: center;
			}
		}
	}
	// 每分钟自动刷新提示-盒子
	.refresh_text {
		color: #ffffff;
		margin-top: 35rpx;
		image {
			width: 33rpx;
			height: 30rpx;
			margin-right: 14rpx;
		}
	}
	// 分隔横线
	.line {
		width: 564rpx;
		height: 1rpx;
		margin: 0 auto;
		background-color: #afcbe8;
	}
}
</style>
