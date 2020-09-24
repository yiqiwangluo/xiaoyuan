<!--
 * @Author: LF
 * @Description: 交易明细页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:11:12
-->
<template>
	<view>
		<!-- 消费记录 -->
		<transaction-card
			consumption_type="消费"
			consumption_time="2020-07-02 15:48:15"
			consumption_money="12"
			discounts_money="0"
			consumption_id="1584987879845487487894"
			consumption_account="8484564684784878"
			merchant_name="梅州市职业技术学校"
		/>
		<transaction-card
			consumption_type="充值"
			consumption_time="2020-07-02 15:48:15"
			consumption_money="58"
			discounts_money="0"
			consumption_id="1584987879845487487894"
			consumption_account="8484564684784878"
			merchant_name="梅州市职业技术学校"
		/>
		<transaction-card
			consumption_type="缴费"
			consumption_time="2020-07-02 15:48:15"
			consumption_money="200"
			discounts_money="0"
			consumption_id="1584987879845487487894"
			consumption_account="8484564684784878"
			merchant_name="梅州市职业技术学校"
		/>
		<transaction-card
			consumption_type="房租"
			consumption_time="2020-07-02 15:48:15"
			consumption_money="1000"
			discounts_money="0"
			consumption_id="1584987879845487487894"
			consumption_account="8484564684784878"
			merchant_name="梅州市职业技术学校"
		/>
		<transaction-card
			consumption_type="水电"
			consumption_time="2020-07-02 15:48:15"
			consumption_money="400"
			discounts_money="0"
			consumption_id="1584987879845487487894"
			consumption_account="8484564684784878"
			merchant_name="梅州市职业技术学校"
		/>
	</view>
</template>

<script>
// 引入消费卡片组件
import transactionCard from '../../../components/electric_wallet-components/transaction_card.vue';
export default {
	data() {
		return {};
	},
	components: {
		transactionCard
	}
};
</script>

<style lang="less"></style>
