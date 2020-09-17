<template>
	<view>
		<view class="problem_box" v-for="(item,index) in problemList" :key="index">
			<view class="problem_content">
				<image class="problem_logo" src="../../static/images/service/question.png" mode="aspectFill"></image>
				<view class="problem_body">
					<view class="problem_text">{{item.questionText}}</view>
				</view>
			</view>
			<view class="problem_content">
				<image class="problem_logo" src="../../static/images/service/answer.png" mode="aspectFill"></image>
				<view class="problem_body">
					<view class="problem_text">{{item.answerText}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				problemList:[
					{
						questionText:'使用校园卡账户卡片充值之后，校园卡未到账是什么原因呢？',
						answerText:'校园卡充值过程中可能受到一卡通系统内部网络的影响出现异常，后台会在一个小时内异步冲正，请再次查询结果。如果24小时后仍然未到账，请将缴费详情截图、姓名、另外,推荐您后续可使用钱包支付二维码消费，可以获得更稳定的体验。'
					},
					{
						questionText:'开通电子钱包时，发短信验证码到了旧的手机号，如何更改?',
						answerText:'验证码发送至您银行卡开户签约的手机号，如果您换了手机号码，需要到开卡行的营业厅更新预留手机号后，再将更新手机号发给在线客服处理。'
					},
					{
						questionText:'校园卡挂失之后，如何将旧卡中的钱转到新卡呢?',
						answerText:'请联系学校卡务中心将旧卡的钱转到新卡。'
					},
					{
						questionText:'凌晨进行卡片充值时，提示“无法处理您的请求"?',
						answerText:'凌晨是一卡通的日结时间，暂停了服务，请在早上重试。'
					},
					{
						questionText:'卡片充值时，发短信验证码到了旧的手机号，如何更改?',
						answerText:'验证码发送至您银行卡开户签约的手机号，如果您换了手机号码，需要到开卡行的营业厅更新预留手机号后，再将更新手机号发给在线客服处理。'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.problem_box{
	background-color: #fff;
	padding: 49rpx 50rpx 1rpx 22rpx;
	border-top: 32rpx solid #eee;
	.problem_content{
		margin-bottom: 52rpx;
		.problem_logo{
			float: left;
			width: 56rpx;
			height: 57rpx;
			margin-right: 8px;
		}
		.problem_body{
			height: auto;
			justify-content: space-between;
			align-items: flex-start;
			overflow: hidden;
			.problem_text{
				font-size: 30rpx;
				color: #000;
				font-family: PingFang-SC-Medium;
				line-height: 50rpx;
				text-align: justify;
			}
		}
	}
}
.problem_box:nth-child(1){
	border-top: none;
}
</style>
