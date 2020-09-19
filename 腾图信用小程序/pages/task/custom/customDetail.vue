<template>
	<view>
		<view v-if="editOrNot">
			<view class="edit_top">
				<view class="edit_item">
					<view class="title">姓名</view>
					<input type="text" v-model="name" placeholder="请输入姓名" />
				</view>
				<view class="edit_item">
					<view class="title1">手机号码/变更的手机号码</view>
					<input type="text" v-model="phone" placeholder="请输入手机号码" />
				</view>
			</view>
			<view class="edit_bottom">
				<view class="edit_item">
					<view class="title">年龄</view>
					<input type="text" v-model="age" placeholder="请输入年龄" />
				</view>
				<view class="edit_item">
					<view class="title">性别</view>
					<picker :range="types" @change="typeChange">
						<view class="address_picker">{{ types[typesIndex] }} </view>
					</picker>
				</view>
				<view class="edit_item">
					<view class="title">单位地址</view>
					<input type="text" v-model="jobAddress" placeholder="请输入工作地址" />
				</view>
				<view class="edit_item">
					<view class="title">单位全称</view>
					<input type="text" v-model="age" placeholder="请输入公司名字" />
				</view>
				<view class="edit_item">
					<view class="title">家庭地址</view>
					<input type="text" v-model="homeAddress" placeholder="请输入家庭住址" />
				</view>
				<view class="edit_item" :class="{'changeCss':isShowSelect}">
					<view class="drop">
						<view class="right-date" @click="arrowDown" >
							<view class="title">
								紧急联系人
								<uni-icons v-if="!isShowSelect" type="arrowdown" size="15"></uni-icons>
								<uni-icons v-if="isShowSelect" type="arrowup" size="15"></uni-icons>
							</view>	
						</view>
						<view class="selectBox_list" v-show="isShowSelect">
							<view class="drop_item">
								<view class="title">电话</view>
								<input type="text" v-model="contactPhone" placeholder="请输入电话" />
							</view>
							<view class="drop_item">
								<view class="title">关系</view>
								<input type="text" v-model="contactRelation" placeholder="与紧急联系人关系" />
							</view>
						</view>
					</view>
					<input type="text" v-model="contactName" placeholder="请输入紧急联系人姓名" />
				</view>
				<!-- <view class="edit_item">
					<view class="title">客户订单处理</view>
					<view class="check_button" @click="toOrderList">查看订单</view>
				</view> -->
			</view>
		</view>
		<view v-if="!editOrNot">
			<view class="edit_top">
				<view class="edit_item">
					<view class="title">姓名</view>
					<view class="item_content">黄华辉</view>
				</view>
				<view class="edit_item">
					<view class="title1">手机号码/变更的手机号码</view>
					<view class="item_content1">131681112345</view>
				</view>
			</view>
			<view class="edit_bottom">
				<view class="edit_item">
					<view class="title">年龄</view>
					<view class="item_content">23</view>
				</view>
				<view class="edit_item">
					<view class="title">性别</view>
					<view class="item_content">女</view>
				</view>
				<view class="edit_item">
					<view class="title">单位地址</view>
					<view class="item_content2">
						广东省梅州市梅江区客都大道梅州联通大厦6楼
					</view>
				</view>
				<view class="edit_item">
					<view class="title">单位全称</view>
					<view class="item_content2">广东伊起网络科技有限公司</view>
				</view>
				<view class="edit_item">
					<view class="title">家庭地址</view>
					<view class="item_content2">梅州市梅州市梅州</view>
				</view>
				<view class="edit_item" :class="{'changeCss':isShowSelect}">
					<view class="drop">
						<view class="right-date" @click="arrowDown" >
							<view class="title">
								紧急联系人
								<uni-icons v-if="!isShowSelect" type="arrowdown" size="15"></uni-icons>
								<uni-icons v-if="isShowSelect" type="arrowup" size="15"></uni-icons>
							</view>	
						</view>
						<view class="selectBox_list2" v-show="isShowSelect">
							<view class="drop_item">
								<view class="title">电话</view>
								<view class="item_content">123584847778</view>
							</view>
							<view class="drop_item">
								<view class="title">关系</view>
								<view class="item_content">同事</view>
							</view>
						</view>
					</view>
					<view class="item_content">张三</view>
				</view>
				<view class="edit_item">
					<view class="title">客户订单处理</view>
					<view class="check_button" @click="toOrderList('黄华辉')">查看订单</view>
				</view>
			</view>
		</view>
		<view v-if="editOrNot" @click="editOrNot=false" class="edit_button">保存</view>
		<view v-if="!editOrNot" @click="editOrNot=true" class="edit_button">编辑</view>
		
		<view class="uni-mask" v-if="error">
			<view class="my-window">
				<view class="my_icon">
					<image src="../../../static/img/task/error.png" mode="aspectFill"></image>
				</view>
				<view class="my_content">
					信息不全/有误！
				</view>
				<view class="my_btn">
					<view class="check_button" @click="error=false">确定</view>
				</view>
			</view>
		</view>
		<view class="uni-mask" v-if="success">
			<view class="my-window">
				<view class="my_content2">
					保存成功
				</view>
				<view class="my_btn">
					<view class="check_button" @click="success=false">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				editOrNot:false,
				types:["女","男"],
				typesIndex:0,
				isShowSelect: false,
				error:false,
				success:false
			}
		},
		components: {uniIcons},
		methods: {
			typeChange : function(e){
				console.log(e)
				this.typesIndex = e.detail.value;
			},
			arrowDown() {
				this.isShowSelect = !this.isShowSelect;
			},
			toOrderList(navbarName){
				this.$store.commit("updateNavbarName",navbarName);
				uni.navigateTo({
					url: '/pages/task/customOrder/orderList'
				});
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
	}
	.edit_top{
		background-color: #fff;	
	}
	.edit_bottom{
		margin-top: 25upx;
		background-color: #fff;
	}
	.edit_item{

		padding: 0 30upx;
		display: flex;
		background-color: #fff;
		color: #999999;
		border-bottom: 1px #e8ebf2 solid;
		.title{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			flex: 3;
			color: #282828;		
		}
		.title1{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			flex: 6;
			color: #282828;		
		}
		input{
			flex: 6;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			display: inline-block;
			text-align: right;
			color: #999999;
		}
		.item_content{
			flex: 9;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			white-space: normal;
			display: inline-block;
			text-align: right;
		}
		.item_content1{
			flex: 6;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			white-space: normal;
			display: inline-block;
			text-align: right;
		}
		.item_content2{
			flex: 9;
			font-size: 25upx;
			white-space: normal;
			display: inline-block;
			text-align: right;
			padding-top: 5%;
			padding-bottom: 5%;
		}
		.address_picker{
			flex: 8;
			display: inline-block;
			font-size: 25upx;
			height: 100upx;
			line-height: 100upx;
			color: #999999;
		}
		.drop{
			flex: 6;
			position: relative;
			.right-date{
				position: absolute;
				top: 0;
				height: 100upx;
			}
			.selectBox_list, .selectBox_list2{
				position: absolute;
				top: 100upx;
				width: 200%;
				margin-left: -22upx;
				.drop_item{
					height: 100upx;
					padding: 0 25upx;
					width: 100%;
					display: flex;
					background-color: #f9f9f9;
					color: #999999;
					border-top: 1px #eff1f5 solid;
					.title{
						font-size: 28upx;
						height: 100upx;
						line-height: 100upx;
						flex: 6;
						color: #282828;		
					}
					input{
						flex: 6;
						font-size: 25upx;
						height: 100upx;
						line-height: 100upx;
						display: inline-block;
						text-align: right;
						color: #999999;
					}
				}
			}
			.selectBox_list2{
				width: 250%;;
			}
			
		}
		.check_button{
			width: 150upx;
			margin: 0 auto;
			font-size: 25upx;
			border-radius: 20px;
			text-align: center;
			height: 50upx;
			line-height: 50upx;
			background-color: #6486f6;
			color: #fff;
			margin-top: 25upx;
		}
	}
	.changeCss{
		height: 300upx;
	}
	.edit_button{
		width: 90%;
		margin: 0 auto;
		font-size: 30upx;
		border-radius: 20px;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		margin-top: 40upx;
		margin-bottom: 50upx;
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
			.my_icon{
				margin: 0 auto;
				text-align: center;
				image{
					display: inline-block;
					width: 30px;
					height: 30px;
					margin-top: 30upx;
				}
			}
			.my_content {
				padding: 0;
				font-size: 38upx;
				color: #212121;
				text-align: center;
			}
			.my_content2 {
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