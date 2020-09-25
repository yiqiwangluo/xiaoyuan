<!--
 * @Author: LF
 * @Description: 提现页面
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-25 15:44:27
-->
<template>
    <!-- 提现页面盒子 -->
    <view class="get_deposit_box">
        <!-- 顶部提示文字 -->
        <view class="alert_text">微信钱包</view>
        <!-- 提现盒子 -->
        <view class="get_deposit">
            <view class="disc_text">提现金额(元)</view>
            <view class="input_box">
                <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/electric_wallet_images/money.png" />
                <input type="text" v-model="value" />
            </view>
            <!-- 余额提现及全部提现按钮 -->
            <view class="money_left_text">
                电子钱包余额￥{{ quota }}元，
                <text @click="value = quota" style="color: rgb(40, 111, 201)">全部提现</text>
            </view>
            <!-- 提交按钮 -->
            <btn title="提现" @click.native="btnClick" />
        </view>
    </view>
</template>

<script>
// 引入按钮组件
import btn from '../../components/electric_wallet-components/btn.vue'
export default {
    components: {
        btn
    },
    data() {
        return {
            // 提现金额
            value: '',
            // 钱包余额
            quota: 235
        }
    },
    methods: {
        btnClick() {
            uni.showModal({
                title: '提现成功'
            })
            // uni.showModal({
            // 	title: '提现失败，提现金额超过钱包余额'
            // });
        }
    }
}
</script>

<style lang="less" scoped>
// 提现页面盒子
.get_deposit_box {
    min-height: 100vh;
    background-color: #f8f8f8;
    // 顶部提示文字
    .alert_text {
        font-size: 28rpx;
        color: rgb(102, 102, 102);
        padding-left: 33rpx;
        height: 72rpx;
        line-height: 72rpx;
    }
    // 提现盒子
    .get_deposit {
        height: 409rpx;
        background-color: #ffffff;

        overflow: hidden;
        // 说明文字
        .disc_text {
            margin-top: 30rpx;
            font-size: 32rpx;
            padding-left: 30rpx;
        }
        // 输入框
        .input_box {
            display: flex;
            align-items: center;
            border-bottom: 1rpx solid rgb(153, 153, 153);
            width: 706rpx;
            margin-top: 48rpx;
            padding-bottom: 40rpx;
            margin-left: 30rpx;
            image {
                width: 32rpx;
                height: 41rpx;
            }
            input {
                padding-left: 20rpx;
                font-size: 42rpx;
            }
        }
    }
    // 电子钱包余额文字
    .money_left_text {
        font-size: 24rpx;
        color: rgb(153, 153, 153);
        margin-top: 20rpx;
        padding-left: 30rpx;
    }
}
</style>
