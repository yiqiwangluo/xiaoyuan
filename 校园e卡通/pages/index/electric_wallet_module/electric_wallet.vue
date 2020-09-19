<template>
	<!-- 页面盒子 -->
	<view class="page_box">
		<!-- 模块列表 -->
		<list-card v-for="(item, index) in list_data" :key="index" :icon="item.icon" :title="item.title" :money_quota="item.money_quota" :url="item.url" />
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
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/balance.png',
					title: '余额',
					url: '',
					money_quota: '50.00'
				},
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
}
</style>
