<template>
    <div>
        <!-- 轮播图 -->
        <swiper :imgList="imgList" />
        <!-- 特殊标题 -->
        <special-title title="内容经济社交" style="margin-top: 57px; margin-bottom: 84px" />
        <!-- 卡片列表 -->
        <card-list />
        <!-- 特殊标题 -->
        <special-title title="为用户提供完美的时间买卖服务" style="margin-top: 151px; margin-bottom: 71px" />
        <!-- 广告卡片列表 -->
        <img-card-list style="margin-bottom: 116px" />
    </div>
</template>

<script>
// 引入轮播图组件
import swiper from '@/components/index-components/swiper'
// 引入标题组件
import specialTitle from '@/components/index-components/special_title'
// 引入信息卡片列表组件
import cardList from '@/components/index-components/card-list'
// 引入图片卡片列表组件
import imgCardList from '@/components/index-components/img-card-list'
export default {
    components: {
        swiper,
        specialTitle,
        cardList,
        imgCardList
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
