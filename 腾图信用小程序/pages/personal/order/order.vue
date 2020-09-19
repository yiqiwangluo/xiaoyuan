<template>
	<view>
		<view class="content_title">
			<view class="title1" @click="getInfo(0)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==0}">全部</view>
				<view class="title_point" v-if="infoState==0"></view>
			</view>
			<view class="title1" @click="getInfo(1)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==1}">待评估</view>
				<view class="title_point" v-if="infoState==1"></view>
			</view>
			<view class="title1" @click="getInfo(2)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==2}">待付款</view>
				<view class="title_point" v-if="infoState==2"></view>
			</view>
			<view class="title1" @click="getInfo(3)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==3}">进行中</view>
				<view class="title_point" v-if="infoState==3"></view>
			</view>
			<view class="title1" @click="getInfo(4)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==4}">已完成</view>
				<view class="title_point" v-if="infoState==4"></view>
			</view>
		</view>
		
		<view class="page-section">
			<view class="page-section-spacing">
				<swiper @change="swiperchange" :current="infoState" @scroll="scroll" @scrolltoupper="upper" class="swiper"
				 indicator-active-color="#FFFFFF">
					<swiper-item>
						<view class="gb_image" v-if="newCityList.length==0">
							<!-- <image src="/static/images/dynamic2.0/new1/bg5.png"></image>
							<view>无订单</view> -->
						</view>
						<view v-else>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">待评估</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：房贷逾期</view>
											<view class="order_num">逾期次数：2次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">进行中</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：房贷逾期</view>
											<view class="order_num">逾期次数：2次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</swiper-item>
		
					<swiper-item>
						<view class="gb_image" v-if="followListList.length==0">
							<!-- <image src="/static/images/dynamic2.0/new1/bg5.png"></image>
							<view>无待评估订单</view> -->
						</view>
						<view v-else>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">待评估</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：房贷逾期</view>
											<view class="order_num">逾期次数：2次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</swiper-item>
		
					<swiper-item>
						<view class="gb_image" v-if="newNearbyList.length==0">
							<!-- <image src="/static/images/share/shareIcon/bg.png"></image>
							<view>无待付款订单</view> -->
						</view>
						<view v-else>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">待付款</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：信用卡逾期</view>
											<view class="order_num">逾期次数：2次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="gb_image" v-if="newNearbyList.length==0">
							<!-- <image src="/static/images/share/shareIcon/bg.png"></image>
							<view>无进行中订单</view> -->
						</view>
						<view v-else>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator hover-class="none" class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">进行中</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：房贷逾期</view>
											<view class="order_num">逾期次数：2次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="gb_image" v-if="newNearbyList.length==0">
							<!-- <image src="/static/images/share/shareIcon/bg.png"></image>
							<view>无进行中订单</view> -->
						</view>
						<view v-else>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="order_box">
									<image src="../../../static/img/personal/bg2.png" mode="aspectFill"></image>
									<navigator class="navigator_box" url="/pages/personal/order/orderDetail"></navigator>
									<view class="order_box_top">
										<view class="order_name">李国健</view>
										<view class="order_status">已完成</view>
									</view>
									<view class="order_box_bottom">
										<view class="type_num">
											<view class="order_type">业务类型：车贷逾期</view>
											<view class="order_num">逾期次数：3次</view>
										</view>
										<view class="limit_time">
											<view class="limit_time_box">逾期时间: 2019年02月22日 17:05:42 </view>
											<view class="limit_time_box">订单时间: 2020年08月10日 07:55:09 </view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoState: 2, //滑动位置
				index:2,
			}
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				this.infoState = getApp().globalData.infoState;
				this.index = getApp().globalData.infoState;
			},
			getInfo(infoState) {
				this.infoState = infoState;
				 if (this.infoState == 0) {
					this.index = 0;
				 } else if (this.infoState == 1) {
					this.index = 1;
				 } else if (this.infoState == 2) {
					this.index = 2; 
				 } else if (this.infoState == 3) {
					this.index = 3; 
				 }	else if (this.infoState == 4) {
					this.index = 4; 
				 }	
			},
			swiperchange(e){
				this.infoState = e.target.current || e.detail.current;
				this.index=e.target.current || e.detail.current;
				if (this.infoState == 0) {
					this.index=0;
				} else if (this.infoState == 1) {
					this.index=1;
				} else if (this.infoState == 2) {
					this.index=2; 
				} else if (this.infoState == 3) {	
					this.index=3; 
				} else if (this.infoState == 4) {	
					this.index=4; 
				}	
			},
		}
	}
</script>

<style lang="less">
	
	//滑动信息
	.content_title {
		width: 100%;
		position: fixed;
		display: inline-flex;
		top: var(--status-bar-height);
		overflow: hidden;
		z-index: 100;
		background-color: #f6f6f6;
		top: 0;
		display: table;
		padding: 35upx 0 42upx 0;
		.title1 {
			width: 20%;
			text-align: center;
			float: left;
			.title_name_point {
				font-size: 34upx;
				
				font-weight: bold;
				color: #9db0f6;
				line-height: 30upx;
			}

			.title_name {
				font-size: 32upx;
				font-family: PingFang SC;
				color: rgba(6, 8, 11, 1);
				line-height: 30upx;
			}

			.title_point {
				position: absolute;
				width: 15%;
				height: 8upx;
				background: #6486f6;
				border-radius: 2upx;
				margin-top: 25upx;
				margin-left: 20upx;
				border-radius: 2px;
			}
		}
	}

	//左右滑动
	.swiper {
		background-color: #f6f6f6;
		height: 1434upx;

		swiper-item {
			padding-top: 110upx;
			scroll-view{
				height: 1330rpx;
				.order_box{
					width: 98%;
					height: 330upx;
					margin: 0 auto;
					position: relative;
					margin-top: -30upx;
					image{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						z-index: -19091;
					}
					.navigator_box{
						position: absolute;
						margin: 0 auto;
						top: 25upx;
						left: 0;
						right: 0;
						z-index: 10001;
						width: 90%;
						height: 270upx;
						background-color: transparent;
					}
					.order_box_top{
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						.order_name{
							display: inline-block;
							width: 250upx;
							position: absolute;
							top: 60upx;
							left: 60upx;
							font-size: 32upx;
							color: #222222;
						}
						.order_status{
							display: inline-block;
							width: 100upx;
							position: absolute;
							top: 60upx;
							right: 28upx;
							font-size: 28upx;
							color: #fff;
						}
					}
					.order_box_bottom{
						position: absolute;
						top: 130upx;
						left: 60upx;
						font-size: 28upx;
						line-height: 38upx;
						color: #303133;
						.type_num{
							line-height: 70upx;
							.order_type{
								display: inline-block;
							}
							.order_num{
								margin-left: 40upx;
								display: inline-block;
							}
						}
					}
				}
			}	
			
				
		}
	}

</style>
