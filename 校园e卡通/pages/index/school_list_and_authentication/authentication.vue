<template>
	<view class="authentication_box">
		<!-- 学校信息盒子 -->
		<view class="school_msg_box" style="background-image: url(../../../static/images/school_list_images/school_msg_backgroundImage.png);">
			<!-- 学校logo及名称盒子 -->
			<view class="school_msg">
				<!-- logo图片 -->
				<view class="school_logo_box"><image :src="school_msg.logo" /></view>
				<!-- 学校名称 -->
				<view class="school_name">{{ school_msg.name }}</view>
			</view>
			<!-- 验证状态 -->
			<view class="verify_state">待验证</view>
		</view>
		<!-- 表单盒子 -->
		<view class="form_box">
			<!-- 学工号 -->
			<form-card icon="../../static/images/school_list_images/list.png" placeholder="请输入学工号" :value.sync="id" />
			<!-- 校园卡密码 -->
			<form-card v-show="form_item_show" icon="../../static/images/school_list_images/lock.png" placeholder="请输入校园卡密码" inputType="password" :value.sync="password" />
			<!-- 姓名 -->
			<form-card v-show="form_item_show" icon="../../static/images/school_list_images/person.png" placeholder="请输入姓名" :value.sync="name" />
		</view>
		<!-- 相关协议 -->
		<view class="protocol">
			<!-- 已阅读并同意协议的选框 -->
			<checkbox-group class="checkbox_box" @change="agree_protocol = !agree_protocol"><checkbox :value="agree_protocol" style="transform: scale(0.8);" /></checkbox-group>
			<!-- 说明文字 -->
			<text>
				本人已阅读并同意以下内容
				<text style="color: rgb(40,111,201);">《中国建设银行股份有限公司隐私政策》</text>
				和
				<text style="color: rgb(40,111,201);">《电子校园卡开通协议》</text>
			</text>
		</view>
		<!-- 提交按钮 -->
		<button class="btn" @click="verify">验证</button>
		<!-- 可输入值的弹框 -->
		<my-prompt v-show="show_prompt" :show_prompt.sync="show_prompt" title="请输入手机验证码" :value.sync="prompt_value" @inputDone="inputDone" />
	</view>
</template>

<script>
// 引入表单框组件
import formCard from '../../../components/school_list-components/form_card.vue';
// 引入可输入内容的弹框组件
import myPrompt from '../../../components/school_list-components/my_prompt.vue';
export default {
	data() {
		return {
			// 学校信息
			school_msg: {},
			// 学工号
			id: '',
			// 校园卡密码
			password: '',
			// 姓名
			name: '',
			// 是否同意相关协议
			agree_protocol: false,
			// 控制校园卡密码和姓名这两个表单框显示隐藏的变量
			form_item_show: false,
			// 是否显示prompt弹框
			show_prompt: false,
			// prompt弹框的返回值
			prompt_value: '',
		};
	},
	components: {
		// 注册表单框组件
		formCard,
		// 注册可输入值得弹框组件
		myPrompt
	},
	methods: {
		// 验证按钮的点击事件
		verify() {
			// 学号填写完毕，勾选阅读并同意协议时显示 校园卡密码和 姓名 的表单框
			if (this.id.trim().length !== 0 && this.agree_protocol === true) {
				this.form_item_show = true;
			} else if (this.id.trim().length === 0) {
				// 学工号为空提示
				uni.showToast({
					title: '学工号不能为空',
					icon: 'none'
				});
			} else if (this.agree_protocol === false) {
				// 未勾选同意协议按钮提示
				uni.showToast({
					title: '请先阅读并同意相关协议',
					icon: 'none'
				});
			}
		},
		// 弹框输入完成后的回调函数
		inputDone() {
			console.log(this.prompt_value);
		}
	},
	onLoad(options) {
		// 接受学校列表页面传过来的参数
		let res = JSON.parse(decodeURIComponent(options.school));
		// 赋值给页面
		this.school_msg = res;
	}
};
</script>

<style lang="less" scoped>
// 身份验证最外层盒子
.authentication_box {
	min-height: 100vh;
	background-color: #f8f8f8;
	overflow: hidden;
	// 学校信息盒子
	.school_msg_box {
		width: 645rpx;
		height: 416rpx;
		display: flex;
		color: #ffffff;
		margin: 0 auto;
		margin-top: 56rpx;
		border-radius: 17rpx;
		flex-direction: column;
		justify-content: space-between;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 0, 0;
		margin-bottom: 22rpx;
		// 学校信息
		.school_msg {
			display: flex;
			align-items: center;
			padding-left: 29rpx;
			margin-top: 21rpx;
			// 学校logo图片外层盒子
			.school_logo_box {
				width: 74rpx;
				height: 74rpx;
				background-color: #ffffff;
				// 学校logo图片
				image {
					width: 60rpx;
					height: 41rpx;
					margin: 16rpx auto;
					display: block;
				}
			}
			// 学校名称
			.school_name {
				margin-left: 26rpx;
			}
		}
		// 验证状态
		.verify_state {
			text-align: center;
			letter-spacing: 1rpx;
			margin-bottom: 37rpx;
		}
	}
	// 表单盒子
	.form_box {
		width: 650rpx;
		margin: 0 auto;
	}
	// 相关协议
	.protocol {
		width: 693rpx;
		height: 75rpx;
		margin: 0 auto;
		// 同意选框
		.checkbox_box {
			display: inline-block;
		}
	}
	// 验证按钮
	.btn {
		width: 706rpx;
		height: 80rpx;
		border-radius: 24rpx;
		background-color: rgb(40, 111, 201);
		color: #ffffff;
		margin-top: 43rpx;
	}
	// 点击验证按钮时的反馈，增加按钮30%的灰度
	.btn:active {
		filter: grayscale(30%);
	}
}
</style>
