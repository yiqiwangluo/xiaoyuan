<!--
 * @Author: LF
 * @Description: 卡片余额页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-26 09:07:38
-->
<template>
    <view>
        <view class="card">
            <view class="card-center">
                <view class="centent">
                    <text>校园卡余额(元)</text>
                </view>
                <view class="centent-number">
                    <text>{{ amout }}</text>
                </view>
            </view>
        </view>

        <btn title="充值" @click.native="recharge" />
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
            amout: '800.00'
        }
    },
    methods: {
        recharge() {
            uni.navigateTo({
                url: '/pages/school-card-list/card-recharge'
            })
        }
    }
}
</script>


<style lang="less" scoped>
.card {
    width: 700rpx;
    height: 200rpx;
    background-color: rgb(45, 124, 224);
    /* 不支持线性的时候显示 */
    background-image: linear-gradient(to right, rgb(45, 124, 224), rgb(69, 163, 231));
    margin: 25rpx auto;
    border-radius: 10rpx;

    .card-center {
        padding-top: 45rpx;

        .centent {
            text-align: center;
            color: rgb(255, 255, 255);
            font-size: 28rpx;
            font-family: PingFang-SC-Medium;
        }

        .centent-number {
            text-align: center;
            color: rgb(255, 255, 255);
            padding-top: 15rpx;
            font-family: ArialMT;
            font-weight: bold;
        }
    }
}
</style>
