<!--
 * @Author: LF
 * @Description: 首页
 * @Date: 2020-09-21 10:56:19
 * @LastEditTime: 2020-09-25 17:07:21
-->
<template>
    <movable-area class="my_movable">
        <!-- 顶部卡片 -->
        <card style_list="width:706rpx;height:826rpx;margin:0 auto" class="topCard">
            <!-- 学校图片 -->
            <card style_list="width:668rpx;height:432rpx;margin:20rpx auto" class="topCard_head">
                <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/school.png" class="school_image"></image>
            </card>
            <!-- 电子钱包、身份码、付款码区域 -->
            <view class="topCard_body flexCenter">
                <!-- 左侧电子钱包区域 -->
                <view class="topCard_body_left">
                    <card style_list="width:326rpx;height:328rpx;">
                        <!-- 电子钱包卡片 -->
                        <view class="wallet_box flexCenter" @click="toOtherPage('../electric_wallet_module/electric_wallet')">
                            <!-- 电子钱包盒子 -->
                            <view>
                                <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/wallet.png" class="wallet_image"></image>
                                <view class="electronic_wallet_text">电子钱包</view>
                                <!-- 钱包余额 -->
                                <view style="font-size: 28rpx">￥{{ money_left }}</view>
                            </view>
                        </view>
                    </card>
                </view>
                <!-- 右侧身份码、付款码区域 -->
                <view class="topCard_body_right flexCenter">
                    <!-- 身份码外层卡片 -->
                    <card style_list="width:325rpx;height:157rpx" @click.native="toOtherPage('../school_card/id_code')">
                        <!-- 身份码盒子 -->
                        <view class="flexCenter idCard_box">
                            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/id_card.png" class="idCard_image"></image>
                            <view class="explain_text">身份码</view>
                        </view>
                    </card>
                    <!-- 付款码外层卡片 -->
                    <card style_list="width:325rpx;height:157rpx" @click.native="toOtherPage('../school_card/payment_code')">
                        <!-- 付款码盒子 -->
                        <view class="flexCenter qrCode_box">
                            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/qr_code.png" class="qrCode_image"></image>
                            <view class="explain_text">付款码</view>
                        </view>
                    </card>
                </view>
            </view>
        </card>
        <!-- 学生会招新图片 -->
        <card style_list="width:706rpx;height:319rpx;margin:22rpx auto;">
            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/student_union_enroll.png" class="studentUnion_enroll_image"></image>
        </card>
        <!-- 电子钱包区域 -->
        <!-- <module-card style_list="width:705rpx;height:506rpx;margin:22rpx auto" list_title="电子钱包" :list_data="electronic_wallet_list"></module-card> -->
        <!-- 校园卡账户区域 -->
        <module-card style_list="width:705rpx;height:725rpx;margin:22rpx auto" list_title="校园电子卡" :list_data="school_card_list"></module-card>
        <!-- 缴费服务区域 -->
        <!-- <module-card style_list="width:705rpx;height:283rpx;margin:22rpx auto" list_title="缴费服务" :list_data="pay_serve_list"></module-card> -->
        <!-- 其他服务区域 -->
        <module-card style_list="width:705rpx;height:504rpx;margin:22rpx auto" list_title="其他服务" :list_data="other_serve_list"></module-card>
        <!-- 客服 -->
        <movable-view class="service" direction="vertical" :y="y">
            <image src="https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/service.png" class="service_image"></image>
        </movable-view>
    </movable-area>
</template>

<script>
// 引入卡片组件
import card from '../../components/index-components/card.vue'
// 引入模块卡片组件
import moduleCard from '../../components/index-components/module_list.vue'
export default {
    components: {
        card,
        moduleCard
    },
    methods: {
        // 页面跳转
        toOtherPage(url) {
            uni.navigateTo({ url })
        }
    },
    data() {
        return {
            // 客服图标的y轴位置
            y: 0,
            // 电子钱包余额
            money_left: '0.00',
            // 电子钱包列表
            // electronic_wallet_list: [
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/transaction_detail.png',
            // 		title: '交易明细',
            // 		url: '../electric_wallet_module/transaction_detail'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge_money.png',
            // 		title: '钱包充值',
            // 		url: '../../school-card-list/card-recharge/card-recharge'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/withdraw_deposit.png',
            // 		title: '提现',
            // 		url: '../electric_wallet_module/get_deposit'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/additional_recording.png',
            // 		title: '客户信息补录',
            // 		url: '../electric_wallet_module/client_msg_recording'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/quota_setting.png',
            // 		title: '限额',
            // 		url: '../electric_wallet_module/quota'
            // 	}
            // 	// {
            // 	// 	icon:'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/bank_card.png',
            // 	// 	title:'银行卡',
            // 	// 	url:'../electric_wallet_module/bank_card_list'
            // 	// }
            // ],
            // 校园卡账户列表
            school_card_list: [
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/recharge.png',
                    title: '卡片充值',
                    url: '/pages/school-card-list/card-recharge'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/Cash_flow_inquiry.png',
                    title: '流水查询',
                    url: '/pages/school-card-list/flow-query'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/balance.png',
                    title: '卡片余额',
                    url: '/pages/school-card-list/card-balance'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/additional_recording.png',
                    title: '信息补录',
                    url: '/pages/electric_wallet_module/client_msg_recording'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/quota_setting.png',
                    title: '限额',
                    url: '/pages/electric_wallet_module/quota'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/report_loss.png',
                    title: '卡片挂失',
                    url: '/pages/school-card-list/card-lost'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/change_password.png',
                    title: '修改密码',
                    url: '/pages/school-card-list/change-password'
                }
            ],
            // 缴费服务列表
            // pay_serve_list: [
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/electric_charge.png',
            // 		title: '电费',
            // 		url: '/pages/waterElectricity/electricity'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/water_rate.png',
            // 		title: '水费',
            // 		url: '/pages/waterElectricity/water'
            // 	},
            // 	{
            // 		icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/pay.png',
            // 		title: '缴费',
            // 		url: '/pages/online/online'
            // 	}
            // ],
            // 其他服务列表
            other_serve_list: [
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/common_question.png',
                    title: '常见问题',
                    url: '/pages/service/problem'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/privacy_policy.png',
                    title: '隐私政策',
                    url: '/pages/service/private'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/user_guide.png',
                    title: '用户指南',
                    url: '/pages/service/guide'
                },
                {
                    icon: 'https://yiyitongxingsystem.oss-cn-qingdao.aliyuncs.com/images/index_images/feedback.png',
                    title: '意见反馈',
                    url: '/pages/service/suggest'
                }
            ]
        }
    },
    // 页面滚动时，相应的改变客服图标的位置
    onPageScroll(e) {
        this.y = e.scrollTop + 20
    }
}
</script>

<style lang="less" scoped>
// 公共垂直居中样式
.flexCenter {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
// 顶部卡片
.topCard {
    // 学校图片盒子
    .topCard_head {
        // 学校图片
        .school_image {
            width: 668rpx;
            height: 432rpx;
        }
    }
    // 电子钱包、身份码、付款码区域
    .topCard_body {
        height: 328rpx;
        // 钱包外层盒子
        .topCard_body_left {
            // 钱包盒子
            .wallet_box {
                width: 100%;
                height: 100%;
                text-align: center;
                // 我的钱包-文字
                .electronic_wallet_text {
                    font-size: 32rpx;
                    letter-spacing: 2rpx;
                    margin-top: 23rpx;
                }
            }
            // 钱包图标
            .wallet_image {
                width: 100rpx;
                height: 100rpx;
            }
        }
        // 身份码和付款码外层盒子
        .topCard_body_right {
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
            // 身份码和付款码盒子
            .qrCode_box,
            .idCard_box {
                width: 100%;
                height: 100%;
                justify-content: center;
                & > view {
                    margin-left: 24rpx;
                }
            }
            // 身份证图标
            .idCard_image {
                width: 74rpx;
                height: 61rpx;
            }
            // 二维码图标
            .qrCode_image {
                width: 63rpx;
                height: 62rpx;
            }
        }
    }
}
// 学生会招新图片
.studentUnion_enroll_image {
    width: 706rpx;
    height: 319rpx;
}
// 拖拽组件外层盒子
.my_movable {
    width: 100vw;
    height: auto;
}
// 客服盒子和客服图片
.service,
.service_image {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    z-index: 100;
    left: 628rpx;
    top: 26%;
}
// 说明性文字
.explain_text {
    font-size: 32rpx;
}
</style>
