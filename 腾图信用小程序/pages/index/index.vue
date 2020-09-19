<template>
	<view>
		<view class="change_swiper">
			<view class="top-swiper">
				<view class="box">
					<swiper class="swiper" indicator-color="#ffffff" :indicator-dots="indicatorDots" autoplay="true" :previous-margin="swiper.margin" :next-margin="swiper.margin" :circular="true"  :interval="interval" :duration="duration" @change="swiperChange">
						<swiper-item v-for="(item, index) in swiper.list" :key="index">
							<image class="le-img" :src="item" :class="{ 'le-active': swiper.index == index }"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<view class="notice" @click="checkNotice">
			<image src="../../static/img/index/notice.png" mode="aspectFill"></image>
			<text class="notice_title">公告：</text><text class="notice_content">腾图信用8月大优惠！详情点击咨询情况</text>
		</view>
		<view class="content-bottom">
			<navigator url="/pages/index/repair/repair" hover-class="none" class="content-bottom-box">
				<image src="../../static/img/index/box1.png" mode="aspectFill"></image>
			</navigator>
			<navigator url="/pages/index/joinUs/joinUs" hover-class="none" class="content-bottom-box">
				<image src="../../static/img/index/box2.png" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="information">
			<view class="information_text">
				<text class="information_text_left">征信资讯</text>
				<text class="information_text_right" @click="moreInformation">查看更多资讯 ></text>
			</view>
			<view class="information_box" @click="detailInformation">
				<image src="../../static/img/index/info1.png" mode="aspectFill"></image>
				<view class="information_box_content">
					<view class="information_box_content_top">
						<view class="information_top_left">
							如何查询自己的征信？征信不好会有哪些影响？
						</view>
						<view class="information_top_right">
							详情>
						</view>
					</view>
					<view class="information_box_content_middle">
						如果身上有征信问题，你去买房子会会不会骄傲vcj
					</view>
					<view class="information_box_content_bottom">
						<view class="time">
							<image src="../../static/img/index/time.png" mode="aspectFill"></image>
							<text class="time_word">2020年8月21日</text>
						</view>
						<view class="people_num">
							<image src="../../static/img/index/eye.png" mode="aspectFill"></image>
							<text class="people_word">6987</text>
						</view>
						<view class="information_button">
							立即咨询
						</view>
					</view>
				</view>
			</view>
			<view class="information_box" @click="detailInformation">
				<image src="../../static/img/index/info2.png" mode="aspectFill"></image>
				<view class="information_box_content">
					<view class="information_box_content_top">
						<view class="information_top_left">
							如何查询自己的征信？征信不好会有哪些影响？
						</view>
						<view class="information_top_right" @click="detailInformation">
							详情>
						</view>
					</view>
					<view class="information_box_content_middle">
						如果身上有征信问题，你去买房子会会不会骄傲vcj
					</view>
					<view class="information_box_content_bottom">
						<view class="time">
							<image src="../../static/img/index/time.png" mode="aspectFill"></image>
							<text class="time_word">2020年8月21日</text>
						</view>
						<view class="people_num">
							<image src="../../static/img/index/eye.png" mode="aspectFill"></image>
							<text class="people_word">6987</text>
						</view>
						<view class="information_button">
							立即咨询
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="my_pop" v-if="noticeShow">
			<view class="windows_content-box">
				<view class="windows_title">公告</view>
				<view class="windows_sub_title">发布日期:2020年08月01日</view>
				<view class="windows_text-box">
					<scroll-view scroll-y="true" class="shop-box">
						<text class="windows_content">
							<text class="MsoNormal">
								您在申请注册流程中，点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容,特别是免除或者限制责任的条款、法律适用和争议解决条款。
							</text>
							<text class="MsoNormal">
								免除或者限制责任的条款将以粗体标识,您应重点阅读。如您对协议有何疑问,可向麦临+平台客服咨询。
							</text>
							<text class="MsoNormal">
								当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册后,即表示您已充分阅读、理解并接受本协议的全部内容,并与麦临+达成一致,成为麦临+平台“会员"。阅读本协议的过程中,如果您不同意本协议或其中任何条款约定,您应立即停止注册程序。
							</text>
						</text>
					</scroll-view>
				</view>
				<view class="windows_btn_box" @click="noticeShow=false">
					<view class="check_button">同意并继续</view>
				</view>
			</view>
		</view>
		<view class="uni-mask" v-if="loginOrNot">
			<view class="my-window">
				<view class="my_title">您还未登录</view>
				<view class="my_content">
					请先登录再进行操作
				</view>
				<view class="my_btn">
					<view class="my_btn_close" @click="closeNewWindow">随便看看</view>
					<view class="my_btn_ok" @click="">立即登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiper: {
					margin: '30rpx',
					index: 0,
					list: ['../../static/img/index/banner.png', '../../static/img/index/banner.png','../../static/img/index/banner.png']
				},
				noticeShow:false,
				loginOrNot:true
			}
		},
		onLoad() {

		},
		methods: {
			swiperChange: function(e) {
				this.swiper.index = e.detail.current;
			},
			moreInformation(){
				uni.navigateTo({
					url: '/pages/index/information/information'
				});
			},
			detailInformation(){
				uni.navigateTo({
					url: '/pages/index/information/informationDetail'
				});
			},
			checkNotice(){
				this.noticeShow=true;
			},
			closeNewWindow(){
				this.loginOrNot = false;
			},
			toLogin(){
				wx.login({
				  success (res) {
				    if (res.code) {
				      //发起网络请求
				      wx.request({
				        url: 'https://test.com/onLogin',
				        data: {
				          code: res.code
				        }
				      })
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			}
		}	
	}
</script>

<style scoped lang="less">

	.change_swiper{
		width: 100%;
		background-image: linear-gradient(to bottom, #6486f6 , #fff);
		.swiper {
			height: 150px;
			border-radius: 4px;
			.le-img {
				width: 100%;
				height: 100%;
				border-radius: 4px;
				transform: scale(0.95);
				transition: transform 0.3s ease-in-out 0s;
				&.le-active {
					transform: scale(1);
				}
			}
		}
	}
	.notice{
		height: 60upx;
		line-height: 60upx;
		width: 100%;
		padding: 0 2%;
		margin: 0 auto;
		margin-top: 20upx;
		margin-bottom: 20upx;
		text-align: center;
		border-top: 1px #f1f4ff solid;
		border-bottom: 1px #f1f4ff solid;
		image{
			display: inline-block;
			width: 30upx;
			height: 28upx;
			margin-bottom: 15upx;
		}
		.notice_title{
			width: 11%;
			display: inline-block;
			font-size: 25upx;
			color: #000;
			margin-left: 15upx;
			vertical-align: top;
		}
		.notice_content{
			display: inline-block;
			width: 75%;
			text-align: left;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 25upx;
			margin-left: -5upx;
			color: #8f8f8f;
		}
	}
	.content-bottom{
		width: 92%;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		margin-bottom: 20upx;
		.content-bottom-box{
			flex: 6;
			position: relative;
			image{
				width: 335upx;
				height: 335upx;
			}
	
		}
		.content-bottom-box:nth-child(1){
			margin-right: 20upx;
		}
	}
	.information_text{
		width: 92%;
		margin: 0 auto;
		display: block;
		.information_text_left{
			float: left;
			font-size: 33upx;
			margin-bottom: 15upx;
		}
		.information_text_right{
			float: right;
			font-size: 28upx;
			color: #919191;
			margin-top: 6upx;
		}
	}
	.information_box{
		width: 92%;
		margin: 0 auto;
		height: 280upx;
		background-color: #f2f5ff;
		border-radius: 5px;
		display: flex;
		margin-bottom: 20upx;
		image{
			flex: 3;
			width: 180upx;
			height: 220upx;
			border-radius: 5px;
			margin: 30upx 20upx;
		}
		.information_box_content{
			flex: 9;
			min-width: 0; /* 解决white-space: nowrap;遇到flex的问题 */
			.information_box_content_top{
				line-height: 50upx;
				margin-top: 20upx;
				.information_top_left{
					font-size: 31upx;
					font-weight: 700;
					float: left;
					width: 80%;
				}
				.information_top_right{
					width: 20%;
					font-size: 25upx;
					color: #919191;
					float: right;
					text-align: center;
				}
			}
			.information_box_content_middle{
				width: 68%;
				clear: both;
				display: inline-block;
				margin-top: 20upx;
				font-size: 25upx;
				color: #ababae;	
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			.information_box_content_bottom{
				.time{
					float: left;
					margin-left: -15upx;
					image{
						float: left;
						display: inline-block;
						width: 25upx;
						height: 25upx;
					}
					.time_word{
						float: left;
						font-size: 25upx;
						margin-left: -13upx;
						display: inline-block;
						margin-top: 26upx;
						color: #ababae;
					}
				}
				.people_num{
					float: left;
					image{
						float: left;
						display: inline-block;
						width: 25upx;
						height: 25upx;
					}
					.people_word{
						float: left;
						font-size: 25upx;
						margin-left: -13upx;
						display: inline-block;
						margin-top: 26upx;
						color: #ababae;
					}
				}
				.information_button{
					float: right;
					margin-top: 20upx;
					margin-right: 10upx;
					display: inline-block;
					width: 130upx;
					text-align: center;
					font-size: 25upx;
					background-color: #6486f6;
					color: #fff;
					padding: 10upx 10upx;
					border-radius: 30upx;
				}
			}
		}
	}
	.my_pop {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 101;
		display: flex;
		justify-content: center;
		align-items: center;
	
		.windows_content-box {
			position: absolute;
			width: 586upx;
			background: white;
			border-radius: 24upx;
			// top: 150upx;
			// left: 82upx;
	
			.windows_title {
				font-size: 35upx;
				color: #191919;
				font-weight: 700;
				text-align: center;
				margin-top: 50upx;
			}
			.windows_sub_title {
				font-size: 30upx;
				color: #191919;
				text-align: left;
				margin: 20upx 56upx 0 56upx;
			}
			.windows_text-box {
				width: 474upx;
				margin: 0 56upx 50upx 56upx;
				.shop-box {
					height: 500upx;
				}
	
				.windows_content {
					font-size: 30upx;
					color: #8C8C8C;
					margin: 0 56upx 50upx 56upx;
					.MsoNormal{
						display: block;
						margin: 0 auto;
						color: #7c7c7c;
						text-align: justify;
						line-height: 35upx;
						font-size: 30upx;
						text-indent:15.0pt;
						margin-block-end: 0.3em;
					}
					.MsoNormal:first-child{
						margin-top: -30upx;
					}
				}
			}
	
			.windows_btn_box {
				width: 586upx;
				position: relative;
				background: white;		
				text-align: center;
				border-bottom-left-radius: 24upx;
				border-bottom-right-radius: 24upx;
				.check_button{
					width: 200upx;
					margin: 0 auto;
					font-size: 30upx;
					border-radius: 20px;
					text-align: center;
					height: 60upx;
					line-height: 60upx;
					background-color: #6486f6;
					color: #fff;
					margin-top: 15upx;
					margin-bottom: 35upx;
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
	}
	
	.my-window {
		width: 80%;
		background: #FFFFFF;
		border-radius: 24upx;
		margin-left: 10%;
		margin-top: 35%;
	}
	
	.my_title {
		padding: 40upx 0 20upx 0;
		font-size: 38upx;
		color: #999999;
		text-align: center;
	}
	
	.my_content {
		padding: 20upx 0 40upx 0;
		font-size: 38upx;
		color: #212121;
		text-align: center;
	}
	
	.my_btn {
		width: 100%;
		font-size: 36upx;
		border-top: #EDF0F7 1upx solid;
		text-align: center;
		display: table;
	
	}
	
	.my_btn_close {
		padding: 40upx 0;
		width: 299.5upx;
		color: #333333;
		line-height: 30upx;
		border-right: #EDF0F7 1upx solid;
		float: left;
	}
	
	.my_btn_ok {
		padding: 40upx 0;
		width: 299.5upx;
		color: #567cf9;
		line-height: 30upx;
		float: left;
	}
</style>
