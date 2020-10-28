<template>
    <div class="img-card-list">
        <img-card class="img-card" v-for="(item, index) in list" :key="index" :imgUrl="item.imgUrl" :title="item.title" :intro="item.intro" />
    </div>
</template>

<script>
// 引入广告卡片组件
import imgCard from './img-card'
export default {
    components: {
        imgCard
    },
    data() {
        return {
            list: [
                {
                    imgUrl: require('@/assets/images/advertising_1.png'),
                    title: '我不愿让你一个人',
                    intro: '没有节目的假期是没有灵魂的！ 来伊伊，找个人陪你去吃饭、看电影、压马路、聊天；再找个人教你想要的技能。'
                },
                {
                    imgUrl: require('@/assets/images/advertising_2.png'),
                    title: '健身锻炼不仅专业还有爱',
                    intro: '塑型、马甲线，你想要的专业教练这里都有。健身路漫漫，两个人不孤单，让你更有效的锻炼，拥有更专业的健身方法。'
                },
                {
                    imgUrl: require('@/assets/images/advertising_3.png'),
                    title: '商务出行，有陪伴的出行',
                    intro: '代酒、代驾，工作的合作伙伴，一键就可以获取。陪同你的每一次出行，响应你的需要。商务人的必须有，伊伊同行我都有！'
                },
                {
                    imgUrl: require('@/assets/images/advertising_4.png'),
                    title: '人生就是一场旅行',
                    intro: '每段旅途都值得带上一个有趣的导游，去带你探索。每一次的风景都值得你与它合影。导游、驴友、摄影狗，伊伊同行依然有！'
                }
            ]
        }
    }
}
</script>

<style scoped>
.img-card-list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: space-between;
    margin: 0px auto;
}
.img-card:nth-child(3),
.img-card:nth-child(4) {
    margin-top: 40px;
}
@media screen and (min-width: 660px) and (max-width: 1220px) {
    .img-card-list {
        width: 90%;
        justify-content: center;
    }
    .img-card:not(:first-child) {
        margin-top: 40px;
    }
}
@media screen and (min-width: 0px) and (max-width: 660px) {
    .img-card-list {
        width: 100%;
        justify-content: center;
    }
    .img-card:not(:first-child) {
        margin-top: 40px;
    }
}
</style>