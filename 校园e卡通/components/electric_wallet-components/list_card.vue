<template>
	<!-- 此组件用于电子钱包详情页的列表卡片渲染 -->
	<view class="page_box" @click="toOtherPage">
		<!-- icon图标 -->
		<image :src="icon" class="icon_image" />
		<!-- 标题 -->
		<text>{{title}}</text>
		<!-- 右箭头 -->
		<image src="../../static/images/school_list_images/left_arrow.png" class="right_arrow" />
	</view>
</template>

<script>
	export default {
		props:{
			// icon图标地址
			icon:{
				require:true,
				type:String
			},
			// 卡片标题
			title:{
				require:true,
				type:String
			},
			// 卡片跳转地址
			url:{
				require:true,
				type:String
			}
		},
		methods:{
			toOtherPage(){
				uni.navigateTo({
					url:this.url,
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	// 页面盒子
.page_box {
	height: 113rpx;
	display: flex;
	align-items: center;
	padding-left: 34rpx;
	background-color: #FFFFFF;
	border-bottom: 2rpx solid rgb(240,240,240);
	// icon图标
	.icon_image {
		width: 38rpx;
		height: 38rpx;
	}
	// 标题
	text {
		margin-left: 24rpx;
	}
	// 右箭头图片
	.right_arrow {
		width: 20rpx;
		height: 36rpx;
		margin-left: auto;
		margin-right: 29rpx;
		transform: rotate(180deg);
	}
}
</style>
