<template>
	<view class="content">
		<view class="top">
			<view class="query">{{date}}</view>
			<view class="select uni-list-cell-db">
				<view class="select-left">筛选</view>
				<view class="select-right">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">
							<image src="../../../static/images/school_list_images/left_arrow.png" class="right_arrow" />
						</view>
					</picker>
				</view>


			</view>
		</view>

		<!-- <view class="details-list" v-for="item in detailsList">
			  <view class="detail-left">
				  <view class="using">{{item.using}}</view>
				  <view class="date">{{item.date}}</view>
			  </view>
			  <view class="detail-right">{{item.amount}}</view>
		  </view> -->
		<!-- 消费记录 -->
		<transaction-card consumption_type="消费" consumption_time="2020-07-02 15:48:15" consumption_money="12" discounts_money="0"
		 consumption_id="1584987879845487487894" consumption_account="8484564684784878" merchant_name="梅州市职业技术学校" />
		<transaction-card consumption_type="充值" consumption_time="2020-07-02 15:48:15" consumption_money="58" discounts_money="0"
		 consumption_id="1584987879845487487894" consumption_account="8484564684784878" merchant_name="梅州市职业技术学校" />
		<transaction-card consumption_type="缴费" consumption_time="2020-07-02 15:48:15" consumption_money="200"
		 discounts_money="0" consumption_id="1584987879845487487894" consumption_account="8484564684784878" merchant_name="梅州市职业技术学校" />
		<transaction-card consumption_type="房租" consumption_time="2020-07-02 15:48:15" consumption_money="1000"
		 discounts_money="0" consumption_id="1584987879845487487894" consumption_account="8484564684784878" merchant_name="梅州市职业技术学校" />
		<transaction-card consumption_type="水电" consumption_time="2020-07-02 15:48:15" consumption_money="400"
		 discounts_money="0" consumption_id="1584987879845487487894" consumption_account="8484564684784878" merchant_name="梅州市职业技术学校" />
	</view>
</template>

<script>
	// 引入消费卡片组件
	import transactionCard from '../../../components/electric_wallet-components/transaction_card.vue';

	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'picker',
				date: currentDate,
			}
		},
		components: {
			transactionCard
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {

			bindDateChange: function(e) {
				this.date = e.target.value
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>


<style lang="less" scoped>
	.content {
		font-family: PingFang-SC-Medium;

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
