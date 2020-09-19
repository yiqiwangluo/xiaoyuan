<template>
	<view class="container">
		<view class="information_box" @click="detailInformation">
			<image src="../../../static/img/index/info1.png" mode="aspectFill"></image>
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
						<image src="../../../static/img/index/time.png" mode="aspectFill"></image>
						<text class="time_word">2020年8月21日</text>
					</view>
					<view class="people_num">
						<image src="../../../static/img/index/eye.png" mode="aspectFill"></image>
						<text class="people_word">6987</text>
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
				
			}
		},
		methods: {
			detailInformation(){
				uni.navigateTo({
					url: '/pages/index/information/informationDetail'
				});
			}
		}
	}
</script>

<style lang="less" >
	page{
		background-color: #f6f6f6;
	}
	.information_box{
			width: 92%;
			margin: 20upx auto;
			height: 280upx;
			box-shadow: 0 1px 2px -1px #CCCCCC;
			background-color: #fff;
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
</style>
