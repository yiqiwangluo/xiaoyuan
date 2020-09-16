<template>
	<view>
		<image class="bgSet" src="../../static/img/online/online.png"></image>
		<view class="title">
			在线缴费
			<view class="border"></view>
		</view>
		<view class="content" :class="{top1:top}">
			<view class="text">（使用说明）</view>
			<view class="text">缴费请点击上方</view>
			<view class="text">的“在线缴费”按钮</view>
			<view class="text">首次进入客服咨询页面</view>
			<view class="text">请发送任意文字内容给客服</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top:''
			}
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				/* var _this=this; */
				wx.getSystemInfo({
					 success: function(res) { 
						if (res.model.search('iPhone X') != -1){
						   this.top="20%";
						}
					 }
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.bgSet{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
.title{
	margin: 216rpx 206rpx 0 223rpx;
	text-align: center;
	color: #fff;
	font-size: 80rpx;
	font-family: PingFang-SC-Bold;
	.border{
		margin: 0 auto;
		margin-top: -3rpx;
		height: 8rpx;
		background-color: #fff;
	}
}
.content{
	.text{
		text-align: center;
		color: #fff;
		font-size: 26rpx;
		font-family: PingFang-SC-Medium;
	}
}
@media (max-height:736px) {
	.content{
		margin-top: 8%;
	}
}
@media (min-height:737px) {
	.content{
		margin-top: 20%;
	}
}
.top1{
	margin-top: 23%;
}
</style>
