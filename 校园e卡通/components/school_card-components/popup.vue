<!--
 * @Author: LF
 * @Description: 此组件是通用的带icon图标的信息弹出框
 * @Date: 2020-09-25 16:00:33
 * @LastEditTime: 2020-09-25 17:22:53
-->
<template>
    <view class="popup" v-if="is_show">
        <view class="popup-window">
            <view class="popup_icon">
                <image :src="imgSrc" mode="aspectFill"></image>
            </view>
            <view class="popup_content">{{ title }}</view>
            <view class="popup_btn">
                <view class="popup_btn_close" @click="hidePopup">{{ cancel_text }}</view>
                <view class="popup_btn_ok" @click="hidePopup">{{ confirm_text }}</view>
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
        // 弹框状态（笑脸/苦脸）
        status: {
            require: true,
            type: String
        },
        // 确认按钮文字
        confirm_text: {
            default: '确认',
            type: String
        },
        // 取消按钮文字
        cancel_text: {
            default: '取消',
            type: String
        },
        // 显示状态
        is_show: {
            require: true,
            type: Boolean
        }
    },
    methods: {
        // 隐藏弹框
        hidePopup() {
            this.$emit('update:is_show', false)
        }
    },
    computed: {
        // 根据弹框状态返回图片地址
        imgSrc() {
            if (this.status == 'success') {
                return 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/success.png'
            } else if (this.status == 'error') {
                return 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_card_images/error.png'
            }
        }
    }
}
</script>

<style lang="less" scoped>
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