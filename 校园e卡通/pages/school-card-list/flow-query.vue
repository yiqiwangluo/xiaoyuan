<!--
 * @Author: LF
 * @Description: 流水查询页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-27 16:56:48
-->
<template>
    <view class="content">
        <view class="top-banner">
            <view class="balance">
                <view class="recharge" :class="{ active: isClick == 1 }" @click="changeType(1)">充值</view>
                <view class="fee" :class="{ active: isClick == 2 }" @click="changeType(2)">消费</view>
            </view>
        </view>
        <view class="top">
            <view class="query">{{ date }}</view>
            <view class="select uni-list-cell-db">
                <view class="select-left">日期筛选</view>
                <view class="select-right">
                    <picker mode="date" fields="month" :value="date" :end="getDate()" @change="bindDateChange">
                        <view class="uni-input">
                            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/school_list_images/left_arrow.png" class="right_arrow" />
                        </view>
                    </picker>
                </view>
            </view>
        </view>
        <!-- 消费记录 -->
        <transaction-card
            v-for="(item, index) in transaction_data"
            :key="index"
            :consumption_type="item.consumption_type"
            :consumption_time="item.consumption_time"
            :consumption_money="item.consumption_money"
            :discounts_money="item.discounts_money"
            :consumption_id="item.consumption_id"
            :consumption_account="item.consumption_account"
            :merchant_name="item.merchant_name"
            v-show="(isClick === 0 && checkTime(item.consumption_time)) || (item.type === isClick && checkTime(item.consumption_time))"
        />
    </view>
</template>

<script>
// 引入消费卡片组件
import transactionCard from '../../components/electric_wallet-components/transaction_card.vue'

export default {
    components: {
        transactionCard
    },
    data() {
        return {
            // 当前日期
            date: this.getDate(),
            // 查看条件，1为充值，2为消费
            isClick: 0,
            // 交易记录数据
            transaction_data: [
                {
                    type: 2,
                    consumption_type: '消费',
                    consumption_time: '2020-07-02 15:48:15',
                    consumption_money: '12',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487894',
                    consumption_account: '8484564684784878',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    type: 1,
                    consumption_type: '充值',
                    consumption_time: '2020-09-02 12:48:15',
                    consumption_money: '60',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487895',
                    consumption_account: '8484564684784879',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    type: 2,
                    consumption_type: '缴费',
                    consumption_time: '2020-08-06 11:18:15',
                    consumption_money: '200',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487896',
                    consumption_account: '8484564684784879',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    type: 2,
                    consumption_type: '房租',
                    consumption_time: '2020-09-11 15:48:15',
                    consumption_money: '300',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487814',
                    consumption_account: '8484564684784888',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    type: 2,
                    consumption_type: '水电',
                    consumption_time: '2020-09-21 14:48:15',
                    consumption_money: '50',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487891',
                    consumption_account: '8484564684784881',
                    merchant_name: '梅州市职业技术学校'
                }
            ]
        }
    },
    methods: {
        // 将picker组件选择日期返回的值格式化后赋值给页面
        bindDateChange(e) {
            let arr = e.target.value.split('-')
            let res = arr[0] + '年' + arr[1] + '月'
            this.date = res
            this.checkTime()
        },
        // 获取当前日期（格式：YYYY年mm月）
        getDate() {
            const date = new Date()
            let year = date.getFullYear()
            let month = (date.getMonth() + 1).toString().padStart(2, '0')
            return `${year}年${month}月`
        },
        // 获取完整当前日期（格式：YYYY-MM-DD HH:MM:SS）
        getFullDate() {
            const date = new Date()
            let year = date.getFullYear()
            let month = (date.getMonth() + 1).toString().padStart(2, '0')
            let day = date.getDate().toString().padStart(2, '0')
            let hour = date.getHours().toString().padStart(2, '0')
            let minute = date.getMinutes().toString().padStart(2, '0')
            let second = date.getSeconds().toString().padStart(2, '0')
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`
        },
        // 判断日期是否符合条件
        checkTime(str) {
            let time = new Date(str)
            let filterYear = this.date.substring(0, 4)
            let filterMonth = this.date.substring(5, 7)
            if (time.getFullYear() == filterYear && time.getMonth() + 1 == filterMonth) {
                return true
            }
            return false
        },
        // 更改查看条件，充值/消费
        changeType(id) {
            this.isClick = this.isClick == id ? 0 : id
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
