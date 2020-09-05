<template>
	<movable-area class="my_movable">
		<!-- 顶部卡片 -->
		<card style_list="width:706rpx;height:826rpx;margin:0 auto" class="topCard">
			<!-- 学校图片 -->
			<card style_list="width:668rpx;height:432rpx;margin:20rpx auto" class="topCard_head"><image src="../../static/images/school.png" class="school_image"></image></card>
			<!-- 电子钱包、身份码、付款码区域 -->
			<view class="topCard_body flexCenter">
				<!-- 左侧电子钱包区域 -->
				<view class="topCard_body_left">
					<card style_list="width:326rpx;height:328rpx;">
						<!-- 电子钱包卡片 -->
						<view class="wallet_box flexCenter">
							<!-- 电子钱包盒子 -->
							<view>
								<image src="../../static/images/钱包%20(1).png" class="wallet_image"></image>
								<view class="electronic_wallet_text">电子钱包</view>
								<!-- 钱包余额 -->
								<view>￥{{ money_left }}</view>
							</view>
						</view>
					</card>
				</view>
				<!-- 右侧身份码、付款码区域 -->
				<view class="topCard_body_right flexCenter">
					<!-- 身份码外层卡片 -->
					<card style_list="width:325rpx;height:157rpx">
						<!-- 身份码盒子 -->
						<view class="flexCenter idCard_box">
							<image src="../../static/images/身份信息.png" class="idCard_image"></image>
							<view>身份码</view>
						</view>
					</card>
					<!-- 付款码外层卡片 -->
					<card style_list="width:325rpx;height:157rpx">
						<!-- 付款码盒子 -->
						<view class="flexCenter qrCode_box">
							<image src="../../static/images/二维码.png" class="qrCode_image"></image>
							<view>付款码</view>
						</view>
					</card>
				</view>
			</view>
		</card>
		<!-- 学生会招新图片 -->
		<card style_list="width:706rpx;height:319rpx;margin:22rpx auto" class="studentUnion_enroll_box">
			<image src="../../static/images/学生会招新.png" class="studentUnion_enroll_image"></image>
		</card>
		<!-- 电子钱包区域 -->
		<module-card style_list="width:705rpx;height:506rpx;margin:22rpx auto" list_title="电子钱包" :list_data="electronic_wallet_list"></module-card>
		<!-- 校园卡账户区域 -->
		<module-card style_list="width:705rpx;height:504rpx;margin:22rpx auto" list_title="校园卡账户" :list_data="school_card_list"></module-card>
		<!-- 缴费服务区域 -->
		<module-card style_list="width:705rpx;height:283rpx;margin:22rpx auto" list_title="缴费服务" :list_data="pay_serve_list"></module-card>
		<!-- 其他服务区域 -->
		<module-card style_list="width:705rpx;height:283rpx;margin:22rpx auto" list_title="其他服务" :list_data="other_serve_list"></module-card>
		<!-- 客服 -->
		<movable-view class="service" direction="vertical" :y="y"><image src="../../static/images/客服.png" class="service_image"></image></movable-view>
	</movable-area>
</template>

<script>
// 引入卡片组件
import card from '../../components/index-components/card.vue';
// 引入模块卡片组件
import moduleCard from '../../components/index-components/module_list.vue';
export default {
	components: {
		// 注册卡片组件
		card,
		// 注册模块卡片组件
		moduleCard
	},
	data() {
		return {
			// 客服图标的y轴位置
			y: 0,
			// 电子钱包余额
			money_left: '0.00',
			// 电子钱包列表
			electronic_wallet_list: [
				{
					icon: '../../static/images/交易明细.png',
					title: '交易明细'
				},
				{
					icon: '../../static/images/充值.png',
					title: '钱包充值'
				},
				{
					icon: '../../static/images/提现%20(1).png',
					title: '提现'
				},
				{
					icon: '../../static/images/银行卡.png',
					title: '银行卡'
				},
				{
					icon: '../../static/images/限额设置.png',
					title: '限额'
				},
				{
					icon: '../../static/images/补录.png',
					title: '客户信息补录'
				}
			],
			// 校园卡账户列表
			school_card_list: [
				{
					icon: '../../static/images/余额.png',
					title: '卡片余额'
				},
				{
					icon: '../../static/images/提现流水查询.png',
					title: '流水查询'
				},
				{
					icon: '../../static/images/充值%20(1).png',
					title: '卡片充值'
				},
				{
					icon: '../../static/images/卡挂失.png',
					title: '卡片挂失'
				},
				{
					icon: '../../static/images/修改密码%20(1).png',
					title: '修改密码'
				}
			],
			// 缴费服务列表
			pay_serve_list: [
				{
					icon: '../../static/images/电费.png',
					title: '电费'
				},
				{
					icon: '../../static/images/水费.png',
					title: '水费'
				},
				{
					icon: '../../static/images/缴费.png',
					title: '缴费'
				}
			],
			// 其他服务列表
			other_serve_list: [
				{
					icon: '../../static/images/常见问题.png',
					title: '常见问题'
				},
				{
					icon: '../../static/images/隐私政策.png',
					title: '隐私政策'
				},
				{
					icon: '../../static/images/用户指南.png',
					title: '用户指南'
				}
			]
		};
	},
	// 页面滚动时，相应的改变客服图标的位置
	onPageScroll(e) {
		this.y = e.scrollTop + 20;
	}
};
</script>

<style lang="less" scoped>
// 公共垂直居中样式
.flexCenter {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
// 顶部卡片
.topCard {
	// 学校图片盒子
	.topCard_head {
		// 学校图片
		.school_image {
			width: 668rpx;
			height: 432rpx;
		}
	}
	// 电子钱包、身份码、付款码区域
	.topCard_body {
		height: 328rpx;
		// 钱包外层盒子
		.topCard_body_left {
			// 钱包盒子
			.wallet_box {
				width: 100%;
				height: 100%;
				text-align: center;
				// 我的钱包-文字
				.electronic_wallet_text {
					letter-spacing: 2rpx;
					margin-top: 23rpx;
				}
			}
			// 钱包图标
			.wallet_image {
				width: 100rpx;
				height: 100rpx;
			}
		}
		// 身份码和付款码外层盒子
		.topCard_body_right {
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
			// 身份码和付款码盒子
			.qrCode_box,
			.idCard_box {
				width: 100%;
				height: 100%;
				justify-content: center;
				& > view {
					margin-left: 24rpx;
				}
			}
			// 身份证图标
			.idCard_image {
				width: 74rpx;
				height: 61rpx;
			}
			// 二维码图标
			.qrCode_image {
				width: 63rpx;
				height: 62rpx;
			}
		}
	}
}
// 学生会招新盒子
.studentUnion_enroll_box {
	// 学生会招新图片
	.studentUnion_enroll_image {
		width: 706rpx;
		height: 319rpx;
	}
}
// 拖拽组件外层盒子
.my_movable {
	width: 100vw;
	height: auto;
}
// 客服盒子和客服图片
.service,
.service_image {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	z-index: 100;
	left: 628rpx;
	top: 26%;
}
</style>
