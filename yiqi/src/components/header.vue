<template>
    <div>
        <div class="top-nav">
            <div class="content">
                <!-- 左侧logo及公司名称 -->
                <a class="content-left" href="/">
                    <img class="logo" src="@/assets/images/logo.png" />
                    <span class="title">伊起网络</span>
                </a>
                <!-- 右侧功能长列表-屏幕尺寸大于770时显示 -->
                <div class="content-right" v-if="screenWidth > 770">
                    <ul class="component-list">
                        <li v-for="(item, index) in component_list" :key="index" ref="li" @mouseout="hideLine" @mouseover="locationLine(index)">
                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                    </ul>
                    <div class="line" ref="line"></div>
                </div>
                <!-- 右侧功能收缩列表-屏幕尺寸小于770时显示 -->
                <div class="list" v-else>
                    <div class="button">
                        <div class="button-line1"></div>
                        <div class="button-line2"></div>
                        <div class="button-line3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="placeholder-div"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            component_list: [
                { title: '首页', url: '/' },
                { title: '产品介绍', url: '/' },
                { title: '公司简介', url: '/intro' },
                { title: '联系我们', url: '/' }
            ],
            // 当前屏幕像素宽度
            screenWidth: document.body.clientWidth
        }
    },
    methods: {
        hideLine() {
            // 线条从两边向中间缩短效果
            this.$refs.line.style.left = this.$refs.line.offsetLeft + this.$refs.line.offsetWidth / 2 + 'px'
            // 隐藏线条（宽度变0，透明度变0）
            this.$refs.line.style.width = 0 + 'px'
            this.$refs.line.style.opacity = 0
        },
        locationLine(index) {
            // 根据li位置决定线条位置
            this.$refs.line.style.left = this.$refs.li[index].offsetLeft + 'px'
            // 将线条设置为不透明
            this.$refs.line.style.opacity = 1
            // 将线条的宽设置的与对应li的宽相同
            this.$refs.line.style.width = this.$refs.li[index].offsetWidth + 'px'
        }
    },
    mounted() {
        // 调整浏览器窗口大小时触发的函数
        window.onresize = () => {
                this.screenWidth = document.body.clientWidth
        }
    }
}
</script>

<style scoped>
/* 外层盒子 */
.top-nav {
    width: 100%;
    height: 72px;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
}
/* 内容区 */
.content {
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    transition: all 0.5s;
}
@media screen and (max-width: 1230px) {
    .content {
        width: 1150px;
    }
}
@media screen and (max-width: 1170px) {
    .content {
        width: 1000px;
    }
}
@media screen and (max-width: 1024px) {
    .content {
        width: 950px;
    }
}
@media screen and (max-width: 970px) {
    .content {
        width: 850px;
    }
}
@media screen and (max-width: 870px) {
    .content {
        width: 750px;
    }
}
@media screen and (max-width: 770px) {
    .content {
        width: 98%;
    }
}
/* 770像素以下将导航功能区改为点击展开的列表 */
/* 左侧区域和右侧区域 */
.content > div {
    width: auto;
    height: 100%;
}
/* 左侧区域 */
.content-left {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
}
/* 公司logo */
.logo {
    width: 50px;
    height: 50px;
}
/* 公司名称 */
.title {
    color: #f24849;
    font-size: 28px;
    margin-left: 11px;
}
/* 右侧区域 */
.content-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    position: relative;
}
/* 功能列表 */
.component-list {
    list-style: none;
    display: flex;
    align-items: center;
}
/* 功能列表-子项 */
.component-list > li:not(:first-child) {
    margin-left: 58px;
}
.component-list > li > a {
    color: #666666;
    transition: all 0.5s;
    font-size: PingFang-SC-Medium;
    font-size: 18px;
    cursor: pointer;
}
.component-list > li > a:hover {
    color: #2db5a3;
}
.placeholder-div {
    height: 72px;
}
.line {
    position: absolute;
    left: 0px;
    bottom: 1px;
    width: 0px;
    height: 2px;
    background-color: #f24849;
    transition: all 0.4s;
}
.list {
    margin-left: auto;
    display: flex;
    align-items: center;
}
.button {
    width: 25px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}
.button > div {
    width: 25px;
    height: 2px;
    background: #2db5a3;
    margin-bottom: 6px;
}
</style>