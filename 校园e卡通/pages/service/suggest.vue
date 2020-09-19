<template>
	<view>
		<view class="content_title">
			<view class="title1" @click="getInfo(0)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==0}">意见反馈</view>
				<view class="title_point" v-if="infoState==0"></view>
			</view>
			<view class="title1" @click="getInfo(1)">
				<view class="title_name" v-bind:class="{'title_name_point':infoState==1}">提交记录</view>
				<view class="title_point" v-if="infoState==1"></view>
			</view>
		</view>
		
		<view class="page-section">
			<view class="page-section-spacing">
				<swiper @change="swiperchange" :current="infoState" @scroll="scroll" @scrolltoupper="upper" class="swiper"
				 indicator-active-color="#FFFFFF">
					<swiper-item>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="suggest_top">
									<view class="suggest_title">
										<view class="suggest_title_left">问题描述</view>
										<view class="suggest_title_right">{{ conterNum }}/200</view>
									</view>
									<textarea  @input="descInput" class="ta" maxlength="200" placeholder="请输入您的投诉内容" v-model="textContent"/>
									<view class="img-group">
										<view class="active_img" v-for="(img,index) in imgs" :key="index">
											<image class="image" :src="img" @click="previewImage" mode="aspectFill" ></image>
										</view>
										<image class="photo" src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/photo.jpg" @click="chooseImg" v-if="imgs.length<6"></image>	
									</view>
								</view>
								<view class="suggest_button" @click="success=true">提交</view>
							</scroll-view>
					</swiper-item>
					<swiper-item>
							<scroll-view show-scrollbar='false'  scroll-y="true" class="shop-box">
								<view class="suggest_box">
									<view class="suggest_text">
										504的电表不会转了，504的电表不会转了504的电表不会转504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了。
									</view>
									<view class="img_group">
										<view class="active_img" v-for="(img1,index) in imgList" :key="index">
											<image class="image" :src="img1" mode="aspectFill" ></image>
										</view>
									</view>
									<view class="suggest_date_time">
										<text class="suggest_date">2020年08月01日</text>
										<text class="suggest_time">12:54:33</text>
									</view>
								</view>
								<view class="suggest_box">
									<view class="suggest_text">
										504的电表不会转了，504的电表不会转了504的电表不会转504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了。
									</view>
									<view class="img_group">
										<view class="active_img" v-for="(img1,index) in imgList" :key="index">
											<image class="image" :src="img1" mode="aspectFill" ></image>
										</view>
									</view>
									<view class="suggest_date_time">
										<text class="suggest_date">2020年08月01日</text>
										<text class="suggest_time">12:54:33</text>
									</view>
								</view>
								<view class="suggest_box">
									<view class="suggest_text">
										504的电表不会转了，504的电表不会转了504的电表不会转504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了。
									</view>
									<view class="img_group">
										<view class="active_img" v-for="(img1,index) in imgList" :key="index">
											<image class="image" :src="img1" mode="aspectFill" ></image>
										</view>
									</view>
									<view class="suggest_date_time">
										<text class="suggest_date">2020年08月01日</text>
										<text class="suggest_time">12:54:33</text>
									</view>
								</view>
								<view class="suggest_box">
									<view class="suggest_text">
										504的电表不会转了，504的电表不会转了504的电表不会转504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了504的电表不会转了。
									</view>
									<view class="img_group">
										<view class="active_img" v-for="(img1,index) in imgList" :key="index">
											<image class="image" :src="img1" mode="aspectFill" ></image>
										</view>
									</view>
									<view class="suggest_date_time">
										<text class="suggest_date">2020年08月01日</text>
										<text class="suggest_time">12:54:33</text>
									</view>
								</view>
							</scroll-view>
					</swiper-item>
				</swiper>
				
				<view class="uni-mask" v-if="success">
					<view class="my-window">
						<view class="my_icon">
							<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/waterElectricity/elec_success.png" mode="aspectFill"></image>
						</view>
						<view class="my_content">
							意见反馈提交成功
						</view>
						<view class="my_btn">
							<view class="my_btn_close" @click="success=false">取消</view>
							<view class="my_btn_ok" @click="success=false">确定</view>
						</view>
					</view>
				</view>
				<view class="uni-mask" v-if="fail">
					<view class="my-window">
						<view class="my_icon">
							<image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/waterElectricity/elec_fail.png" mode="aspectFill"></image>
						</view>
						<view class="my_content">
							信息为空
						</view>
						<view class="my_btn">
							<view class="my_btn_close" @click="fail=false">取消</view>
							<view class="my_btn_ok" @click="fail=false">确定</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoState: 0,
				index:0,
				conterNum:0,
				textContent:"",
				imgs: [],
				imgList:[
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide2.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
					"https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/service/guide1.png",
				],
				
				success:false,
				fail:false,
			}
		},
		methods: {
			getInfo(infoState) {
				this.infoState = infoState;
				 if (this.infoState == 0) {
					this.index = 0;
				 } else if (this.infoState == 1) {
					this.index = 1;
				 }
			},
			swiperchange(e){
				this.infoState = e.target.current || e.detail.current;
				this.index=e.target.current || e.detail.current;
				if (this.infoState == 0) {
					this.index=0;
				} else if (this.infoState == 1) {
					this.index=1;
				}
			},
			descInput(){
				this.conterNum = this.textContent.length;              
			},
			chooseImg() {
				var _this = this;
				if (this.device == "ios") {
					if (!uni.getStorageSync('imgPre')) {
						uni.showModal({
							title: '提示',
							content: '系统在需要选择图片时，需要调用获取相机的权限！',
							success: function(res) {
								if (res.confirm) {
									uni.setStorageSync("imgPre", "1");
									_this.openImg();
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					} else {
						_this.openImg();
					}
				} else {
					_this.openImg();
				}
			},
			openImg() {
				uni.chooseImage({
					count: 9,
					sizeType: ["compressed"],
					success: (e) => {
						let paths = e.tempFilePaths.filter(file => {
							let test = file.toLowerCase();
							if (test.endsWith("png") || test.endsWith("jpeg") || test.endsWith("jpg")) {
								return file;
							}
						})
						if (this.imgs.length + paths.length > 9) {
							paths.length = 9 - this.imgs.length;
						};
						this.imgs = this.imgs.concat(paths);
					}
				})
			},
			previewImage(e) {
				uni.previewImage({
					current: e.target.dataset.index,
					urls: this.imgs
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content_title {
		width: 100%;
		position: fixed;
		display: inline-flex;
		top: var(--status-bar-height);
		overflow: hidden;
		z-index: 100;
		top: 0;
		display: table;
		background-color: #fff;
		padding: 49rpx 209rpx 25rpx 207rpx;
		.title1 {
			text-align: center;
			float: left;
			.title_name_point {
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 20rpx;
			}
			.title_name {
				font-size: 28rpx;
				font-family: PingFang-SC-Medium;
				color: #333333;
				line-height: 20rpx;
			}

			.title_point {
				position: absolute;
				width: 10%;
				height: 2rpx;
				background: #286fc9;
				border-radius: 2rpx;
				margin-top: 15rpx;
				margin-left: -0.4%;
				border-radius: 2rpx;
			}
		}
		.title1:nth-child(1){
			margin-right: 115rpx;
		}
	}
	.swiper {
		height: 1434rpx;
		swiper-item {
			padding-top: 110rpx;
			scroll-view{
				height: 1334rpx;
				.suggest_top{
					background-color: #fff;
					padding: 20rpx 30rpx;
					margin: 0 auto;
					.suggest_title{
						width: 100%;
						height: 60rpx;
						line-height: 60rpx;
						.suggest_title_left{
							float: left;
							color: #212121;
							font-size: 28rpx;
							margin-left: 8rpx;
						}
						.suggest_title_right{
							float: right;
							font-size: 22rpx;
							color: #636363;
						}
					}
					.ta{
						width: 95%;
						height: 298rpx;
						text-align: justify;
						color: #636363;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						border-radius: 10rpx;
						border: 1rpx solid #999999;
						padding: 20rpx 21rpx;
					}
					.img-group{
						height: auto;
						.active_img {
							float: left;
							margin-bottom: 57rpx;
							.image{
								width: 106rpx;
								height: 105rpx;
								margin: 27rpx 8rpx 0 0;
							}
						}
						.photo{
							width: 106rpx;
							height: 105rpx;
							margin: 27rpx 0 0 8rpx;
						}
						.imagelabel{
							margin-left:36rpx;
							margin-right:36rpx;
						}
						.imagelabel_text{
							color: #FF0B1F;
							font-size: 24rpx;
						}
					}
				}
				.suggest_button{
					clear: both;
					width: 90%;
					margin: 0 auto;
					font-size: 30rpx;
					border-radius: 24rpx;
					text-align: center;
					height: 80rpx;
					line-height: 80rpx;
					margin-top: 56rpx;
					background-color: #286fc9;
					color: #fff;
				}	
				
				/* 提交记录 */
				.suggest_box{
					margin: 0 auto;
					margin-bottom: 25rpx;
					padding: 32rpx 28rpx;
					width: 86%;
					height: auto;
					border-radius: 10rpx;
					background-color: #f8f8f8;
					border: 1rpx solid #999;
					.suggest_text{
						font-size: 24rpx;
						color: #636363;
						font-family: PingFang-SC-Regular;
						line-height: 50rpx;
						text-align: justify;
					}
					.img_group{
						display: inline-block;
						margin-top: 20rpx;
						margin-bottom: 23rpx;
						.active_img {
							float: left;
							.image{
								width: 106rpx;
								height: 105rpx;
								margin-right: 15rpx;
							}
						}
					}
					.suggest_date_time{
						text-align: right;
						clear: both;
						font-size: 22rpx;
						color: #636363;
						font-family: SourceHanSansCN-Regular;
						.suggest_date{
							margin-right: 58rpx;
						}
					}
				}
			}
		}
	}
	.uni-mask {
			background: rgba(0, 0, 0, 0.5);
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 99;
			.my-window {
				width: 80%;
				background: #FFFFFF;
				border-radius: 24rpx;
				margin-left: 10%;
				margin-top: 35%;
				.my_icon{
					margin: 0 auto;
					text-align: center;
					image{
						display: inline-block;
						width: 64rpx;
						height: 64rpx;
						margin-top: 70rpx;
						margin-bottom: 30rpx;
					}
				}
				.my_content {
					padding: 0;
					font-size: 32rpx;
					color: #333;
					text-align: center;
					margin-bottom: 46rpx;
				}
				.my_btn {
					width: 100%;
					font-size: 32rpx;
					border-top: #EDF0F7 1rpx solid;
					text-align: center;
					display: table;
					.my_btn_close {
						padding: 40rpx 0;
						width: 49%;
						color: #999999;
						line-height: 32rpx;
						border-right: #EDF0F7 1rpx solid;
						float: left;
					}
					.my_btn_ok {
						padding: 40upx 0;
						width: 49%;
						color: #000;
						line-height: 32rpx;
						float: left;
					}
				}
			}			
	}
</style>
