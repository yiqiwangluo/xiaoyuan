<template>
	<!-- 此组件用于交易明细页面的列表渲染 -->
	<view class="page_box">
		<!-- 消费 -->
		<view class="consumption_box center">
			<text>{{ consumption_type }}</text>
			<text class="last_text">￥{{ consumption_money }}</text>
		</view>
		<!-- 订单详细信息盒子 -->
		<view class="consumption_detail_box" :style="{height:show_datail?'300rpx':'0rpx'}">
			<!-- 订单金额 -->
			<view class="consumption_money">
				<text>订单金额</text>
				<text class="last_text">{{ consumption_money }}</text>
			</view>
			<!-- 优惠金额 -->
			<view class="discounts_money">
				<text>优惠金额</text>
				<text class="last_text">{{ discounts_money }}</text>
			</view>
			<!-- 交易单号 -->
			<view class="consumption_id">
				<text>交易单号</text>
				<text class="last_text">{{ consumption_id }}</text>
			</view>
			<!-- 交易账号 -->
			<view class="consumption_account">
				<text>交易账号</text>
				<text class="last_text">{{ consumption_account }}</text>
			</view>
			<!-- 商户名称 -->
			<view class="merchant_name">
				<text>商户名称</text>
				<text class="last_text">{{ merchant_name }}</text>
			</view>
		</view>
		<!-- 交易时间及查看详情 -->
		<view class="consumption_time_detail center">
			<text class="time_text">{{ consumption_time }}</text>
			<view class="detail_flag center" @click="show_datail = !show_datail">
				<text class="last_text">{{ show_datail ? '收起' : '查看详情' }}</text>
				<image
					src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/electric_wallet_images/border-arrow.png"
					class="right_arrow"
					:style="show_datail ? 'transform: rotate(270deg)' : 'transform: rotate(90deg)'"
				/>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 是否显示订单详细信息
			show_datail: false
		};
	},
	props: {
		// 消费类型
		consumption_type: {
			require: true,
			type: String
		},
		// 消费时间
		consumption_time: {
			require: true,
			type: String
		},
		// 消费金额
		consumption_money: {
			require: true,
			type: Number
		},
		// 优惠金额
		discounts_money: {
			require: true,
			type: Number
		},
		// 交易单号
		consumption_id: {
			require: true,
			type: String
		},
		// 交易账户
		consumption_account: {
			require: true,
			type: String
		},
		// 商户名称
		merchant_name: {
			require: true,
			type: String
		}
	}
};
</script>

<style lang="less" scoped>
// 水平居中排列
.center {
	display: flex;
	align-items: center;
}
// 页面盒子
.page_box {
	min-height: 118rpx;
	padding-left: 29rpx;
	border-bottom: 2rpx solid rgb(238, 238, 238);
	padding-top: 10rpx;
	// 消费
	.consumption_box {
		font-size: 32rpx;
		color: rgb(51, 51, 51);
		.last_text {
			margin-left: auto;
			margin-right: 32rpx;
		}
	}
	// 交易详细信息盒子
	.consumption_detail_box {
		transition: all 0.5s;
		overflow: hidden;
		padding-left: 17rpx;
		& > view {
			display: flex;
			align-items: center;
			margin-top: 20rpx;
			.last_text {
				margin-left: 172rpx;
			}
		}
	}
	// 交易时间及查看详情
	.consumption_time_detail {
		margin-top: 18rpx;
		margin-bottom: 26rpx;
		// 时间-文字
		.time_text {
			font-size: 24rpx;
			color: rgb(153, 153, 153);
		}
		.detail_flag {
			margin-left: auto;
			margin-right: 30rpx;
			.last_text {
				margin-right: 8rpx;
				font-size: 24rpx;
				color: rgb(102, 102, 102);
			}
			// 右箭头
			.right_arrow {
				width: 30rpx;
				height: 30rpx;
				transition: all 0.5s;
			}
		}
	}
}
</style>
