<template>
	<view class="content">
	      <view class="top">
			  <view class="query">2020年7月</view>
			  <view class="select">筛选</view>
		  </view>
		  
		  <view class="details-list" v-for="item in detailsList">
			  <view class="detail-left">
				  <view class="using">{{item.using}}</view>
				  <view class="date">{{item.date}}</view>
			  </view>
			  <view class="detail-right">{{item.amount}}</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailsList:[
					{
						using:'餐费支出A585-66',
						date:'2020-07-02 15:48:15',
						amount:'￥12'
					},
					{
						using:'餐费支出A585-66',
						date:'2020-07-02 15:48:15',
						amount:'￥12'
					},
					{
						using:'餐费支出A585-66',
						date:'2020-07-02 15:48:15',
						amount:'￥12'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.content{
	font-family:PingFang-SC-Medium;
	.top{
		width:100%;
		height:42rpx;
		border-bottom:1rpx solid rgb(238,238,238);
		font-size:28rpx;
		.query{
			float:left;
			margin-left:20rpx;
			color:rgb(40,111,201);
		}
		.select{
			float:right;
			margin-right:20rpx;
			color:rgb(51,51,51);
		}
	}
	.details-list{
		width:100%;
		height:120rpx;
		border-bottom:1rpx solid rgb(238,238,238);
		.detail-left{
			float:left;
			margin-left:20rpx;
			margin-top:15rpx;
			.using{
				font-size:32rpx;
				color:rgb(51,51,51)
			}
			.date{
				margin-top:10rpx;
				font-size:24rpx;
				color:rgb(153,153,153);
			}
		}
		.detail-right{
			float:right;
			margin-right:20rpx;
			color:rgb(51,51,51);
			font-size:32rpx;
			margin-top:40rpx;
		}
	}
}

</style>
