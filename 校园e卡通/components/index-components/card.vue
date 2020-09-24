<!--
 * @Author: LF
 * @Description: 此组件用于首页的大部分外层盒子
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:05:22
-->
<template>
	<view class="card_box" :style="style_list"><slot></slot></view>
</template>

<script>
export default {
	props: {
		// 样式字符串
		style_list: {
			type: String
		}
	}
};
</script>

<style lang="less" scoped>
.card_box {
	overflow: hidden;
	border-radius: 24rpx;
	border: 1rpx solid rgba(153, 153, 153, 0.5);
	box-shadow: 0, 0, 21px, rgba(0, 0, 0, 0.05);
}
</style>
