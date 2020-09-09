<template>
	<view class="top">
		<view class="white"></view>
		<view class="content">
			<view class="content-details">
				<view class="left">
					<text class="left-text">姓名</text>
				</view>
				<view class="right">
					<text class="right-text">{{name}}</text>
				</view>
			</view>
			<view class="content-details">
				<view class="left">
					<text class="left-text">卡号/学号</text>
				</view>
				<view class="right">
					<text class="right-text">{{cardName}}</text>
				</view>
			</view>
			<view class="content-details">
				<view class="left">
					<text class="left-text">当前状态</text>
				</view>
				<view class="right">
					<text class="right-text">{{status}}</text>
				</view>
			</view>
		</view>

		<view class="white"></view>


		<view class="old-password">
			<view class="left">
				<text class="old_label">密码</text>
			</view>
			<view class="right">
				<input class="password" type="text" value="" placeholder="请填写6位查询密码" />
			</view>
		</view>

		<view class="tip">
			<view class="tip-details">提醒:查询密码默认身份证后六位，X用0代替</view>
		</view>


		<view class="botton">
			<view class="button" @click="submit()">提交</view>
		</view>

		<view class="popup" v-if="success">
			<view class="popup-window">
				<view class="popup_icon">
					<image src="../../../static/images/school_card_images/success.png" mode="aspectFill"></image>
				</view>
				<view class="popup_content">
					卡挂失成功
				</view>
				<view class="popup_btn">
					<view class="popup_btn_close" @click="success=false">取消</view>
					<view class="popup_btn_ok" @click="success=false">确定</view>
				</view>
			</view>
		</view>
		<view class="popup" v-if="fail">
			<view class="popup-window">
				<view class="popup_icon">
					<image src="../../../static/images/school_card_images/error.png" mode="aspectFill"></image>
				</view>
				<view class="popup_content">
					卡挂失失败，信息不全/错误
				</view>
				<view class="popup_btn">
					<view class="popup_btn_close" @click="fail=false">取消</view>
					<view class="popup_btn_ok" @click="fail=false">确定</view>
				</view>
			</view>
		</view>

	</view>
</template>



<script>
	export default {
		data() {
			return {
				name: '陈设额',
				cardName: '185944647',
				status: '正常',
				success: false,
				fail: true,
			};
		},
		methods: {
			submit() {
				this.success = true;
			}

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

			.content-details {
				width: 100%;
				height: 92rpx;
				border-bottom: 1rpx solid rgb(153, 153, 153);
				opacity: 0.5;

				.left {
					float: left;

					.left-text {
						margin-left: 30rpx;
						margin-top: 31rpx;
						display: block;
					}
				}

				.right {
					float: right;

					.right-text {
						margin-top: 31rpx;
						margin-right: 30rpx;
						color: rgb(102, 102, 102);
						display: block;
					}
				}

			}
		}

		.old-password {
			width: 100%;
			height: 92rpx;
			background-color: rgb(255, 255, 255);

			.left {
				width: 15%;
				float: left;

				.old_label {
					margin-left: 30rpx;
					margin-top: 31rpx;
					display: block;
				}
			}

			.right {
				width: 80%;
				float: right;

				.password {
					margin-top: 20rpx;
					color: rgb(153, 153, 153);
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

		.tip {
			margin-top: 30rpx;
			.tip-details{
				margin-left: 30rpx;
				font-size: 26rpx;
				letter-spacing: 1rpx;
				color: rgb(153,153,153);
			}
		}

	}

	.popup {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 99;

		.popup-window {
			width: 80%;
			background: #FFFFFF;
			border-radius: 24rpx;
			margin-left: 10%;
			margin-top: 35%;

			.popup_icon {
				margin: 0 auto;
				text-align: center;

				image {
					display: inline-block;
					width: 64rpx;
					height: 64rpx;
					margin-top: 70rpx;
					margin-bottom: 30rpx;
				}
			}

			.popup_content {
				padding: 0;
				font-size: 32rpx;
				color: #333;
				text-align: center;
				margin-bottom: 46rpx;
			}

			.popup_btn {
				width: 100%;
				font-size: 32rpx;
				border-top: #EDF0F7 1rpx solid;
				text-align: center;
				display: table;

				.popup_btn_close {
					padding: 40rpx 0;
					width: 49%;
					color: #999999;
					line-height: 32rpx;
					border-right: #EDF0F7 1rpx solid;
					float: left;
				}

				.popup_btn_ok {
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
