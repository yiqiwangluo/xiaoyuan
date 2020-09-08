<template>
	<view class="school_list_box">
		<!-- 顶部地区选择及学校搜索盒子 -->
		<view class="topNav row_center">
			<!-- 地区选择 -->
			<view class="choose_area row_center" @click="show_prompt=true">
				<view class="area">{{ area }}</view>
				<image src="../../../static/images/school_list_images/left_arrow.png" class="left_arrow_image"></image>
			</view>
			<!-- 搜索框 -->
			<view class="search_box row_center">
				<image src="../../../static/images/school_list_images/magnifying_glass.png" class="search_image"></image>
				<text>搜索</text>
			</view>
		</view>
		<!-- 学校列表盒子 -->
		<view class="school_list">
			<school-card
				v-for="(item, index) in school_list"
				:key="index"
				:logo="item.logo"
				:name="item.name"
				:address="item.address"
				:distance="item.distance"
				@click.native="choose_school(item)"
			/>
		</view>
		<!-- 无更多消息 -->
		<view class="no_more_msg row_center">
			<view class="line"></view>
			<text>无更多消息</text>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
// 引入学校卡片组件
import schoolCard from '../../../components/school_list-components/school_card.vue';
export default {
	data() {
		return {
			// 地区
			area: '梅州市',
			/* 
				学校列表
					logo: 学校图片
					name: 学校名称
					address: 学校地址
					distance: 学校离自己的距离
			*/
			school_list: [
				{
					logo: 'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
					name: '梅州中学',
					address: '广东省梅州市梅州大道9号',
					distance: '5.6'
				},
				{
					logo: 'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
					name: '梅州中学',
					address: '广东省梅州市梅州大道9号',
					distance: '5.6'
				},
				{
					logo: 'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5b9546e7b5fda81cb39db3d3d?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
					name: '梅州中学',
					address: '广东省梅州市梅州大道9号',
					distance: '5.6'
				}
			]
		};
	},
	components: {
		// 注册学校卡片组件
		schoolCard
	},
	methods: {
		// 选择学校
		async choose_school(data) {
			// 弹框确认用户选择
			let res = await uni.showModal({
				title: '提醒',
				content: `请确认是否选择: ${data.name}`
			});
			// 如果确认选择，则跳转到身份验证页
			if (res[0] === null && res[1].confirm === true) {
				uni.navigateTo({
					url: `./authentication?school=${encodeURIComponent(JSON.stringify(data))}`
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
// 横向排列并主轴居中
.row_center {
	display: flex;
	align-items: center;
}
// 学校列表盒子
.school_list_box {
	min-height: 100vh;
	background-color: #f8f8f8;
}
// 顶部地区选择及学校搜索盒子
.topNav {
	width: 750rpx;
	height: 88rpx;
	padding-left: 32rpx;
	background-color: #ffffff;
	// 地区选择
	.choose_area {
		// 地区文字
		.area {
			font-size: 30rpx;
		}
		// 左箭头图片
		.left_arrow_image {
			width: 25rpx;
			height: 25rpx;
			transform: rotate(-90deg);
			margin-left: 12rpx;
		}
	}
	// 搜索框
	.search_box {
		width: 496rpx;
		height: 55rpx;
		background-color: #f3f4f6;
		border-radius: 24rpx;
		margin-left: 18rpx;
		// 放大镜图片
		.search_image {
			width: 26rpx;
			height: 26rpx;
			margin-left: 19rpx;
		}
		text {
			color: #666666;
			font-size: 28rpx;
			margin-left: 16rpx;
		}
	}
}
// 学校列表
.school_list {
	margin-top: 8rpx;
}
// 无更多消息
.no_more_msg {
	width: 485rpx;
	height: 26rpx;
	margin: 37rpx auto;
	justify-content: center;
	// 横线
	.line {
		width: 160rpx;
		height: 2rpx;
		background-color: #999999;
	}
	// 文字
	text {
		color: #999999;
		margin: 0 15rpx;
		font-size: 28rpx;
	}
}
</style>
