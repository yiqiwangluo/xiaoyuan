<template>
	<!-- 页面盒子 -->
	<view class="page_box">
		<!-- 余额 -->
		<view class="money_quota">
			<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/balance.png" />
			<text class="card_text">余额</text>
			<text class="quota_text">￥{{ money_quota }}</text>
		</view>
		<!-- 卡号 -->
		<!-- <view class="card_num">
			<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/idcode_paymentcode/wallet.png" class="wallet_image" />
			<text class="card_num_text">电子钱包卡号</text>
			<text class="card_num">************5566</text>
			<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/electric_wallet_images/hide.png" class="eye_image" />
		</view> -->
		<!-- 模块列表 -->
		<list-card v-for="(item, index) in list_data" :key="index" :icon="item.icon" :title="item.title" :url="item.url" />
	</view>
</template>

<script>
// 引入列表卡片组件
import listCard from '../../../components/electric_wallet-components/list_card.vue';
export default {
	data() {
		return {
			// 钱包余额
			money_quota: '50.00',
			// 模块列表渲染数据
			list_data: [
				{
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/transaction_detail.png',
					title: '流水查询',
					url: './transaction_detail'
				},
				{
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge_money.png',
					title: '充值',
					url: './recharge_money'
				},
				// {
				// 	icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge.png',
				// 	title: '提现',
				// 	url: './get_deposit'
				// },
				{
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/quota_setting.png',
					title: '限额',
					url: './quota'
				}
			]
		};
	},
	components: {
		// 注册列表卡片组件
		listCard
	}
};
</script>

<style lang="less" scoped>
// 页面盒子
.page_box {
	min-height: 100vh;
	background-color: #f9f9f9;
	& > view {
		padding-left: 34rpx;
	}
	// 余额盒子
	.money_quota {
		height: 112rpx;
		display: flex;
		align-items: center;
		background-color: #ffffff;
		image {
			width: 70rpx;
			height: 50rpx;
			margin-left: -15rpx;
			margin-right: -10rpx;
		}
		// 余额文字
		.card_text {
			margin-left: 23rpx;
			font-size: 32rpx;
		}
		// 余额
		.quota_text {
			margin-left: auto;
			margin-right: 26rpx;
			color: rgb(102, 102, 102);
			font-size: 28rpx;
		}
	}
	// 卡号
	.card_num {
		height: 89rpx;
		display: flex;
		align-items: center;
		// 钱包图片
		.wallet_image {
			width: 46rpx;
			height: 46rpx;
		}
		// 眼睛图片
		.eye_image {
			width: 36rpx;
			height: 30rpx;
			margin-left: 18rpx;
			margin-right: 29rpx;
		}
		// 电子钱包卡号-文字
		.card_num_text {
			margin-left: 22rpx;
			color: rgb(102, 102, 102);
			font-size: 28rpx;
		}
		// 电子钱包卡号
		.card_num {
			margin-left: auto;
			color: rgb(102, 102, 102);
			font-size: 28rpx;
		}
	}
}
</style>
