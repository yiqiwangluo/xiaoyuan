<template>
	<view>
		<view class="content_list">
			<view class="title">昵称：</view>
			<input type="text" v-model="name" placeholder="请输入姓名" />
		</view>
		<view class="content_list">
			<view class="title">身份证：</view>
			<input type="text" v-model="IDCard" placeholder="请输入身份证号码" />
		</view>
		<view class="content_list">
			<view class="title">手机号码：</view>
			<input type="text" v-model="phone" placeholder="请输入手机号码" />
		</view>
		<view class="content_list">
			<view class="title">验证码：</view>
			<input class="yanzheng" type="text" v-model="code" placeholder="请输入验证码" />
			<view @click="sendCode()" class="button_send">发送验证码</view>
		</view>
		<view class="content_list">
			<view class="title">工作城市：</view>
			<view class="address"></view>
			<picker mode="region" :range="years" @change="addressChange">
				<view class="address_picker">{{ address }} </view>
			</picker>
		</view>
		<view class="my_btn">
			<view class="my_btn_ok" @click="cancelWindow">提交</view>
			<view class="my_btn_close" @click="cancelWindow">取消</view>
		</view>
		
		<view class="uni-mask" v-if="success">
			<view class="my-window">
				<view class="my_content">
					信息提交成功！
				</view>
				<view class="my_btn">
					<view class="check_button" @click="success=false">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '请选择地区',
				success:false
			}
		},
		methods: {
			addressChange : function(e){
				console.log(e)
				this.address = e.detail.value;
			} 
		}
	}
</script>

<style lang="less" scoped>
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
		border-radius: 24upx;
		margin-left: 10%;
		margin-top: 35%;
		.my_content {
			padding: 60upx 0 0 0;
			font-size: 38upx;
			color: #212121;
			text-align: center;
		}
		.my_btn {
			width: 100%;
			font-size: 36upx;
			text-align: center;
			height: 100upx;
			.check_button{
				width: 180upx;
				margin: 0 auto;
				font-size: 30upx;
				border-radius: 20px;
				text-align: center;
				height: 60upx;
				line-height: 60upx;
				background-color: #6486f6;
				color: #fff;
				margin-top: 25upx;
			}
		}
	}
		
}
.content_list{
	height: 100upx;
	padding: 0 30upx;
	border-bottom: 1upx #f7f7f7 solid;
	display: flex;
	.title{
		font-size: 30upx;
		height: 100upx;
		line-height: 100upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(96, 96, 96, 1);
		flex: 3;
		color: #333333;		
	}
	input{
		flex: 9;
		font-size: 30upx;
		height: 100upx;
		line-height: 100upx;
		display: inline-block;
	}
	.yanzheng{
		flex: 5.5;
	}
	.button_send{
		margin-top: 23upx;
		flex: 3.5;
		width: 50upx;
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		border-radius: 15upx;
		background-color: #6486f6;
		color: #fff;
		font-size: 30upx;
	}
	.address_picker{
		font-size: 30upx;
		height: 100upx;
		line-height: 100upx;
		color: #333333;
	}
}
.my_btn{
	width: 80%;
	margin: 0 auto;
	text-align: center;
	margin-top: 60upx;
	.my_btn_ok{
		width: 100upx;
		padding: 10upx 20upx;
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		border-radius: 15upx;
		background-color: #6486f6;
		color: #fff;
		font-size: 32upx;
		display: inline-block;
		margin-right: 60upx;
	}
	.my_btn_close{
		width: 96upx;
		padding: 10upx 20upx;
		line-height: 56upx;
		height: 56upx;
		text-align: center;
		border-radius: 15upx;
		border: 1px #999999 solid;
		color: #999999;
		font-size: 32upx;
		display: inline-block;
	}
}
</style>
