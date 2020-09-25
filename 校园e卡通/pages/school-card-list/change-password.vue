<!--
 * @Author: LF
 * @Description: 修改密码页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-25 15:11:45
-->
<template>
    <view class="top">
        <view class="white"></view>
        <view class="content">
            <view class="old-password">
                <view class="left">
                    <text class="old_label">原密码</text>
                </view>
                <view class="right">
                    <input class="password" type="text" value="" placeholder="原始密码中X用O代替" />
                </view>
            </view>
            <view class="old-password">
                <view class="left">
                    <text class="old_label">新密码</text>
                </view>
                <view class="right">
                    <input class="password" type="text" value="" placeholder="填写6位新查询密码" />
                </view>
            </view>
            <view class="old-password">
                <view class="left">
                    <text class="old_label">确认密码</text>
                </view>
                <view class="right">
                    <input class="password" type="text" value="" placeholder="确认新查询密码" />
                </view>
            </view>
        </view>

        <view class="botton">
            <view class="button" @click="submit()">提交</view>
        </view>

        <view class="popup" v-if="success">
            <view class="popup-window">
                <view class="popup_icon">
                    <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/success.png" mode="aspectFill"></image>
                </view>
                <view class="popup_content"> 修改查询密码成功 </view>
                <view class="popup_btn">
                    <view class="popup_btn_close" @click="success = false">取消</view>
                    <view class="popup_btn_ok" @click="success = false">确定</view>
                </view>
            </view>
        </view>
        <view class="popup" v-if="fail">
            <view class="popup-window">
                <view class="popup_icon">
                    <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/error.png" mode="aspectFill"></image>
                </view>
                <view class="popup_content"> 修改失败，信息不全/错误 </view>
                <view class="popup_btn">
                    <view class="popup_btn_close" @click="fail = false">取消</view>
                    <view class="popup_btn_ok" @click="fail = false">确定</view>
                </view>
            </view>
        </view>
    </view>
</template>



<script>
export default {
    data() {
        return {
            success: false,
            fail: true
        }
    },
    methods: {
        submit() {
            this.success = true
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

        .old-password {
            width: 100%;
            height: 92rpx;
            opacity: 0.5;
            border-bottom: 1rpx solid rgb(153, 153, 153);

            .left {
                width: 35%;
                float: left;

                .old_label {
                    margin-left: 30rpx;
                    margin-top: 31rpx;
                    display: block;
                }
            }

            .right {
                width: 60%;
                float: right;

                .password {
                    margin-top: 20rpx;
                    color: rgb(153, 153, 153);
                }
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
}

.popup {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;

    .popup-window {
        width: 80%;
        background: #ffffff;
        border-radius: 24rpx;
        margin-left: 10%;
        margin-top: 35%;

        .popup_icon {
            margin: 0 auto;
            text-align: center;

            image {
                display: inline-block;
                width: 64rpx;
                height: 64rpx;
                margin-top: 70rpx;
                margin-bottom: 30rpx;
            }
        }

        .popup_content {
            padding: 0;
            font-size: 32rpx;
            color: #333;
            text-align: center;
            margin-bottom: 46rpx;
        }

        .popup_btn {
            width: 100%;
            font-size: 32rpx;
            border-top: #edf0f7 1rpx solid;
            text-align: center;
            display: table;

            .popup_btn_close {
                padding: 40rpx 0;
                width: 49%;
                color: #999999;
                line-height: 32rpx;
                border-right: #edf0f7 1rpx solid;
                float: left;
            }

            .popup_btn_ok {
                padding: 40upx 0;
                width: 49%;
                color: #000;
                line-height: 32rpx;
                float: left;
            }
        }
    }
}
</style>
