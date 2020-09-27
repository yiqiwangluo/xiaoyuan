<!--
 * @Author: LF
 * @Description: 卡片充值页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-26 09:01:55
-->
<template>
    <view class="top">
        <view class="top-banner"><view class="balance">微信支付</view></view>
        <view class="white"></view>

        <view class="center">
            <view class="content"><view class="banner">充值金额(元)</view></view>
            <view class="amount">
                <text class="text">￥</text>
                <text class="text">{{ price }}</text>
            </view>
            <view class="price">
                <view class="price-center">
                    <view class="price-number" :class="{ active: isChange == index }" v-for="(item, index) in list" :key="index" @click="click(index, item)">{{ item }}元</view>
                </view>
            </view>
            <btn title="提交" @click.native="submit" />
            <popup :title="title" :status="status" :is_show.sync="is_show" />
        </view>
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
            title: '校园卡充值成功', // 电子钱包/银行卡余额不足，充值失败
            status: 'success',
            is_show: false,
            price: '',
            isChange: '-1',
            list: ['50', '100', '150', '200']
        }
    },
    methods: {
        click(index, item) {
            if (index != this.isChange) {
                this.isChange = index
                this.price = item
            } else {
                this.isChange = -1
            }
        },

        submit() {
            this.is_show = true
        }
    }
}
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    height: 100vh;
    font-family: PingFang-SC-Medium;
    letter-spacing: 1rpx;
    color: rgb(51, 51, 51);

    .top-banner {
        width: 100%;
        height: 50rpx;

        .balance {
            margin-left: 30rpx;
            font-size: 28rpx;
            line-height: 42rpx;
        }
    }

    .white {
        width: 100%;
        height: 15rpx;
        background-color: #f8f8f8;
    }

    .center {
        width: 100%;

        .content {
            width: 706rpx;
            margin: 22rpx auto;

            .banner {
                font-size: 32rpx;
                margin-left: 8rpx;
                line-height: 32rpx;
            }
        }

        .amount {
            width: 706rpx;
            height: 80rpx;
            margin: 22rpx auto;
            border-bottom: 1rpx solid rgb(153, 153, 153);
            font-size: 56rpx;
            font-family: PingFang-SC-Bold;

            .text {
                display: block;
                float: left;
            }

            .inpt {
                display: block;
                float: right;
            }
        }

        .price {
            .price-center {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 30rpx;
                .price-number {
                    flex: 0 0 18%;
                    width: 118rpx;
                    height: 101rpx;
                    border: 2rpx solid rgb(102, 102, 102);
                    border-radius: 10rpx;
                    font-size: 28rpx;
                    color: rgb(51, 51, 51);
                    text-align: center;
                    line-height: 100rpx;
                }
                .active {
                    color: rgb(255, 255, 255);
                    border: 2rpx solid rgb(102, 102, 102);
                    background-color: rgb(40, 111, 201);
                }
            }
        }
    }
}
</style>