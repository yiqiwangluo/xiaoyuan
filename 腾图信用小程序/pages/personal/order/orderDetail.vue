<template>
	<view>
		<view class="order_top">
			<view class="order_item">
				<view class="title">姓名</view>
				<view class="item_content">李国健</view>
			</view>
			<view class="order_item">
				<view class="title">手机号码/变更的手机号码</view>
				<view class="item_content">13823812345</view>
			</view>
		</view>
		<view class="order_bottom">
			<view class="order_item">
				<view class="title">业务类型</view>
				<view class="item_content">车贷逾期</view>
			</view>
			<view class="order_item">
				<view class="title">申述类型</view>
				<view class="item_content">电话</view>
			</view>
			<view class="order_item">
				<view class="title">逾期次数</view>
				<view class="item_content">8次</view>
			</view>
			<view class="order_item">
				<view class="title">逾期时间</view>
				<view class="item_content">2019年8月25日 12:58:34</view>
			</view>
			<view class="order_item">
				<view class="title">预计成功率</view>
				<view class="item_content">95%</view>
			</view>
			<view class="order_item">
				<view class="title">服务费用</view>
				<view class="item_content">2000元</view>
			</view>
			<view class="order_item">
				<view class="title">评估结果</view>
				<view class="item_content">容易</view>
			</view>
			<view class="order_item">
				<view class="title">订单状态</view>
				<view class="item_content">正在处理</view>
			</view>
			<view class="order_item2">
				<view class="title">备注</view>
				<view class="MsoNormal">2020年逾期记录没有处理，2018年逾期记录有一些问题，还没有解决，需要你们顺便帮忙解决好。</view>
			</view>
			<view class="order_item2">
				<view class="title">客户诉求</view>
				<view class="MsoNormal">希望2016，2017，2018，2019，2020的18项逾期记录都可以处理好，把记录消除。有些比较难消除的愿意等多两年内处理好，有问题可以再联系。</view>
			</view>
			<view class="order_item2">
				<view class="title">评估师建议</view>
				<view class="MsoNormal">信用评估是一个第三方评估，必须有评估公司营业执照，并且有一定数量的评估师，根据国家或国际标准评估，最好在中国人民银行备案，这样的评估公司才够权威，河南好像有几家评估公司不错，鼎盛，大安，诚信，等，具体得上工商局网站上查，看看评估公司注册信息，注册资金500万以上的评估公司比较好点，申请信用等级评估最好早专业的公司，一般河南评估公司都在郑州</view>
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
			
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
	}
	.order_top{
		background-color: #fff;	
	}
	.order_bottom{
		margin-top: 30upx;
		background-color: #fff;
	}
	.order_item{
		height: 90upx;
		padding: 0 30upx;
		display: flex;
		background-color: #fff;
		border-bottom: 1px #e8ebf2 solid;
		.title{
			font-size: 30upx;
			height: 90upx;
			line-height: 90upx;
			flex: 6;
			color: #282828;		
		}
		.item_content{
			flex: 6;
			font-size: 28upx;
			height: 90upx;
			line-height: 90upx;
			display: inline-block;
			text-align: right;
			color: #999999;
		}
	}
	.order_item2{
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
</style>
