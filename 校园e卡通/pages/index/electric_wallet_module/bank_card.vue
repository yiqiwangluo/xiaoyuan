<template>
	<view>
		<bank-card />
	</view>
</template>

<script>
	// 引入银行卡-卡片组件
	import bankCard from '../../../components/electric_wallet-components/bank_card_list.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			// 注册银行卡-卡片组件
			bankCard
		}
	}
</script>

<style lang="less">

</style>
