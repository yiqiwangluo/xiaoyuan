<!--
 * @Author: LF
 * @Description: 交易明细页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-27 14:50:53
-->
<template>
    <view>
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
        />
    </view>
</template>

<script>
// 引入消费卡片组件
import transactionCard from '../../components/electric_wallet-components/transaction_card.vue'
export default {
    data() {
        return {
            // 消费记录数据
            transaction_data: [
                {
                    consumption_type: '消费',
                    consumption_time: '2020-07-02 15:48:15',
                    consumption_money: '12',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487894',
                    consumption_account: '8484564684784878',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    consumption_type: '充值',
                    consumption_time: '2020-07-02 12:48:15',
                    consumption_money: '60',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487895',
                    consumption_account: '8484564684784879',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    consumption_type: '缴费',
                    consumption_time: '2020-07-03 11:18:15',
                    consumption_money: '200',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487896',
                    consumption_account: '8484564684784879',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    consumption_type: '房租',
                    consumption_time: '2020-07-05 15:48:15',
                    consumption_money: '300',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487814',
                    consumption_account: '8484564684784888',
                    merchant_name: '梅州市职业技术学校'
                },
                {
                    consumption_type: '水电',
                    consumption_time: '2020-07-05 14:48:15',
                    consumption_money: '50',
                    discounts_money: '0',
                    consumption_id: '1584987879845487487891',
                    consumption_account: '8484564684784881',
                    merchant_name: '梅州市职业技术学校'
                }
            ]
        }
    },
    components: {
        transactionCard
    }
}
</script>

<style lang="less"></style>
