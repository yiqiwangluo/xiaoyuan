<!--
 * @Author: LF
 * @Description: 修改密码页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-27 17:34:45
-->
<template>
    <view class="top">
        <view class="white"></view>
        <view class="content">
            <view class="password_card">
                <view class="left"><text class="password_label">原密码</text></view>
                <view class="right"><input class="password" type="text" v-model="old_password" placeholder="原始密码中X用O代替" /></view>
            </view>
            <view class="password_card">
                <view class="left"><text class="password_label">新密码</text></view>
                <view class="right"><input class="password" type="text" v-model="password" placeholder="填写6位新查询密码" /></view>
            </view>
            <view class="password_card">
                <view class="left"><text class="password_label">确认密码</text></view>
                <view class="right"><input class="password" type="text" v-model="confirm_password" placeholder="确认新查询密码" /></view>
            </view>
        </view>
        <btn title="提交" @click.native="submit" />
        <popup :is_show.sync="is_show" :title="title" :status="status" />
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
            // 弹框是否显示
            is_show: false,
            // 修改失败，信息不全/错误
            title: '修改查询密码成功',
            // 弹框上的图标，success：笑脸，error：苦脸
            status: 'success',
            // 原密码的值
            old_password: '',
            // 新密码的值
            password: '',
            // 确认密码的值
            confirm_password: ''
        }
    },
    methods: {
        // 提交按钮的点击事件
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
        padding-top: 15rpx;
        background-color: rgb(255, 255, 255);
        .password_card {
            width: 100%;
            height: 92rpx;
            opacity: 0.5;
            display: flex;
            align-items: center;
            border-bottom: 1rpx solid rgb(153, 153, 153);
            .left {
                width: 35%;
                height: 100%;
                .password_label {
                    line-height: 92rpx;
                    font-size: 32rpx;
                    margin-left: 30rpx;
                }
            }
            .right {
                width: 60%;
                height: 100%;
                .password {
                    height: 100%;
                    font-size: 32rpx;
                    color: rgb(153, 153, 153);
                }
            }
        }
    }
}
</style>
