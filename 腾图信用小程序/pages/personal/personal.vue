<template>
	<view class="container">
		<image class="bg" src="../../static/img/personal/bg.jpg"></image>
<!-- 		<view class="navBarTitle">个人中心</view> -->
		<view class="info">
			<view class="info_box">
				<view class="info_box_position">
					<image class="touxiang" mode="aspectFill" src="../../static/img/personal/touxiang.png"></image>
					<view class="name">夕阳红</view>
				</view>
			</view>
			<view class="list1">
				<view class="list1_top">
					<view class="list1_top_left">
						我的订单
					</view>
					<view @click="state(0)" class="list1_top_right">
						全部订单 >
					</view>
				</view>
				<view @click="state(1)" class="list-item">
					<image class="img1" src="../../static/img/personal/nav1.png" mode="aspectFill"></image>
					<view>待评估</view>
				</view>
				<view @click="state(2)" class="list-item">
					<image src="../../static/img/personal/nav2.png" mode="aspectFill"></image>
					<view>待付款</view>
				</view>
				<view @click="state(3)" class="list-item">
					<image src="../../static/img/personal/nav3.png" mode="aspectFill"></image>
					<view>进行中</view>
				</view>
				<view @click="state(4)" class="list-item">
					<image src="../../static/img/personal/nav4.png" mode="aspectFill"></image>
					<view>已完成</view>
				</view>
			</view>
			<view class="list2">
				<view class="list2_top">
					<view class="list2_top_left">
						我的服务
					</view>
				</view>
				<navigator url="/pages/personal/edit/edit" hover-class="none" class="list-item">
					<image class="img1" src="../../static/img/personal/item1.png" mode="aspectFill"></image>
					<view>修改资料</view>
				</navigator>
				<navigator url="/pages/personal/collect/collect" hover-class="none" class="list-item">
					<image src="../../static/img/personal/item2.png" mode="aspectFill"></image>
					<view>我的收藏</view>
				</navigator>
				<navigator url="/pages/userIndex/wallet/wallet" hover-class="none" class="list-item">
					<image src="../../static/img/personal/item3.png" mode="aspectFill"></image>
					<view>联系我们</view>
				</navigator>
				<navigator url="/pages/userIndex/set/set" hover-class="none" class="list-item">
					<image src="../../static/img/personal/item4.png" mode="aspectFill"></image>
					<view>在线客服</view>
				</navigator>
				<navigator url="/pages/personal/complain/complain" hover-class="none" class="list-item">
					<image src="../../static/img/personal/item5.png" mode="aspectFill"></image>
					<view>投诉</view>
				</navigator>
				<navigator url="/pages/personal/aboutUs/aboutUs" hover-class="none" class="list-item">
					<image src="../../static/img/personal/item6.png" mode="aspectFill"></image>
					<view>关于我们</view>
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			state(num){
				if(num == 0){
					getApp().globalData.infoState = '0'
					uni.navigateTo({
						url: '/pages/personal/order/order'
					});
				} else if(num == 1){
					getApp().globalData.infoState = '1'
					uni.navigateTo({
						url: '/pages/personal/order/order'
					});
				} else if(num == 2){
					getApp().globalData.infoState = '2'
					uni.navigateTo({
						url: '/pages/personal/order/order'
					});
				} else if(num == 3){
					getApp().globalData.infoState = '3'
					uni.navigateTo({
						url: '/pages/personal/order/order'
					});
				} else if(num == 4){
					getApp().globalData.infoState = '4'
					uni.navigateTo({
						url: '/pages/personal/order/order'
					});
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.container{
		margin: 0;
		padding: 0;
		position: relative;
	}
	.bg{
		position: absolute;
		top: 0;
		display: inline-block;
		width: 100%;
		height: 400upx;
	}
/* 	.navBarTitle{
		position: absolute;
		top: 60upx;
		left: 0;
		display: inline-block;
		width: 100%;
		text-align: center;
		z-index: 1090;
	} */
	.info{
		padding-top: 40px;
		position: relative;
		.info_box{
			position: absolute;
			top: 150upx;
			height: 55px;
			margin-left: 2.5%;
			width: 100%;
			.info_box_position{
				position: relative;
				image.touxiang{
					width: 55px;
					height: 55px;
					margin-left: 2.5%;
					border-radius: 50%;
					display: inline-block;
				}
				.name{
					position: absolute;
					top: 33%;
					color: #fff;
					margin-left: 2.5%;
					height: 30px;
					font-size: 35upx;
					font-weight: 500;
					display: inline-block;
				}
			}
			
		}
		
		.list1{
			clear: both;
			width: 95%;
			height: 250upx;
			background-color: #FFFFFF;
			border-radius: 20px;
			box-shadow: 0 0 2px #CCCCCC;
			margin-top: 230upx;
			margin-left: 2.5%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.list1_top{
				border-bottom: 1px #f5f5f5 solid;
				width: 100%;
				height: 50upx;
				line-height: 50upx;
				padding: 0 35upx 10upx 35upx;
				.list1_top_left{
					float: left;
					font-size: 32upx;
					color: #536cf9;
				}
				.list1_top_right{
					float: right;
					font-size: 30upx;
					color: #959595;

				}
			}
			.list-item{
				width: 24%;
				text-align: center;
				image{
					width: 30px;
					height: 30px;
					border-radius: 0;
				}
				image.img1{
					width: 25px;
					height: 25px;
					margin-top: 5px;
					border-radius: 0;
				}
				view{
					font-size: 28upx;
					color: #666666;
				}
			}
		}
		.list2{
			clear: both;
			width: 95%;
			height: 420upx;
			background-color: #FFFFFF;
			border-radius: 20px;
			box-shadow: 0 0 2px #CCCCCC;
			margin-top: 80upx;
			margin-left: 2.5%;
			display: flex;
			flex-wrap: wrap;
			justify-content: left;
			align-items: center;
			.list2_top{
				border-bottom: 1px #f5f5f5 solid;
				width: 100%;
				height: 50upx;
				padding: 0 35upx 10upx 35upx;
				.list2_top_left{
					float: left;
					font-size: 32upx;
					color: #959595;
				}
			}
			.list-item{
				width: 25%;
				text-align: center;
				image{
					width: 27px;
					height: 27px;
					border-radius: 0;
				}
				image.img1{
					width: 22px;
					height: 22px;
					margin-top: 5px;
					border-radius: 0;
				}
				view{
					font-size: 28upx;
					color: #666666;
				}
			}
		}
	}
</style>
