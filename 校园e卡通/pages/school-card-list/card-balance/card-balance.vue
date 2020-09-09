<template>
	<view>
		<view class="card">
			<view class="card-center">
				<view class="centent">
					<text>校园卡余额(元)</text>
				</view>
				<view class="centent-number">
					<text>{{amout}}</text>
				</view>
			</view>
		</view>

		<view class="botton">
			<view class="button" @click="recharge()">充值</view>
		</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {
				amout: '800.00'
			};
		},
		methods: {
			recharge() {
				uni.navigateTo({
					url: '/pages/school-card-list/card-recharge/card-recharge',
				})
			}

		},
	}
</script>


<style lang="less" scoped>
	.card {
		width: 700rpx;
		height: 200rpx;
		background-color: rgb(45, 124, 224);
		/* 不支持线性的时候显示 */
		background-image: linear-gradient(to right, rgb(45, 124, 224), rgb(69, 163, 231));
		margin: 25rpx auto;
		border-radius: 10rpx 10rpx 10rpx 10rpx;

		.card-center {
			padding-top: 45rpx;

			.centent {
				// margin:25rpx auto;
				text-align: center;
				color: rgb(255, 255, 255);
				font-size: 28rpx;
				font-family: PingFang-SC-Medium;
			}

			.centent-number {
				// margin:25rpx auto;
				text-align: center;
				color: rgb(255, 255, 255);
				padding-top: 15rpx;
				font-family: ArialMT;
				font-weight: bold
			}
		}

	}

	.botton {
		width: 750rpx;
		height: 80rpx;
		// border-radius:24rpx 24rpx 24rpx 24rpx;
		background-color: rgb(40, 111, 201);
		color: rgb(255, 255, 255);

		.button {
			line-height: 75rpx;
			text-align: center;
		}
	}
</style>
