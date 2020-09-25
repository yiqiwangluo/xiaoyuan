<!--
 * @Author: LF
 * @Description: 流水查询页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-25 15:11:00
-->
<template>
    <view class="content">
        <view class="top-banner">
            <view class="balance">
                <view class="recharge" :class="{ active: isClick == 1 }" @click="addActive()">充值</view>
                <view class="fee" :class="{ active: isClick == 2 }" @click="addActiveClick()">消费</view>
            </view>
        </view>
        <view class="top">
            <view class="query">{{ date }}</view>
            <view class="select uni-list-cell-db">
                <view class="select-left">日期筛选</view>
                <view class="select-right">
                    <picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                        <view class="uni-input">
                            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_list_images/left_arrow.png" class="right_arrow" />
                        </view>
                    </picker>
                </view>
            </view>
        </view>
        <!-- 消费记录 -->
        <transaction-card
            consumption_type="消费"
            consumption_time="2020-07-02 15:48:15"
            consumption_money="12"
            discounts_money="0"
            consumption_id="1584987879845487487894"
            consumption_account="8484564684784878"
            merchant_name="梅州市职业技术学校"
            v-if="showTrue"
        />
        <transaction-card
            consumption_type="充值"
            consumption_time="2020-07-02 15:48:15"
            consumption_money="58"
            discounts_money="0"
            consumption_id="1584987879845487487894"
            consumption_account="8484564684784878"
            merchant_name="梅州市职业技术学校"
            v-if="showFalse"
        />
        <transaction-card
            consumption_type="缴费"
            consumption_time="2020-07-02 15:48:15"
            consumption_money="200"
            v-if="showTrue"
            discounts_money="0"
            consumption_id="1584987879845487487894"
            consumption_account="8484564684784878"
            merchant_name="梅州市职业技术学校"
        />
        <transaction-card
            consumption_type="房租"
            consumption_time="2020-07-02 15:48:15"
            consumption_money="1000"
            v-if="showTrue"
            discounts_money="0"
            consumption_id="1584987879845487487894"
            consumption_account="8484564684784878"
            merchant_name="梅州市职业技术学校"
        />
        <transaction-card
            consumption_type="水电"
            consumption_time="2020-07-02 15:48:15"
            consumption_money="400"
            v-if="showTrue"
            discounts_money="0"
            consumption_id="1584987879845487487894"
            consumption_account="8484564684784878"
            merchant_name="梅州市职业技术学校"
        />
    </view>
</template>

<script>
// 引入消费卡片组件
import transactionCard from '../../components/electric_wallet-components/transaction_card.vue'

export default {
    data() {
        const currentDate = this.getDate({
            format: true
        })
        return {
            title: 'picker',
            date: currentDate,
            isClick: '0',
            showTrue: true,
            showFalse: true
        }
    },
    components: {
        transactionCard
    },
    computed: {
        startDate() {
            return this.getDate('start')
        },
        endDate() {
            return this.getDate('end')
        }
    },
    methods: {
        bindDateChange: function (e) {
            this.date = e.target.value
        },

        getDate(type) {
            const date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1

            if (type === 'start') {
                year = year - 60
            } else if (type === 'end') {
                year = year + 2
            }
            month = month > 9 ? month : '0' + month

            return `${year}年${month}月`
        },

        addActive() {
            this.isClick = 1
            this.showFalse = true
            this.showTrue = false
        },

        addActiveClick() {
            this.isClick = 2
            this.showTrue = true
            this.showFalse = false
        }
    }
}
</script>


<style lang="less" scoped>
.content {
    font-family: PingFang-SC-Medium;

    .top-banner {
        width: 100%;
        height: 80rpx;

        .balance {
            width: 360rpx;
            height: 80rpx;
            margin: 19rpx auto;

            .recharge {
                width: 129rpx;
                height: 52rpx;
                border: 2rpx solid rgba(153, 153, 153, 0.5);
                font-size: 32rpx;
                line-height: 45rpx;
                text-align: center;
                color: rgb(167, 167, 167);
                float: left;
                border-radius: 16rpx;
            }

            .fee {
                width: 129rpx;
                height: 52rpx;
                border: 2rpx solid rgba(153, 153, 153, 0.5);
                font-size: 32rpx;
                line-height: 45rpx;
                text-align: center;
                color: rgb(167, 167, 167);
                float: right;
                border-radius: 16rpx;
            }

            .active {
                color: rgb(255, 255, 255);
                background-color: rgb(40, 111, 201);
            }
        }
    }

    .top {
        width: 100%;
        height: 42rpx;
        border-bottom: 1rpx solid rgb(238, 238, 238);
        font-size: 28rpx;

        .query {
            float: left;
            margin-left: 20rpx;
            color: rgb(40, 111, 201);
        }

        .select {
            float: right;
            margin-right: 20rpx;
            color: rgb(51, 51, 51);

            .select-left {
                float: left;
            }

            .select-right {
                float: right;

                .right_arrow {
                    width: 35rpx;
                    height: 20rpx;
                    transform: rotate(270deg);
                }
            }
        }
    }
}
</style>
