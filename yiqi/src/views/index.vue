<template>
    <div>
        <top-nav />
        <swiper :imgList="imgList" />
        <special-title title="内容经济社交" style="margin-top: 57px; margin-bottom: 84px" />
        <card-list />
        <special-title title="为用户提供完美的时间买卖服务" style="margin-top: 151px; margin-bottom: 71px" />
        <img-card-list style="margin-bottom:168px" />
        <nav-footer/>
    </div>
</template>

<script>
// 引入页头
import topNav from '@/components/header'
// 引入轮播图组件
import swiper from '@/components/index-components/swiper'
// 引入标题组件
import specialTitle from '@/components/index-components/special_title'
// 引入信息卡片列表组件
import cardList from '@/components/index-components/card-list'
// 引入图片卡片列表组件
import imgCardList from '@/components/index-components/img-card-list'
import NavFooter from '@/components/NavFooter'
export default {
    components: {
        topNav,
        swiper,
        specialTitle,
        cardList,
        imgCardList,
        NavFooter
    },
    data() {
        return {
            // 轮播图的图片列表
            imgList: [
                require('@/assets/images/slideshow_1.jpg'),
                require('@/assets/images/slideshow_2.jpg'),
                require('@/assets/images/slideshow_3.jpg'),
                require('@/assets/images/slideshow_1.jpg')
            ]
        }
    } 
}       
</script>


<style scoped>
</style>
