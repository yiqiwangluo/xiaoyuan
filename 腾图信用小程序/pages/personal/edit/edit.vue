<template>
	<view>
		<view class="edit_top">
			<view class="edit_item">
				<view class="title">昵称</view>
				<input type="text" v-model="name" placeholder="骑蜗牛看海" />
			</view>
			<view class="edit_item">
				<view class="title">性别</view>
				<picker :range="types" @change="typeChange">
					<view class="address_picker">{{ types[typesIndex] }} </view>
				</picker>
				<view class="errow">></view>
			</view>
			<view class="edit_item">
				<view class="title">出生年月</view>
				<picker mode="date" @change="timeChange">
					<view class="address_picker">{{ time }} </view>
				</picker>
				<view class="errow">></view>
			</view>
		</view>
		<view class="edit_bottom">
			<view class="edit_item">
				<view class="title">绑定手机</view>
				<view class="item_content">186*****23></view>
			</view>
			<view class="edit_item">
				<view class="title">绑定微信</view>
				<view class="item_content">红太阳</view>
			</view>
		</view>
		<view class="edit_button">确定修改</view>
		
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
				types:["设置","女","男"],
				typesIndex:0,
				time: '设置',
				success:true
			}
		},
		methods: {
			typeChange : function(e){
				console.log(e)
				this.typesIndex = e.detail.value;
			}, 
			timeChange : function(e){
				this.time = e.detail.value;
			} 
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
	}
	.edit_top{
		background-color: #fff;	
	}
	.edit_bottom{
		margin-top: 30upx;
		background-color: #fff;
	}
	.edit_item{
		height: 100upx;
		padding: 0 30upx;
		display: flex;
		background-color: #fff;
		color: #999999;
		.title{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			flex: 3;
			color: #282828;		
		}
		input{
			flex: 9;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			display: inline-block;
			text-align: right;
			color: #999999;
		}
		.item_content{
			flex: 9;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			display: inline-block;
			text-align: right;
		}
		.address_picker{
			flex: 8;
			display: inline-block;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			color: #999999;
		}
		.errow{
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			display: inline-block;

		}
	}
	.edit_button{
		width: 90%;
		margin: 0 auto;
		font-size: 30upx;
		border-radius: 15px;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		margin-top: 30upx;
		background-color: #6486f6;
		color: #fff;
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
</style>
