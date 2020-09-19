<template>
	<view>
		<view class="img">
			<image src="../../../static/img/personal/about_bg1.png" mode="aspectFill"></image>
		</view>
		<view class="about_content_top">
			<image class="about_bg" src="../../../static/img/personal/about_bg2.png" mode="aspectFill"></image>
			<view class="about_title">
				多年征信行业服务经验
				<view class="shadow1"></view>
			</view>
			<view class="about_title">
				腾图信用—专业征信咨询服务机构
				<view class="shadow2"></view>
			</view>
			<view class="MsoNormal">
				腾图信用，是在国务院《征信业务管理条例》第二十五条精神指导下，经市场监督管理局批准的正规经营机构。公司主要经营征信咨询，代理申诉，信用管理，合作垂询。通过帮助客户向征信机构提交征信申诉，最终棒客户修复非恶意征信瑕疵。作为国内征信行业领先者，致力于帮助征信不良的朋友，修复信用生活。
			</view>
			<view class="list">
				<view class="list-item">
					<image class="img1" src="../../../static/img/personal/about1.png" mode="aspectFill"></image>
					<view class="view1">征信咨询</view>
				</view>
				<view class="list-item">
					<image src="../../../static/img/personal/about2.png" mode="aspectFill"></image>
					<view>信用管理</view>
				</view>
				<view class="list-item">
					<image src="../../../static/img/personal/about3.png" mode="aspectFill"></image>
					<view>代理申诉</view>
				</view>
				<view class="list-item">
					<image src="../../../static/img/personal/about4.png" mode="aspectFill"></image>
					<view>合作垂询</view>
				</view>
			</view>
		</view>
		<div class="about_content_bottom">
			<view class="bottom_box">
				<uni-icons type="phone-filled" size="15"></uni-icons>
				<view class="text">0753—8668881</view>
			</view>
			<view class="bottom_box">
				<uni-icons type="email-filled" size="15"></uni-icons>
				<view class="text">123456789@qq.com</view>
			</view>
			<view class="bottom_box">
				<uni-icons type="location-filled" size="15"></uni-icons>
				<view class="text">广东省梅州市梅江区客都大道梅州联通大厦6楼</view>
			</view>
		</div>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {uniIcons},
		methods: {
			
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
		margin: 0;
		padding: 0;
	}

	.img{
		height: 400upx;
		image{
			width: 100%;
			height: 400upx;
		}
	}
	.about_content_top{
		width: 100%;
		padding: 50upx 0 10upx 0;
		position: relative;
		.about_bg{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			background-size: cover;
			z-index: -10901;
		}
		.about_title{
			width: 94%;
			margin: 0 auto;
			padding: 0 20upx;
			display: inline-block;
			font-size: 38upx;
			font-weight: 900;
			margin-bottom: 15upx;
			.shadow1{
				width: 55%;
				height: 8upx;
				border-radius: 20px;
				background-color: #6486f6;
				margin-top: -5upx;
				box-shadow:0 1upx 2upx -1upx #cfd9f9;
			}
			.shadow2{
				width: 82%;
				height: 8upx;
				border-radius: 20px;
				background-color: #6486f6;
				margin-top: -5upx;
				box-shadow:0 1upx 2upx -1upx #cfd9f9;
			}
		}
		.MsoNormal{
			margin: 30upx auto;
			width: 94%;
			color: #4d4d4d;
			text-align: justify;
			line-height: 40upx;
			font-size: 28upx;
			margin-block-end: 0.3em;
		}
		.list{
			margin-top: 30upx;
			clear: both;
			width: 98%;
			height: 150upx;
			margin-left: 0.5%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.list-item{
				width: 24%;
				text-align: center;
				border-right: 2px #cccccc solid;
				image{
					width: 30px;
					height: 30px;
					border-radius: 0;
				}
				image.img1{
					width: 50px;
					height: 50px;
					margin-top: -10px;
					border-radius: 0;
				}
				view{
					font-size: 30upx;
				}
				.view1{
					margin-top: -10px;
				}
			}
			.list-item:nth-child(4){
				border: none;
			}
		}
	}
	.about_content_bottom{
		margin: 30upx 0;
		height: 180upx;
		background-color: #fff;
		padding: 20upx 0;
		.bottom_box{
			height: 60upx;
			padding: 0 30upx;
			display: flex;
			background-color: #fff;
			color: #999999;
			uni-icons{
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
				color: #282828;
			}
			.text{
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
				color: #282828;
				margin-left: 20upx;
			}
		}
	}
</style>
