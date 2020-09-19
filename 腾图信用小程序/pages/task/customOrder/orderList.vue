<template>
	<view>
		<view v-if="orderList.length==0" class="no_list">
			<image src="../../../static/img/task/no.png" mode="aspectFill"></image>
			<view class="no_list_text">无相关信息</view>
		</view>
		<view v-else>
			<view class="order_box">
				<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
				<view class="navigator_box" @click="checkOrder"></view>
				<view class="order_box_top">
					<view class="order_name">信用卡逾期</view>
					<view class="order_status">待付款</view>
				</view>
				<view class="order_box_bottom">
					<view class="type_num">
						<view class="order_num">逾期次数：5次</view>
					</view>
					<view class="limit_time">
						<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
						<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
					</view>
				</view>
			</view>
			<view class="order_box">
				<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
				<view class="navigator_box" @click="checkOrder"></view>
				<view class="order_box_top">
					<view class="order_name">车贷逾期</view>
					<view class="order_status">待付款</view>
				</view>
				<view class="order_box_bottom">
					<view class="type_num">
						<view class="order_num">逾期次数：1次</view>
					</view>
					<view class="limit_time">
						<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
						<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
					</view>
				</view>
			</view>
		</view>
		<view class="order_add">
			<image @click="add" src="../../../static/img/task/add.png" mode="aspectFill"></image>
		</view> 
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				orderList:[1]
			}
		},
		components: {uniIcons},
		onShow() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.navbarName
			});
		},
		methods: {
			add(){
				uni.navigateTo({
					url: '/pages/task/customOrder/addOrder'
				});
			},
			checkOrder(){
				uni.navigateTo({
					url: '/pages/task/customOrder/ordersDetail'
				});
			}
		}
	}
</script>

<style scoped lang="less">
.no_list{
	margin-top: 50upx;
	text-align: center;
	image{
		width: 40px;
		height: 40px;
	}
	.no_list_text{
		font-size: 30upx;
		color: #7e7e7e;
	}
}
.order_box{
	width: 98%;
	height: 330upx;
	margin: 0 auto;
	position: relative;
	margin-top: -30upx;
	image{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -19091;
	}
	.navigator_box{
		position: absolute;
		margin: 0 auto;
		top: 25upx;
		left: 0;
		right: 0;
		width: 90%;
		height: 270upx;
		z-index: 10001;
		background-color: transparent;
	}
	.order_box_top{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		.order_name{
			display: inline-block;
			width: 250upx;
			position: absolute;
			top: 60upx;
			left: 60upx;
			font-size: 32upx;
			color: #222222;
		}
		.order_status{
			display: inline-block;
			width: 100upx;
			position: absolute;
			top: 60upx;
			right: 28upx;
			font-size: 28upx;
			color: #fff;
		}
	}
	.order_box_bottom{
		position: absolute;
		top: 130upx;
		left: 60upx;
		font-size: 28upx;
		line-height: 38upx;
		color: #303133;
		.type_num{
			line-height: 70upx;
			.order_num{
				display: inline-block;
			}
		}
	}
}
.order_box:first-child{
	margin-top: 5upx;
}
.order_add{
	padding-top: 50upx;
	margin: 0 auto;
	text-align: center;
	image{
		width: 30px;
		height: 30px;
	}
}
</style>
