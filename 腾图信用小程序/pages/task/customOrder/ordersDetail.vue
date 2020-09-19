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
					<view class="title">业务类型</view>
					<input type="text" v-model="businessType" placeholder="请输入业务类型" />
				</view>
				<view class="edit_item">
					<view class="title">申述类型</view>
					<input type="text" v-model="representationType" placeholder="请输入申述方式" />
				</view>
				<view class="edit_item">
					<view class="title">逾期次数</view>
					<input type="text" v-model="num" placeholder="请输入逾期次数" />
				</view>
				<view class="edit_item">
					<view class="title">逾期时间</view>
					<input type="text" v-model="time" placeholder="请输入逾期时间" />
				</view>
				<view class="edit_item">
					<view class="title">预计成功率</view>
					<input type="text" v-model="successRate" placeholder="请输入预计成功率" />
				</view>
				<view class="edit_item">
					<view class="title">服务费用</view>
					<input type="text" v-model="successRate" placeholder="请输入服务费用" />
				</view>
				<view class="edit_item">
					<view class="title">评估结果</view>
					<input type="text" v-model="successRate" placeholder="请输入评估难易程度" />
				</view>
				<view class="edit_item">
					<view class="title">订单状态</view>
					<input type="text" v-model="successRate" placeholder="请输入订单状态" />
				</view>
				<view class="textarea_list">
					<view class="title">备注</view>
					<textarea placeholder="请填写备注" v-model="remark"></textarea>
				</view>
				<view class="textarea_list">
					<view class="title">客户诉求</view>
					<textarea placeholder="请填写客户诉求" v-model="request"></textarea>
				</view>
				<view class="textarea_list">
					<view class="title">评估师建议</view>
					<textarea placeholder="请填写评估师建议" v-model="advise"></textarea>
				</view>
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
					<view class="title">业务类型</view>
					<view class="item_content">车贷逾期</view>
				</view>
				<view class="edit_item">
					<view class="title">申述类型</view>
					<view class="item_content">电话</view>
				</view>
				<view class="edit_item">
					<view class="title">逾期次数</view>
					<view class="item_content">8次</view>
				</view>
				<view class="edit_item">
					<view class="title">逾期时间</view>
					<view class="item_content2">2019年8月25日 12:58:34</view>
				</view>
				<view class="edit_item">
					<view class="title">预计成功率</view>
					<view class="item_content">95%</view>
				</view>
				<view class="edit_item">
					<view class="title">服务费用</view>
					<view class="item_content">2000元</view>
				</view>
				<view class="edit_item">
					<view class="title">评估结果</view>
					<view class="item_content">容易</view>
				</view>
				<view class="edit_item">
					<view class="title">订单状态</view>
					<view class="item_content">正在处理</view>
				</view>
				<view class="edit_item2">
					<view class="title">备注</view>
					<view class="MsoNormal">2020年逾期记录没有处理，2018年逾期记录有一些问题，还没有解决，需要你们顺便帮忙解决好。</view>
				</view>
				<view class="edit_item2">
					<view class="title">客户诉求</view>
					<view class="MsoNormal">希望2016，2017，2018，2019，2020的18项逾期记录都可以处理好，把记录消除。有些比较难消除的愿意等多两年内处理好，有问题可以再联系。</view>
				</view>
				<view class="edit_item2">
					<view class="title">评估师建议</view>
					<view class="MsoNormal">信用评估是一个第三方评估，必须有评估公司营业执照，并且有一定数量的评估师，根据国家或国际标准评估，最好在中国人民银行备案，这样的评估公司才够权威，河南好像有几家评估公司不错，鼎盛，大安，诚信，等，具体得上工商局网站上查，看看评估公司注册信息，注册资金500万以上的评估公司比较好点，申请信用等级评估最好早专业的公司，一般河南评估公司都在郑州</view>
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
	export default {
		data() {
			return {
				editOrNot:false,
				error:false,
				success:false
			}
		},
		methods: {
			
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
	}
	.textarea_list{
		padding: 0 30upx;
		border-bottom: 1px #e8ebf2 solid;
		.title{
			font-size: 28upx;
			height: 60upx;
			line-height: 60upx;
			flex: 3;
			color: #282828;
		}
		textarea {
			width: 100%;
			height: 200upx;
			background-color: #fbfbfb;
			padding: 10upx 0 0 0;
			font-size: 25upx;
			margin-bottom: 20upx;
			color: #999999;
		}
	}
	.edit_item2{
		padding: 0 30upx 20upx 30upx;
		background-color: #fff;
		border-bottom: 1px #e8ebf2 solid;
		.title{
			font-size: 30upx;
			height: 80upx;
			line-height: 80upx;
			color: #282828;		
		}
		.MsoNormal{
			display: block;
			margin: 0 auto;
			color: #999;
			text-align: justify;
			line-height: 35upx;
			font-size: 25upx;
			margin-block-end: 0.3em;
		}
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