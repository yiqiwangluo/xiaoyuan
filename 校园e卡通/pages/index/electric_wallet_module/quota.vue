<template>
	<!-- 限额页面盒子 -->
	<view class="quota_box">
		<!-- 顶部提示文字 -->
		<view class="alert_text">电子钱包支付限额</view>
		<!-- 限额调整框盒子 -->
		<view class="resize_quota_box">
			<!-- 单笔限额 -->
			<view class="once_quota">
				<text>单笔限额</text>
				<text class="quota_num">{{once_quota}} 元</text>
			</view>
			<!-- 日累计限额 -->
			<view class="day_quota">
				<text>日累计限额</text>
				<text class="quota_num">{{day_quota}} 元</text>
			</view>
		</view>
		<!-- 温馨提示 -->
		<view class="warm_prompt">
			<text style="color: rgb(224,40,40);">温馨提示：</text>
			<text style="color: rgb(102,102,102);">建议您根据自己的消费习惯设置消费限额。该限额仅适用于电子钱包扫码消费(含主扫与被扫)，电子钱包充值、提现不受此限额控制。</text>
		</view>
		<!-- 提交按钮 -->
		<button class="btn" @click="btnClick">修改</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 单笔限额
			once_quota: 100,
			// 日累计限额
			day_quota: 200
		};
	},
	methods: {
		// 点击修改按钮
		btnClick() {
			uni.showModal({
				title: '修改成功'
			});
		}
	}
};
</script>

<style lang="less" scoped>
// 限额页面盒子
.quota_box {
	width: 100%;
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
	// 限额调整框盒子
	.resize_quota_box {
		& > view {
			background-color: #ffffff;
			display: flex;
			align-items: center;
			height: 92rpx;
			padding-left: 30rpx;
			border-bottom: 1rpx solid rgba(153, 153, 153, 0.5);
			.quota_num {
				margin-left: auto;
				margin-right: 20rpx;
			}
		}
	}
	// 温馨提示
	.warm_prompt {
		margin-top: 22rpx;
		font-size: 24rpx;
		padding: 0 23rpx;
		& > text {
			letter-spacing: 4rpx;
			line-height: 42rpx;
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
