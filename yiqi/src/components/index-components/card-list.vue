<template>
    <div>
        <div class="content">
            <card class="card" v-for="(item, index) in list" :key="index" :icon="item.icon" :title="item.title" :intro="item.intro" />
        </div>
    </div>
</template>

<script>
// 引入卡片组件
import card from './card'
export default {
    components: {
        card
    },
    data() {
        return {
            list: [
                {
                    icon: require('@/assets/images/cardImg_1.png'),
                    title: '买卖时间',
                    intro: '吃饭，逛街，看电影...再也不用担心自己一个人，您也可以用自己的空余时间陪那些孤独的人吃喝玩乐~'
                },
                {
                    icon: require('@/assets/images/cardImg_2.png'),
                    title: '快乐交友',
                    intro: '网络一线牵，珍惜这段缘，在与您的小伙伴交易中让有趣的灵魂碰撞出火花，或许你会遇到命中的那个“TA”'
                },
                {
                    icon: require('@/assets/images/cardImg_3.png'),
                    title: '即刻动态',
                    intro: '您的羞涩的告白，动人的自拍，美丽的风景...都会有个“TA”关注着，一键分享，点赞，关注'
                },
                {
                    icon: require('@/assets/images/cardImg_4.png'),
                    title: '安全保障',
                    intro: '一键报警，交易保险，实时定位时刻守护在你身边，交易更放心，全程保障您的合法交易'
                }
            ]
        }
    }
}
</script>

<style scoped>
/* 一行显示四个子项 */
.content {
    width: 1204px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
/* 每行只显示一个子项 */
@media screen and (min-width: 0px) and (max-width: 576px) {
    .content {
        width: 100%;
        margin: 0px auto;
        justify-content: center;
    }
    .card:not(:first-child) {
        margin-top: 20px;
    }
}
/* 每行显示两个子项 */
@media screen and (min-width: 576px) and (max-width: 1230px) {
    .content {
        width: 580px;
        margin: 0px auto;
        justify-content: space-between;
    }
    .card:nth-child(3),
    .card:nth-child(4) {
        margin-top: 20px;
    }
}
</style>