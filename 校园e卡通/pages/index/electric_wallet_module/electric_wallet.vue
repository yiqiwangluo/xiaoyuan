<!--
 * @Author: LF
 * @Description: 电子钱包页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:10:37
-->
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
	components: {
		listCard
	},
	data() {
		return {
			// 钱包余额（修改此余额变量自动处理赋值给列表数据中的余额）
			money_quota: 50,
			// 模块列表渲染数据
			list_data: [
				{
					title: '余额',
					money_quota: '50.00',
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/balance.png'
				},
				{
					title: '流水查询',
					url: './transaction_detail',
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/transaction_detail.png'
				},
				{
					title: '充值',
					url: '../../school-card-list/card-recharge/card-recharge',
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge_money.png'
				},
				// {
				// 	title: '提现',
				// 	url: './get_deposit'
				// 	icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge.png',
				// },
				{
					title: '限额',
					url: './quota',
					icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/quota_setting.png'
				}
			]
		};
	},
	watch: {
		// 将钱包余额数据绑定
		money_quota(newValue) {
			// 获取数字余额，然后保留小数点后两位
			let res = newValue.toFixed(2, '0');
			// 赋值到页面上的余额
			this.list_data[0].money_quota = res;
		}
	}
};
</script>

<style lang="less" scoped>
.page_box {
	min-height: 100vh;
	background-color: #f9f9f9;
	& > view {
		padding-left: 34rpx;
	}
}
</style>
