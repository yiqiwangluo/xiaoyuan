<template>
	<!-- 此组件用于电子钱包详情页的列表卡片渲染 -->
	<view class="page_box" @click="toOtherPage">
		<!-- icon图标 -->
		<image :src="icon" class="icon_image" mode="aspectFit" />
		<!-- 标题 -->
		<text>{{ title }}</text>
		<!-- 右箭头 -->
		<image v-if="!money_quota" src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_list_images/left_arrow.png" class="right_arrow" />
		<!-- 余额（和右箭头二选一） -->
		<text v-else class="quota_text">￥{{ money_quota }}</text>
	</view>
</template>

<script>
export default {
	props: {
		// icon图标地址
		icon: {
			require: true,
			type: String
		},
		// 卡片标题
		title: {
			require: true,
			type: String
		},
		// 卡片跳转地址
		url: {
			require: true,
			type: String
		},
		money_quota: {
			type: String
		}
	},
	methods: {
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
// 页面盒子
.page_box {
	height: 113rpx;
	display: flex;
	align-items: center;
	padding-left: 10rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid rgb(240, 240, 240);
	// icon图标
	.icon_image {
		width: 100rpx;
		height: 40rpx;
	}
	// 标题
	text {
		margin-left: 20rpx;
	}
	// 右箭头图片
	.right_arrow {
		width: 40rpx;
		height: 36rpx;
		margin-left: auto;
		margin-right: 29rpx;
		transform: rotate(180deg);
	}
	// 余额
	.quota_text {
		margin-left: auto;
		margin-right: 26rpx;
		color: rgb(102, 102, 102);
		font-size: 28rpx;
	}
}
</style>
