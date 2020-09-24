<template>
	<view class="page_box">
		<!-- 银行卡列表 -->
		<view class="bank_card" style="background-image: url(https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/electric_wallet_images/bank_card.png);">
			<text>{{bank_card_num.substr(0,4)}}****{{bank_card_num.substr(-4,4)}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 银行卡账号
				bank_card_num:'622700243650073637'
			};
		}
	}
</script>

<style lang="less" scoped>
.page_box {
	// 银行卡
	.bank_card {
		width: 706rpx;
		height: 229rpx;
		margin: 60rpx auto;
		border-radius: 10rpx;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100%;
		overflow: hidden;
		display: flex;
		align-items: flex-end;
		text {
			color: #FFFFFF;
			padding-left: 150rpx;
			font-size: 40rpx;
			margin-bottom: 40rpx;
		}
	}
}
</style>
