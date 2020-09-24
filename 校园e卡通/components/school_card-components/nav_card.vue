<!--
 * @Author: LF
 * @Description: 此组件是身份码和付款码页面的底部跳转盒子
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:06:36
-->
<template>
	<view class="payment_code_box" @click="toOtherPage" :style="marginTop ? '' : 'margin-top: 0'">
		<!-- 付款码图标 -->
		<image :src="icon" />
		<text class="explain_text">{{ title }}</text>
	</view>
</template>

<script>
export default {
	props: {
		// 文字
		title: {
			require: true,
			type: String
		},
		// 图标
		icon: {
			require: true,
			type: String
		},
		// 跳转路径
		url: {
			require: true,
			type: String
		},
		// 是否有向上的margin值
		marginTop: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		// 跳转到其他页面
		toOtherPage() {
			uni.navigateTo({
				url: this.url,
				fail(err) {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.payment_code_box {
	width: 575rpx;
	height: 81rpx;
	border-radius: 10rpx;
	background-color: rgba(255, 255, 255, 0.16);
	justify-content: flex-start;
	color: #ffffff;
	margin: 49rpx auto;
	margin-bottom: 0;
	display: flex;
	align-items: center;
	image {
		width: 45rpx;
		height: 45rpx;
		margin-left: 43rpx;
		margin-right: 36rpx;
	}
	.explain_text {
		font-size: 32rpx;
	}
}
</style>
