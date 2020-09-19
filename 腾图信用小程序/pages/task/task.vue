<template>
	<view class="container">
		<view class="info">
			<view class="task_box">
				<view class="task_box_title">进入业务中心</view>
				<view class="task_box_input">
					<input type="text" v-model="number" placeholder="请输入您的工号" />
				</view>
			</view>
		</view>
		<view class="task_button" @click="to()">确定</view>
		<view class="task_button">取消</view>
		
		<view class="uni-mask" v-if="error">
			<view class="my-window">
				<view class="my_icon">
					<image src="../../static/img/task/error.png" mode="aspectFill"></image>
				</view>
				<view class="my_content">
					工号错误/不存在！
				</view>
				<view class="my_btn">
					<view class="check_button" @click="error=false">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				error:false
			}
		},
		methods: {
			to(){
				uni.navigateTo({
					url: '/pages/task/custom/customList'
				});
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
	.info{
		padding-top: 40px;
		position: relative;
		background-image: linear-gradient( to bottom, #6486f6 30%, #fff);	
		.task_box{
			width: 90%;
			height: 180upx;
			background-color: #FFFFFF;
			border-radius: 10px;
			box-shadow: 0 0 2px #CCCCCC;
			margin-left: 5%;
			padding: 55upx 0;
			margin-bottom: 60upx;
			.task_box_title{
				text-align: center;
				font-weight: 800;
			}
			.task_box_input{
				background-color: #f2f3f7;
				width: 88%;
				height: 70upx;
				line-height: 70upx;
				margin: 0 auto;
				margin-top: 60upx;
				color: #cdcdcd;
				border-radius: 5upx;
				padding-left: 20upx;
				input{
					height: 70upx;
					line-height: 70upx;
					font-size: 28upx;
					color: #9c9c9c;
				}
			}
				
		}
	}
	.task_button{
		width: 85%;
		margin: 0 auto;
		font-size: 30upx;
		border-radius: 20px;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		margin-top: 25upx;
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
			.my_icon{
				margin: 0 auto;
				text-align: center;
				image{
					display: inline-block;
					width: 30px;
					height: 30px;
					margin-top: 30upx;
				}
			}
			.my_content {
				padding: 0;
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
