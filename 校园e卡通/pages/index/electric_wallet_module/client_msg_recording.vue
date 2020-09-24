<!--
 * @Author: LF
 * @Description: 用户信息补录页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-24 10:09:05
-->
<template>
    <view class="page_box">
        <!-- 顶部文字 -->
        <view class="top_text">身份信息</view>
        <!-- 信息区域 -->
        <view class="person_msg">
            <view class="item name">
                <text class="key">姓名</text>
                <text class="value">{{ person_msg.name }}</text>
            </view>
            <view class="item class">
                <text class="key">专业班级</text>
                <text class="value">{{ person_msg.class }}</text>
            </view>
            <view class="item id_num">
                <text class="key">身份证号码</text>
                <text class="value">{{ idCard_first_paragraph }}****{{ idCard_last_paragraph }}</text>
            </view>
        </view>
        <!-- 提交按钮 -->
        <btn title="确定" @click.native="btnClick" />
    </view>
</template>

<script>
// 引入按钮组件
import btn from '../../../components/electric_wallet-components/btn.vue'
export default {
    components: {
        btn
    },
    data() {
        return {
            person_msg: {
                // 姓名
                name: '陈思宇',
                // 专业班级
                class: '幼师5班',
                // 身份证号码
                id_num: '441402199909290418'
            }
        }
    },
    methods: {
        // 提交按钮的点击事件
        btnClick() {
            uni.showModal({
                title: '要素齐全，证件未过期，不需要补录'
            })
        }
    },
    computed: {
        // 身份证前4位
        idCard_first_paragraph() {
            return this.person_msg.id_num.substr(0, 4)
        },
        // 身份证后4位
        idCard_last_paragraph() {
            return this.person_msg.id_num.substr(-4, 4)
        }
    }
}
</script>

<style lang="less" scoped>
.page_box {
    // 顶部文字
    .top_text {
        height: 71rpx;
        line-height: 71rpx;
        padding-left: 28rpx;
        color: rgb(51, 51, 51);
        font-size: 32rpx;
        background-color: rgb(248, 248, 248);
        border: 1rpx solid rgb(153, 153, 153);
        border-left: none;
        border-right: none;
    }
    // 个人信息区域
    .person_msg {
        font-size: 32rpx;
        .item {
            height: 96rpx;
            padding-left: 21rpx;
            display: flex;
            align-items: center;
            border-bottom: 2rpx solid rgb(248, 248, 248);
            .key {
                color: rgb(51, 51, 51);
            }
            .value {
                color: rgb(102, 102, 102);
                margin-left: 145rpx;
            }
        }
        .class > .value {
            margin-left: 80rpx;
        }
        .id_num > .value {
            margin-left: 47rpx;
        }
    }
}
</style>
