<template>
	<!-- 提现页面盒子 -->
	<view class="get_deposit_box">
		<!-- 顶部提示文字 -->
		<view class="alert_text">微信支付</view>
		<!-- 提现盒子 -->
		<view class="get_deposit">
			<view class="disc_text">充值金额(元)</view>
			<view class="input_box">
				<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/electric_wallet_images/money.png" />
				<input type="text" v-model="value" @input="inputValue" />
			</view>
			<!-- 快捷输入金额盒子 -->
			<view class="quick_input_box">
				<view v-for="(item, index) in [50, 100, 150, 200]" :key="index" @click="quick_input($event, index)" :class="{ selected_item: index === is_choose }">
					{{ item }}元
				</view>
			</view>
			<!-- 提交按钮 -->
			<button class="btn" @click="btnClick">充值</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 充值金额
			value: '',
			// 选中的子项
			is_choose: -1
		};
	},
	methods: {
		// 按钮的点击事件
		btnClick() {
			uni.showModal({
				title: '充值成功'
			});
			// uni.showModal({
			// 	title: '充值失败，余额不足'
			// });
		},
		// 快速输入充值金额
		quick_input(e, num) {
			this.value = (num + 1) * 50;
			this.is_choose = num;
		},
		// 手动输入时，将快速输入的样式清空
		inputValue() {
			this.is_choose = -1;
		}
	}
};
</script>

<style lang="less" scoped>
// 提现页面盒子
.get_deposit_box {
	min-height: 100vh;
	background-color: #f8f8f8;
	// 顶部提示文字
	.alert_text {
		font-size: 28rpx;
		color: rgb(102, 102, 102);
		padding-left: 33rpx;
		height: 72rpx;
		line-height: 72rpx;
	}
	// 提现盒子
	.get_deposit {
		height: 409rpx;
		background-color: #ffffff;
		// 说明文字
		.disc_text {
			margin-top: 30rpx;
			font-size: 32rpx;
			padding-left: 30rpx;
		}
		// 输入框
		.input_box {
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid rgb(153, 153, 153);
			width: 706rpx;
			margin-top: 48rpx;
			padding-bottom: 40rpx;
			margin-left: 30rpx;
			image {
				width: 32rpx;
				height: 41rpx;
			}
			input {
				padding-left: 20rpx;
				font-size: 42rpx;
			}
		}
	}
	// 电子钱包余额文字
	.money_left_text {
		font-size: 24rpx;
		color: rgb(153, 153, 153);
		margin-top: 20rpx;
		padding-left: 30rpx;
	}
	// 快捷输入盒子
	.quick_input_box {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 42rpx;
		& > view {
			width: 118rpx;
			height: 101rpx;
			border: 2rpx solid rgb(102, 102, 102);
			border-radius: 10rpx;
			line-height: 101rpx;
			text-align: center;
		}
		.selected_item {
			color: #ffffff;
			background-color: rgb(40, 111, 201);
		}
	}
	// 按钮
	.btn {
		width: 706rpx;
		height: 80rpx;
		border-radius: 24rpx;
		background-color: rgb(40, 111, 201);
		color: #ffffff;
		margin-top: 41rpx;
	}
	// 点击按钮时的反馈，增加按钮30%的灰度
	.btn:active {
		filter: grayscale(30%);
	}
}
</style>
