<template>
	<view class="top">
		<view class="white"></view>
		<view class="content">
			<view class="old-password">
				<view class="left">
					<text class="old_label">原密码</text>
				</view>
				<view class="right">
					<input class="password" type="text" value="" placeholder="原始密码中X用O代替" />
				</view>
			</view>
			<view class="old-password">
				<view class="left">
					<text class="old_label">新密码</text>
				</view>
				<view class="right">
					<input class="password" type="text" value="" placeholder="填写6位新查询密码" />
				</view>
			</view>
			<view class="old-password">
				<view class="left">
					<text class="old_label">确认密码</text>
				</view>
				<view class="right">
					<input class="password" type="text" value="" placeholder="确认新查询密码" />
				</view>
			</view>
		</view>

		<view class="botton">
			<view class="button" @click="togglePopup(type)">提交</view>
		</view>
		

	</view>
</template>



<script>

	export default {
		data() {
			return {
				
			};
		},
		methods: {
			togglePopup(type){
				if(type===1){
					uni.showModal({
						title:'提示',
						content:'修改查询密码成功',
						success:function(res){
							if(res.confirm){
								console.log('用户点击确定 ')
							}
							else if(res.cancel){
								console.log('用户点击取消 ')
							}
						}
					})
				}
				else{
					uni.showModal({
						title:'提示',
						content:'修改失败，信息不全/错误',
						success:function(res){
							if(res.confirm){
								console.log('用户点击确定 ')
							}
							else if(res.cancel){
								console.log('用户点击取消 ')
							}
						}
					})
				}
		
		},
	},
	}
</script>

<style lang="less" scoped>
	.top {
		width: 100%;
		min-height: 100vh;
		background-color: #f8f8f8;
		font-size: 32rpx;
		font-family: PingFang-SC-Medium;
		letter-spacing: 1rpx;

		.white {
			width: 100%;
			height: 15rpx;
			background-color: #f8f8f8;
		}

		.content {
			width: 100%;
			height: 276rpx;
			background-color: rgb(255, 255, 255);

			.old-password {
				width: 100%;
				height: 92rpx;
				border-bottom: 1rpx solid rgb(153, 153, 153);

				.left {
					width: 35%;
					float: left;

					.old_label {
						margin-left: 30rpx;
						margin-top: 31rpx;
						display: block;
					}
				}

				.right {
					width: 60%;
					float: right;

					.password {
						margin-top: 20rpx;
						color: rgb(153, 153, 153);
					}
				}

			}
		}

		.botton {
			margin-top: 44rpx;

			.button {
				width: 706rpx;
				height: 80rpx;
				border-radius: 24rpx 24rpx 24rpx 24rpx;
				margin: 24rpx auto;
				color: rgb(255, 255, 255);
				line-height: 75rpx;
				letter-spacing: 1rpx;
				background-color: rgb(40, 111, 201);
				text-align: center;
			}
		}

	}
</style>
