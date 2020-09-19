<template>
	<view>
		<view class="complain_top">
			<view class="complain_title">
				<view class="complain_title_left">投诉内容</view>
				<view class="complain_title_right">{{ conterNum }}/200</view>
			</view>
			<textarea  @input="descInput" class="ta" maxlength="200" placeholder="请输入您的投诉内容(最多只能输入200个字)" v-model="textContent"/>
			<view class="img-group">
				<view class="active-img" v-for="(img,index) in imgs" :key="index">
					<image class="image" :src="img" @click="previewImage" mode="aspectFill" ></image>
					<!-- <image src="/static/images/close_img.png" :data-index="index" class="close-img" @click="deleteImg"></image> -->
				</view>
				<image src="../../../static/img/personal/photo.jpg" class="add-img" @click="chooseImg" v-if="imgs.length<5"></image>
				<view class="boxbox" v-if="imgs.length>=5"></view>	
			</view>
		</view>
		<view class="complain_bottom">
			<view class="title">联系电话：</view>
			<input type="text" v-model="phone" placeholder="请输入手机号码" />
		</view>
		<view class="complain_button">提交</view>
		
		<view class="uni-mask" v-if="success">
			<view class="my-window">
				<view class="my_content">
					信息提交成功！
				</view>
				<view class="my_btn">
					<view class="check_button" @click="success=false">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				conterNum:0,
				textContent:"",
				imgs: [],// 上传的图片，列表
				success:false
			}
		},
		methods: {
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
				var _self = this;
				uni.previewImage({
					current: e.target.dataset.index,
					urls: _self.imgs
				})
			},
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
	}
	.complain_top{
		background-color: #fff;
		padding: 20upx 30upx;
		margin: 0 auto;
		height: auto;
		.complain_title{
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			font-size: 28upx;
			.complain_title_left{
				float: left;
				color: #212121;
			}
			.complain_title_right{
				float: right;
				color: #636363;
			}
		}
		.ta{
			width: 100%;
			text-align: justify;
			color: cdcdcd;
			font-size: 25upx;
		}
		.active-img {
			float: left;
			margin-bottom: 57rpx;
			display: block;
			.image{
				background-color: #FFFFFF;
				width: 130upx;
				height: 130upx;
				margin-right: 10upx;
				margin: 27rpx 8rpx 0 0;
			}
		}
		.add-img{
			width: 130upx;
			height: 130upx;
			margin: 27rpx 0 0 8rpx;
		}
		.boxbox{
			width: 130upx;
			height: 160upx;
			margin: 27rpx 0 0 8rpx;
		}
	}
	.complain_bottom{
		clear: both;
		height: 100upx;
		padding: 0 30upx;
		margin-top: 30upx;
		display: flex;
		background-color: #fff;
		.title{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			flex: 3;
			color: #212121;		
		}
		input{
			flex: 9;
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			display: inline-block;
		}
	}
	.complain_button{
		clear: both;
		width: 90%;
		margin: 0 auto;
		font-size: 30upx;
		border-radius: 15px;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		margin-top: 30upx;
		background-color: #6486f6;
		color: #fff;
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
			border-radius: 24upx;
			margin-left: 10%;
			margin-top: 35%;
			.my_content {
				padding: 60upx 0 0 0;
				font-size: 38upx;
				color: #212121;
				text-align: center;
			}
			.my_btn {
				width: 100%;
				font-size: 36upx;
				text-align: center;
				height: 100upx;
				.check_button{
					width: 180upx;
					margin: 0 auto;
					font-size: 30upx;
					border-radius: 20px;
					text-align: center;
					height: 60upx;
					line-height: 60upx;
					background-color: #6486f6;
					color: #fff;
					margin-top: 25upx;
				}
			}
		}
			
	}
</style>
