<!--
 * @Author: LF
 * @Description: 修改密码页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-26 09:10:25
-->
<template>
    <view class="top">
        <view class="white"></view>
        <view class="content">
            <view class="old-password">
                <view class="left"><text class="old_label">原密码</text></view>
                <view class="right"><input class="password" type="text" value="" placeholder="原始密码中X用O代替" /></view>
            </view>
            <view class="old-password">
                <view class="left"><text class="old_label">新密码</text></view>
                <view class="right"><input class="password" type="text" value="" placeholder="填写6位新查询密码" /></view>
            </view>
            <view class="old-password">
                <view class="left"><text class="old_label">确认密码</text></view>
                <view class="right"><input class="password" type="text" value="" placeholder="确认新查询密码" /></view>
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
            is_show: false,
            title: '修改查询密码成功', // 修改失败，信息不全/错误
            status: 'success'
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
}
</style>
