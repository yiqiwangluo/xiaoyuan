<template>
	<view>
		<view class="custom_search">
			<view class="custom_search_left">
				<uni-icons class="search_icon" type="search" size="18"></uni-icons>
				<input type="text" v-model="search" placeholder="客户相关名字或手机号" />
			</view>
			<view class="custom_search_right">
				搜索
			</view>
		</view>
		<view v-if="customList.length==0" class="no_list">
			<image src="../../../static/img/task/no.png" mode="aspectFill"></image>
			<view class="no_list_text">无相关信息</view>
		</view>
		<view v-else>
			<view class="custom_list_box" @click="checkCustom">
				<view class="custom_list_box_left">
					<view class="custom_name">黄华辉</view>
					<view class="custom_phone">手机号码：13823812345</view>
				</view>
				<view class="custom_list_box_right">
					查看详情
				</view>
			</view>
			<view class="custom_list_box" @click="checkCustom">
				<view class="custom_list_box_left">
					<view class="custom_name">张楠楠</view>
					<view class="custom_phone">手机号码：13823812345</view>
				</view>
				<view class="custom_list_box_right">
					查看详情
				</view>
			</view>
		</view>
		<view class="custom_add">
			<image @click="add" src="../../../static/img/task/add.png" mode="aspectFill"></image>
		</view> 
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				customList:[1]
			}
		},
		components: {uniIcons},
		methods: {
			add(){
				uni.navigateTo({
					url: '/pages/task/custom/addCustom'
				});
			},
			checkCustom(){
				uni.navigateTo({
					url: '/pages/task/custom/customDetail'
				});
			}
		}
	}
</script>

<style scoped lang="less">
.custom_search{
	padding: 0 45upx;
	height: 150upx;
	margin: 0 auto;
	display: flex;
	background-color: #6486f6;
	.custom_search_left{
		flex: 10;
		height: 50upx;
		background-color: #fff;
		padding: 5upx;
		border-radius: 30px;
		margin-top: 40upx;
		padding-left: 20upx;
		padding-bottom: 10upx;
		position: relative;
		.search_icon{
			position: absolute;
			top: 10upx;
		}
		input{
			margin-left: 40upx;
			font-size: 28upx;
			display: inline-block;
			height: 50upx;
			margin-top: 5upx;
			vertical-align: text-bottom;
		}
	}
	.custom_search_right{
		flex: 2;
		color: #fff;
		font-size: 32upx;
		margin-top: 50upx;
		text-align: right;
	}
	
}
.no_list{
	margin-top: 50upx;
	text-align: center;
	image{
		width: 40px;
		height: 40px;
	}
	.no_list_text{
		font-size: 30upx;
		color: #7e7e7e;
	}
}
.custom_list_box{
	width: 90%;
	height: 150upx;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 4px -1px #CCCCCC;
	margin: 0 auto; 
	margin-top: 30upx;
	display: flex;
	.custom_list_box_left{
		flex: 8;
		padding: 33upx 0 30upx 50upx;
		.custom_name{
			font-size: 32upx;
			margin-bottom: 10upx;
			color: #222222;
		}
		.custom_phone{
			font-size: 28upx;
			color: #999999;
		}
	}
	.custom_list_box_right{
		flex: 4;
		padding-right: 30upx;
		padding-top: 20upx;
		text-align: right;
		font-size: 28upx;
		color: #222222;
	}
}
.custom_add{
	padding-top: 50upx;
	margin: 0 auto;
	text-align: center;
	image{
		width: 30px;
		height: 30px;
	}
}
</style>
