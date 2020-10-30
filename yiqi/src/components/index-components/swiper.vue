<template>
    <div class="view">
        <div class="swiper" ref="swiper" @mouseover="stopSwiper" @mouseout="continueSwiper">
            <img v-for="(item, index) in imgList" :key="index" :src="item" ref="imgList" :style="{ width: screenWidth + 'px' }" />
        </div>
        <ul class="btns" :style="{ width: (imgList.length - 1) * 15 + 25 + 'px' }" @mouseover="stopSwiper" @mouseout="continueSwiper">
            <li v-for="(item, index) in imgList.length - 1" :key="index" :id="btnNum == index ? 'selected' : ''" @click="changeImg(index)"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 定时器
            timer: null,
            // 轮播图当前图片索引
            num: 0,
            // 选中按钮的索引
            btnNum: 0,
            // 当前屏幕宽度
            screenWidth: document.body.clientWidth
        }
    },
    props: {
        // 图片列表
        imgList: {
            require: true,
            type: Array
        },
        // 轮播时间
        time: {
            type: Number,
            default: 5000
        }
    },
    methods: {
        // 动画函数
        animateHome(elem, target) {
            // 1.清除定时器
            clearInterval(elem.timeId)
            // 2.获取elem的当前位置
            var current = elem.offsetLeft
            // 4.声明定时器
            elem.timeId = setInterval(function () {
                // 4.1定义步进值 让匀速变成减速呢？ 让每次的步进减小
                var step = (target - current) / 10
                // 4.2 判断 当前距离和目标值 如果当前距离大于目标值 step为负值 否则为正值
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                // 4.3 累加
                current += step
                // 4.4 判断当前-目标差值的绝对值是否大于 step的绝对值
                if (Math.abs(current - target) > Math.abs(step)) {
                    // 4.5 如果是 赋值给元素
                    elem.style.left = current + 'px'
                } else {
                    // 4.6 否则 清除定时器
                    clearInterval(elem.timeId)
                    // 4.7 把目标值赋值给元素
                    elem.style.left = target + 'px'
                }
            }, 20)
        },
        // 鼠标移入时停止轮播
        stopSwiper() {
            clearInterval(this.timer)
        },
        // 启动轮播
        startSwiper() {
            this.timer = setInterval(() => {
                if (this.num == this.$refs.imgList.length - 1) {
                    this.num = 0
                    this.$refs.swiper.style.left = 0 + 'px'
                }
                this.num++
                this.animateHome(this.$refs.swiper, -this.num * this.screenWidth)
                this.btnNum == 2 ? (this.btnNum = 0) : this.btnNum++
            }, this.time)
        },
        // 鼠标移出时继续定时器
        continueSwiper() {
            this.startSwiper()
        },
        // 选择某一张轮播图
        changeImg(index) {
            this.animateHome(this.$refs.swiper, -index * this.screenWidth)
            this.num = this.btnNum = index
        }
    },
    mounted() {
        // 调整浏览器窗口大小时触发的函数（添加防抖提高性能）
        let timee = null
        window.onresize = () => {
            clearTimeout(this.timer)
            // 如果再次触发事件时数据还未到更新时间，则重新设置进程
            clearTimeout(timee)
            // 一段延迟未变化后更新数据
            timee = setTimeout(() => {
                this.screenWidth = document.body.clientWidth
                this.animateHome(this.$refs.swiper, -this.num * this.screenWidth)
                this.startSwiper()
            }, 20)
        }
        // 页面挂载后启用定时器，开始自动轮播
        this.startSwiper()
    },
    beforeDestroy() {
        // 页面销毁之前清除定时器
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.view {
    width: 100%;
    overflow: hidden;
    position: relative;
}
.swiper {
    display: flex;
    align-items: center;
    position: relative;
}
.btns {
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
}
.btns > li {
    width: 15px;
    height: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
}
#selected {
    background-color: #acacac;
}
</style>