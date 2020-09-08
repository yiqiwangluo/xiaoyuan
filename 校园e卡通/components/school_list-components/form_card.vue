<template>
	<!-- 此组件用于身份验证页面的表单框 -->
	<!-- 表单卡片盒子 -->
	<view class="form_card_box">
		<!-- 输入框前置icon图标 -->
		<image :src="icon" />
		<!-- 输入框 -->
		<input :type="inputType || text" :value="value" :placeholder="placeholder" @input="valueChange" />
	</view>
</template>

<script>
export default {
	props: {
		// 表单框icon图标
		icon: {
			require: true,
			type: String
		},
		// 表单提示文字
		placeholder: {
			require: true,
			type: String
		},
		// 输入框类型
		inputType: {
			type: String
		},
		// 输入框的值
		value: {
			require: true
		}
	},
	methods: {
		// 输入框的值发生变化时，向父组件传递数据
		valueChange(event) {
			this.$emit('update:value', event.target.value);
		}
	}
};
</script>

<style lang="less" scoped>
// 表单框盒子
.form_card_box {
	display: flex;
	align-items: center;
	padding-bottom: 23rpx;
	border-bottom: 1rpx solid #999999;
	margin-bottom: 21rpx;
	// icon图标样式
	image {
		width: 40rpx;
		height: 40rpx;
	}
	// 输入框
	input {
		padding-left: 39rpx;
	}
}
</style>
