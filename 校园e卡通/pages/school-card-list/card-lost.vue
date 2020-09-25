<!--
 * @Author: LF
 * @Description: 卡片挂失页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-25 18:10:07
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

        <view class="white"></view>

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

        <view class="botton">
            <view class="button" @click="submit">提交</view>
        </view>

        <popup :title="title" :status="status" :is_show.sync="is_show" />
    </view>
</template>



<script>
// 引入带icon图标的弹框组件
import popup from '../../components/school_card-components/popup.vue'
export default {
    components: {
        popup
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

    .white {
        width: 100%;
        height: 15rpx;
        background-color: #f8f8f8;
    }

    .content {
        width: 100%;
        height: 276rpx;
        background-color: rgb(255, 255, 255);

        .content-details {
            width: 100%;
            height: 92rpx;
            border-bottom: 1rpx solid rgb(153, 153, 153);
            opacity: 0.5;

            .left {
                float: left;

                .left-text {
                    margin-left: 30rpx;
                    margin-top: 31rpx;
                    display: block;
                }
            }

            .right {
                float: right;

                .right-text {
                    margin-top: 31rpx;
                    margin-right: 30rpx;
                    color: rgb(102, 102, 102);
                    display: block;
                }
            }
        }
    }

    .old-password {
        width: 100%;
        height: 92rpx;
        background-color: rgb(255, 255, 255);

        .left {
            width: 15%;
            float: left;

            .old_label {
                margin-left: 30rpx;
                margin-top: 31rpx;
                display: block;
            }
        }

        .right {
            width: 80%;
            float: right;

            .password {
                margin-top: 20rpx;
                color: rgb(153, 153, 153);
            }
        }
    }

    .botton {
        margin-top: 44rpx;

        .button {
            width: 706rpx;
            height: 80rpx;
            border-radius: 24rpx 24rpx 24rpx 24rpx;
            margin: 24rpx auto;
            color: rgb(255, 255, 255);
            line-height: 75rpx;
            letter-spacing: 1rpx;
            background-color: rgb(40, 111, 201);
            text-align: center;
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