<template>
	<view>
		<view class="content_list">
			<view class="title">姓名：</view>
			<input type="text" v-model="name" placeholder="请输入姓名" />
		</view>
		<view class="content_list">
			<view class="title">手机号码：</view>
			<input type="text" v-model="phone" placeholder="请输入手机号码" />
		</view>
		<view class="content_list">
			<view class="title">征信类型：</view>
			<view class="address"></view>
			<picker :range="types" @change="typeChange">
				<view class="address_picker">{{ types[typesIndex] }} </view>
			</picker>
		</view>
		<view class="content_list">
			<view class="title">居住地：</view>
			<view class="address"></view>
			<picker mode="region" @change="homeChange">
				<view class="address_picker">{{ home }} </view>
			</picker>
		</view>
		<view class="textarea_list">
			<view class="title">征信情况简述：</view>
			<textarea placeholder="请简要描述您的征信逾期情况" v-model="msg"></textarea>
		</view>
		
		<view class="tip">提交信息后会有客服在24小时内跟您联系</view>
		<view class="my_btn">
			<view class="my_btn_ok">提交</view>
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
				types:["请选择逾期类型","房贷逾期","信用卡逾期","网贷逾期","车贷逾期","其他"],
				typesIndex:0,
				home: '请选择地区',
				success:false
			}
		},
		methods: {
			typeChange : function(e){
				console.log(e)
				this.typesIndex = e.detail.value;
			}, 
			homeChange : function(e){
				this.home = e.detail.value;
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
	
.tip{
	color: #ff0000;
	font-size: 28upx;
	height: 100upx;
	padding: 30upx 0 0 30upx;
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
		flex: 3;
		color: #333333;	
		.red{
			color: #ff0000;
			font-size: 25upx;
		}
		
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
.textarea_list{
	padding: 0 30upx;
	.title{
		font-size: 30upx;
		height: 80upx;
		line-height: 80upx;
		font-family: PingFang SC;
		font-weight: bold;
		flex: 3;
		color: #333333;	
	}
	textarea {
			width: 100%;
			height: 320upx;
			background-color: #fbfbfb;
			padding: 10upx 0 0 0;
			font-size: 30upx;
			font-family: PingFang SC;
			font-weight: 400;
	}
}

.my_btn{
	width: 80%;
	margin: 0 auto;
	text-align: center;
	margin-top: 50upx;
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
