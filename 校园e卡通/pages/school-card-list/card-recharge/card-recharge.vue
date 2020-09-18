<template>
	<view class="top">
		<view class="top-banner">
			<view class="balance">微信支付</view>
		</view>
		<view class="white"></view>

		<view class="center">
			<view class="content">
				<view class="banner">充值金额(元)</view>
			</view>
			<view class="amount">
				<text class="text">￥</text>
				<text class="text">{{price}}</text>
			</view>
			<view class="price">
				<view class="price-number" :class="{'active': isChange == index}" v-for="(item, index) in list" :key="index" @click="click(index,item)">
					{{item}}元
				</view>
			</view>

			<view class="botton">
				<view class="button" @click="submit()">提交</view>
			</view>

			<view class="popup" v-if="success">
				<view class="popup-window">
					<view class="popup_icon">
						<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/success.png" mode="aspectFill"></image>
					</view>
					<view class="popup_content">
						校园卡充值成功
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
						<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/error.png" mode="aspectFill"></image>
					</view>
					<view class="popup_content">
						电子钱包/银行卡余额不足，充值失败
					</view>
					<view class="popup_btn">
						<view class="popup_btn_close" @click="fail=false">取消</view>
						<view class="popup_btn_ok" @click="fail=false">确定</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				price: '',
				isChange: "-1",
				list: ["50", "100", "150", "200"],
				success: false,
				fail: true,
				isactive: '0',
			}
		},
		methods: {
			click(index, item) {
				if (index != this.isChange) {
					this.isChange = index;
					this.price = item;
				} else {
					this.isChange = -1;
				}
			},
	
			submit() {
				this.success = true;
			}
		}
	}
</script>

<style lang="less" scoped>
	.top {
		width: 100%;
		height: 100vh;
		font-family: PingFang-SC-Medium;
		letter-spacing: 1rpx;
		color: rgb(51, 51, 51);

		.top-banner {
			width: 100%;
			height: 50rpx;

			.balance {
				margin-left: 30rpx;
				font-size: 28rpx;
				line-height: 42rpx;
			}
		}

		.white {
			width: 100%;
			height: 15rpx;
			background-color: #f8f8f8;
		}

		.center {
			width: 100%;

			.content {
				width: 706rpx;
				margin: 22rpx auto;

				.banner {
					font-size: 32rpx;
					margin-left: 8rpx;
					line-height: 32rpx;
				}
			}

			.amount {
				width: 706rpx;
				height: 80rpx;
				margin: 22rpx auto;
				border-bottom: 1rpx solid rgb(153, 153, 153);
				font-size: 56rpx;
				font-family: PingFang-SC-Bold;

				.text {
					display: block;
					float: left;
				}

				.inpt {
					display: block;
					float: right;
				}
			}

			.price {
				padding: 30rpx 30rpx;

				// text-align: center;
				.price-number {
					display: inline-block;
					width: 118rpx;
					height: 101rpx;
					border: 2rpx solid rgb(102, 102, 102);
					border-radius: 10rpx;
					font-size: 28rpx;
					color: rgb(51, 51, 51);
					text-align: center;
					line-height: 100rpx;
				}

				.price-number:nth-child(1),
				.price-number:nth-child(2),
				.price-number:nth-child(3) {
					margin-right: 72rpx;
				}

				.active {
					border: 2rpx solid rgb(102, 102, 102);
					color: rgb(255, 255, 255);
					background-color: rgb(40, 111, 201);
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
	}
</style>
