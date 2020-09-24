<template>
	<!-- 此组件为通用蓝色按钮组件 -->
	<button class="btn">{{ title }}</button>
</template>

<script>
export default {
	props: {
		// 按钮文字
		title: {
			require: true,
			type: String
		}
	}
};
</script>

<style lang="less" scoped>
// 按钮
.btn {
	width: 706rpx;
	height: 80rpx;
	font-size: 32rpx;
	line-height: 80rpx;
	border-radius: 24rpx;
	background-color: rgb(40, 111, 201);
	color: #ffffff;
	margin-top: 41rpx;
}
// 点击按钮时的反馈，增加按钮30%的灰度
.btn:active {
	filter: grayscale(30%);
}
</style>
