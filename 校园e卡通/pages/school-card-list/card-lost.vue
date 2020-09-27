<!--
 * @Author: LF
 * @Description: 卡片挂失页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-27 18:09:54
-->
<template>
    <view class="top">
        <view class="white"></view>
        <view class="content">
            <view class="content-details">
                <view class="left">
                    <text class="left-text">姓名</text>
                </view>
                <view class="right">
                    <text class="right-text">{{ name }}</text>
                </view>
            </view>
            <view class="content-details">
                <view class="left">
                    <text class="left-text">卡号/学号</text>
                </view>
                <view class="right">
                    <text class="right-text">{{ cardName }}</text>
                </view>
            </view>
            <view class="content-details">
                <view class="left">
                    <text class="left-text">当前状态</text>
                </view>
                <view class="right">
                    <text class="right-text">{{ status_text }}</text>
                </view>
            </view>
        </view>

        <view class="old-password">
            <view class="left">
                <text class="old_label">密码</text>
            </view>
            <view class="right">
                <input class="password" type="text" value="" placeholder="请填写6位查询密码" />
            </view>
        </view>

        <view class="tip">
            <view class="tip-details">提醒:查询密码默认身份证后六位，X用0代替</view>
        </view>

        <btn title="提交" @click.native="submit" />
        <popup :title="title" :status="status" :is_show.sync="is_show" />
    </view>
</template>



<script>
// 引入带icon图标的弹框组件
import popup from '../../components/school_card-components/popup.vue'
// 引入按钮组件
import btn from '../../components/electric_wallet-components/btn.vue'
export default {
    components: {
        popup,
        btn
    },
    data() {
        return {
            name: '陈设额',
            cardName: '185944647',
            status_text: '正常',
            title: '卡挂失成功', // 卡挂失失败，信息不全/错误
            status: 'success',
            is_show: false
        }
    },
    methods: {
        submit() {
            this.is_show = true
        }
    }
}
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    font-size: 32rpx;
    font-family: PingFang-SC-Medium;
    letter-spacing: 1rpx;

    .content {
        width: 100%;
        height: 276rpx;
        background-color: rgb(255, 255, 255);

        .content-details {
            width: 100%;
            height: 92rpx;
            border-bottom: 1rpx solid rgb(207, 207, 207);
            display: flex;
            align-items: center;
            .left {
                .left-text {
                    font-size: 32rpx;
                    margin-left: 30rpx;
                    margin-top: 31rpx;
                }
            }
            .right {
                margin-left: auto;
                .right-text {
                    font-size: 32rpx;
                    margin-top: 31rpx;
                    margin-right: 30rpx;
                    color: rgb(102, 102, 102);
                }
            }
        }
    }

    .old-password {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: rgb(255, 255, 255);
        margin-top: 26rpx;
        .left {
            height: 100%;
            .old_label {
                margin-left: 30rpx;
                font-size: 32rpx;
            }
        }
        .right {
            margin-left: 49rpx;
            height: 100%;
            .password {
                height: 100%;
                font-size: 28rpx;
                color: rgb(153, 153, 153);
            }
        }
    }
    .tip {
        margin-top: 30rpx;
        .tip-details {
            margin-left: 30rpx;
            font-size: 26rpx;
            letter-spacing: 1rpx;
            color: rgb(153, 153, 153);
        }
    }
}
</style>