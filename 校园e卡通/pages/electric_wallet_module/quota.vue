<!--
 * @Author: LF
 * @Description: 限额页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-29 10:05:34
-->
<template>
    <view class="quota_box">
        <!-- 顶部提示文字 -->
        <view class="alert_text">电子钱包支付限额</view>
        <!-- 限额调整框盒子 -->
        <view class="resize_quota_box">
            <!-- 单笔限额 -->
            <view class="once_quota">
                <text class="explain_text">单笔限额</text>
                <text class="quota_num">{{ once_quota }} 元</text>
            </view>
            <!-- 日累计限额 -->
            <view class="day_quota">
                <text class="explain_text">日累计限额</text>
                <text class="quota_num">{{ day_quota }} 元</text>
            </view>
        </view>
        <!-- 温馨提示 -->
        <view class="warm_prompt">
            <text style="color: rgb(224, 40, 40)">温馨提示：</text>
            <text style="color: rgb(102, 102, 102)">建议您根据自己的消费习惯设置消费限额。该限额仅适用于电子钱包扫码消费(含主扫与被扫)，电子钱包充值、提现不受此限额控制。</text>
        </view>
        <!-- 提交按钮 -->
        <btn title="修改" @click.native="btnClick" />
        <!-- 弹框组件 -->
        <popup :title="title" :status="status" :is_show.sync="is_show" />
    </view>
</template>

<script>
// 引入按钮组件
import btn from '../../components/electric_wallet-components/btn.vue'
// 引入带icon的弹框组件
import popup from '../../components/school_card-components/popup'
export default {
    components: {
        btn,
        popup
    },
    data() {
        return {
            // 单笔限额
            once_quota: 100,
            // 日累计限额
            day_quota: 200,
            // 是否显示弹框
            is_show: false,
            // 弹框标题
            title: '修改成功',
            // 弹框状态
            status: 'success'
        }
    },
    methods: {
        // 点击修改按钮，显示反馈弹框
        btnClick() {
            this.is_show = true
        }
    }
}
</script>

<style lang="less" scoped>
.quota_box {
    width: 100%;
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
    // 限额调整框盒子
    .resize_quota_box {
        & > view {
            background-color: #ffffff;
            display: flex;
            align-items: center;
            height: 92rpx;
            padding-left: 30rpx;
            border-bottom: 1rpx solid rgba(153, 153, 153, 0.5);
            .quota_num {
                margin-left: auto;
                margin-right: 20rpx;
            }
        }
    }
    .explain_text {
        font-size: 32rpx;
        color: rgba(51, 51, 51);
    }
    // 温馨提示
    .warm_prompt {
        margin-top: 22rpx;
        font-size: 24rpx;
        padding: 0 23rpx;
        & > text {
            letter-spacing: 4rpx;
            line-height: 42rpx;
        }
    }
}
</style>