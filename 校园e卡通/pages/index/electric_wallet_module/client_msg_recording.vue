<template>
	<view class="page_box">
		<!-- 顶部文字 -->
		<view class="top_text">身份信息</view>
		<!-- 信息区域 -->
		<view class="person_msg">
			<view class="item name">
				<text class="key">姓名</text>
				<text class="value">{{ person_msg.name }}</text>
			</view>
			<view class="item class">
				<text class="key">专业班级</text>
				<text class="value">{{ person_msg.class }}</text>
			</view>
			<view class="item id_num">
				<text class="key">身份证号码</text>
				<text class="value">{{ person_msg.id_num.substr(0, 4) }}****{{ person_msg.id_num.substr(-4, 4) }}</text>
			</view>
		</view>
		<!-- 提交按钮 -->
		<button class="btn" @click="btnClick">确定</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			person_msg: {
				// 姓名
				name: '陈思宇',
				// 专业班级
				class: '幼师5班',
				// 身份证号码
				id_num: '441402199909290418'
			}
		};
	},
	methods: {
		btnClick() {
			uni.showModal({
				title: '要素齐全，证件未过期，不需要补录'
			});
		}
	}
};
</script>

<style lang="less" scoped>
// 页面盒子
.page_box {
	// 顶部文字
	.top_text {
		height: 71rpx;
		line-height: 71rpx;
		padding-left: 28rpx;
		color: rgb(51, 51, 51);
		font-size: 32rpx;
		background-color: rgb(248, 248, 248);
		border: 1rpx solid rgb(153, 153, 153);
		border-left: none;
		border-right: none;
	}
	// 个人信息区域
	.person_msg {
		font-size: 32rpx;
		.item {
			height: 96rpx;
			padding-left: 21rpx;
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid rgb(248, 248, 248);
			.key {
				color: rgb(51, 51, 51);
			}
			.value {
				color: rgb(102, 102, 102);
				margin-left: 145rpx;
			}
		}
		.class > .value {
			margin-left: 80rpx;
		}
		.id_num > .value {
			margin-left: 47rpx;
		}
	}
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
}
</style>
