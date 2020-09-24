<!--
 * @Author: LF
 * @Description: 此组件用于模拟HTML中的prompt功能（带输入框的弹框）
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:07:27
-->
<template>
	<!-- 外部灰色遮罩层 -->
	<view class="my_prompt">
		<view class="gray_shade"></view>
		<!-- 弹框盒子 -->
		<view class="prompt_box">
			<!-- 标题 -->
			<view class="title">{{ title }}</view>
			<!-- 输入框 -->
			<view class="input_box"><input type="text" :value="value" @input="valueChange" /></view>
			<!-- 底部按钮 -->
			<view class="btn_area">
				<!-- 取消按钮 -->
				<view class="cancel_btn" @click="hidePrompt">取消</view>
				<!-- 确认按钮 -->
				<view class="confirm_btn" @click="confirm">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 弹框标题
		title: {
			require: true,
			type: String
		},
		// 是否显示此组件
		show_prompt: {
			require: true,
			type: Boolean
		},
		// 输入框的值
		value: {
			require: true,
			type: String
		}
	},
	methods: {
		// 点击取消按钮时，关闭弹框和遮罩层
		hidePrompt() {
			this.$emit('update:show_prompt', false);
		},
		// 输入框的值发生变化时改变父组件中对应的值
		valueChange(event) {
			this.$emit('update:value', event.target.value);
		},
		// 点击确定按钮时，隐藏弹框并返回文本框中的值
		confirm() {
			this.hidePrompt();
			this.$emit('inputDone');
		}
	},
	watch: {
		// 监控弹框的显示隐藏
		show_prompt(newValue, oldValue) {
			// 当弹框显示出来时，将输入框的值清空
			if(newValue){
				this.$emit('update:value', '');
			}
		}
	},
};
</script>

<style lang="less" scoped>
.my_prompt {
	// 灰色遮罩层
	.gray_shade {
		width: 100%;
		min-height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}
	// 消息框盒子
	.prompt_box {
		width: 620rpx;
		height: 355rpx;
		background-color: #ffffff;
		border-radius: 24rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;
		transform: translate(-50%, -50%);
		// 消息框标题
		.title {
			text-align: center;
			margin-top: 55rpx;
			font-size: 32rpx;
		}
		// 输入框盒子
		.input_box {
			width: 463rpx;
			height: 70rpx;
			border: 1rpx solid rgba(4, 0, 0, 0.42);
			margin: 45rpx auto;
			// 输入框
			input {
				width: 100%;
				height: 100%;
				display: block;
				text-indent: 10rpx;
			}
		}
		// 底部按钮区域
		.btn_area {
			width: 100%;
			height: 107rpx;
			display: flex;
			align-items: center;
			border-top: 1rpx solid #999999;
			// 确认按钮和取消按钮
			.cancel_btn,
			.confirm_btn {
				width: 50%;
				text-align: center;
				line-height: 107rpx;
			}
			// 取消按钮特殊样式
			.cancel_btn {
				border-right: 1rpx solid #999999;
				color: rgb(153, 153, 153);
			}
		}
	}
}
</style>
