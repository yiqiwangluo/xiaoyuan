<template>
	<view>
		<view class="water_top">
			<view class="water_left">
				<view class="water_left_title">
					选择缴水费地址
				</view>
				<view class="water_left_content">
					<view class="title">校区：</view>
					<picker :range="campus" @change="campusChange">
						<view class="address_picker">{{campusIndex==null ? "请选择校区" :  campus[campusIndex] }} </view>
					</picker>
				</view>
				<view class="water_left_content">
					<view class="title">楼栋：</view>
					<picker :range="buildings" @change="buildingsChange">
						<view class="address_picker">{{buildingsIndex==null ? "请选择楼栋" :  buildings[buildingsIndex] }} </view>
					</picker>
				</view>
				<view class="water_left_content">
					<view class="title">楼层：</view>
					<picker :range="floors" @change="floorsChange">
						<view class="address_picker">{{floorsIndex==null ? "请选择楼层" :  floors[floorsIndex] }} </view>
					</picker>
				</view>
				<view class="water_left_content">
					<view class="title">房间：</view>
					<picker :range="rooms" @change="roomsChange">
						<view class="address_picker">{{roomsIndex==null ? "请选择房间" :  rooms[roomsIndex] }} </view>
					</picker>
				</view>
			</view>
		</view>
		<view class="water_middle">
			<view class="water_middle_left">
				缴费金额
			</view>
			<view class="water_middle_right">{{price}} 元</view>
		</view>
		<view class="water_bottom">
			<view class="price_item" :class="{'active': isChange == index}"  v-for="(item, index) in list" :key="index" @click="clickBtn(index,item)">
					{{item}}元
			</view>
		</view>
		<view class="water_button" @click="success=true">
			立即缴费
		</view>
		
		<view class="uni-mask" v-if="success">
			<view class="my-window">
				<view class="my_icon">
					<image src="../../static/images/waterElectricity/elec_success.png" mode="aspectFill"></image>
				</view>
				<view class="my_content">
					缴费成功
				</view>
				<view class="my_btn">
					<view class="my_btn_close" @click="success=false">取消</view>
					<view class="my_btn_ok" @click="success=false">确定</view>
				</view>
			</view>
		</view>
		<view class="uni-mask" v-if="fail">
			<view class="my-window">
				<view class="my_icon">
					<image src="../../static/images/waterElectricity/elec_fail.png" mode="aspectFill"></image>
				</view>
				<view class="my_content">
					缴费失败，钱包余额不足
				</view>
				<view class="my_btn">
					<view class="my_btn_close" @click="fail=false">取消</view>
					<view class="my_btn_ok" @click="fail=false">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:'',
				isChange:"-1",
				list: ["5","10","20","30","50","100"],
				success:false,
				fail:false,
				
				campus:["江南校区","本部"],
				campusIndex:null,
				buildings:["A栋","D栋","E栋"],
				buildingsIndex:null,
				floors:["1层","2层","3层"],
				floorsIndex:null,
				rooms:["101","102","103"],
				roomsIndex:null,
			}
		},
		methods: {
			clickBtn(index,item){
					if(index!=this.isChange){
						this.isChange = index;
						this.price = item;
					}else{
						this.isChange = -1;    
					}
			},
			campusChange : function(e){
				console.log(e)
				this.campusIndex = e.detail.value;
			}, 
			buildingsChange : function(e){
				console.log(e)
				this.buildingsIndex = e.detail.value;
			},
			floorsChange : function(e){
				console.log(e)
				this.floorsIndex = e.detail.value;
			},
			roomsChange : function(e){
				console.log(e)
				this.roomsIndex = e.detail.value;
			},
		}
	}
</script>

<style lang="less">
page{
	height: 321rpx;
	background-color: #f8f8f8;
}
.water_top{
	background-color: #edf9ff;
	display: flex;
	padding: 40rpx 36rpx 0 36rpx;
	height: 321rpx;
	.water_left{
		flex:12;
		.water_left_title{
			font-size: 32rpx;
			font-weight: 700;
			margin-bottom: 27rpx;
		}
		.water_left_content{
			font-size: 28rpx;
			margin-bottom: 20rpx;
			color: #666666;
			.title{
				width: 14%;
				float: left;
				display: inline-block;
			}
			.address_picker{
				width: 50%;
				text-align: left;
			}
		}
	}
}
.water_middle{
	padding: 0 36rpx;
	height: 90rpx;
	margin-top: 24rpx;
	line-height: 90rpx;
	font-size: 28rpx;
	color: #333333;
	display: flex;
	background-color: #fff;
	.water_middle_left{
		flex: 6;
		text-align: left;
		display: inline-block;
	}
	.water_middle_right{
		flex: 6;
		text-align: right;
		display: inline-block;
	}
}
.water_bottom{
	padding: 51rpx 36rpx;
	text-align: center;
	.price_item{
		display: inline-block;
		width:212rpx;
		height:63rpx;
		border:1rpx solid #999999;
		border-radius:10rpx;
		font-size:28rpx;
		color:#0570c9;
		text-align: center;
		line-height: 63rpx;
	}
	.price_item:nth-child(n+4){
		margin-top: 40rpx;
	}
	.price_item:nth-child(2),.price_item:nth-child(5){
		margin: 0 16rpx;
	}
	.active{
		border:1rpx solid #0570c9;
		color: #0570c9;
	}
}
.water_button{
	margin: 0 auto;
	width: 702rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 30rpx;
	text-align: center;
	background-color: #286fc9;
	color: #fff;
	border-radius: 24rpx;
}
.uni-mask {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 99;
		.my-window {
			width: 80%;
			background: #FFFFFF;
			border-radius: 24rpx;
			margin-left: 10%;
			margin-top: 35%;
			.my_icon{
				margin: 0 auto;
				text-align: center;
				image{
					display: inline-block;
					width: 64rpx;
					height: 64rpx;
					margin-top: 70rpx;
					margin-bottom: 30rpx;
				}
			}
			.my_content {
				padding: 0;
				font-size: 32rpx;
				color: #333;
				text-align: center;
				margin-bottom: 46rpx;
			}
			.my_btn {
				width: 100%;
				font-size: 32rpx;
				border-top: #EDF0F7 1rpx solid;
				text-align: center;
				display: table;
				.my_btn_close {
					padding: 40rpx 0;
					width: 49%;
					color: #999999;
					line-height: 32rpx;
					border-right: #EDF0F7 1rpx solid;
					float: left;
				}
				.my_btn_ok {
					padding: 40upx 0;
					width: 49%;
					color: #000;
					line-height: 32rpx;
					float: left;
				}
			}
		}			
}
</style>
