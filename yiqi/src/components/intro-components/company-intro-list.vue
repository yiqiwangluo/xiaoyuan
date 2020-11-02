<template>
    <div>
        <div class="content">
            <company-intro-card
                class="intro-card"
                v-for="(item, index) in list"
                :key="index"
                :imgUrl="item.imgUrl"
                :title="item.title"
                :subTitle="item.subTitle"
                :intro1="item.intro1"
                :intro2="item.intro2"
                :reverse="item.reverse"
            />
        </div>
    </div>
</template>

<script>
// 引入公司简介页所用的卡片组件
import companyIntroCard from './company-intro-card'
export default {
    components: {
        companyIntroCard
    },
    data() {
        return {
            list: [
                {
                    imgUrl: require('@/assets/images/company-intro.jpg'),
                    title: '公司简介',
                    subTitle: 'COMPANY PROFILE',
                    intro1:
                        '广东伊起网络科技有限公司成立于2019年，注册资金1000万，是国内零工经济先驱企业。伊起网络以个人共享经济繁荣发展为风向标，“人人共商，万人互联”为核心价值，创建“去公司化”的新型互联网管理理念。',
                    intro2:
                        '旗下产品“伊伊同行APP”是一款在线服务交易软件，提倡用户实现时间与兴趣爱好共享，帮助更多有需要的用户快速约人以及有时间爱好资源的用户接单赚钱，让用户可通过兴趣爱好实现陌生人线下社交！'
                },
                {
                    imgUrl: require('@/assets/images/talents_advantage.jpg'),
                    title: '人才优势',
                    subTitle: 'TALENT ADVANTAGE',
                    intro1: '我们，是拥有多年的信息技术开发背景的精英；我们，是创意无限的年轻团队，平均年龄28岁；我们的领航者，学识卓绝、经验丰富；',
                    intro2:
                        '我们的跟随者，才华横溢、能力超群；我们的队员经验丰富：JAVA高级软件工程师；物联网工程师；智能化系统工程师；多媒体高级制作员；微信开发者平台建设参与者......',
                    reverse: true
                },
                {
                    imgUrl: require('@/assets/images/yiyitongxing.jpg'),
                    title: '伊伊同行APP',
                    subTitle: 'YIYI GO APP',
                    intro1: '伊伊同行APP是一款基于5G应用的商旅平台，解决即时需求的在线服务交易软件，让你花最少的钱，享受随叫随到的服务！',
                    intro2: '简单来说就是将社会自由职业者等闲散资源合理整合再分配，推荐身边有业余爱好、才艺、知识、时间的人，只要想赚取高额佣金的，均可免费注册成为接单者！'
                }
            ]
        }
    }
}
</script>

<style scoped>
.content {
    width: 62.5%;
    margin: 0px auto;
    transition: 0.5s;
}
.intro-card:not(:first-child) {
    margin-top: 140px;
}
@media screen and (max-width: 1376px) {
    .content {
        width: 80%;
    }
}
@media screen and (max-width: 1243px) {
    .content {
        width: 90%;
    }
}
@media screen and (max-width: 1175px) {
    .content {
        width: 95%;
    }
}
</style>