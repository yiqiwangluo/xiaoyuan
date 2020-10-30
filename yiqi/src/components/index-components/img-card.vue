<template>
    <div class="img-card">
        <img :src="imgUrl" />
        <div class="bottom">
            <div class="title">{{ title }}</div>
            <div class="intro">{{ intro }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 图片路径
        imgUrl: {
            require: true,
            type: String
        },
        // 标题
        title: {
            require: true,
            type: String
        },
        // 介绍
        intro: {
            require: true,
            type: String
        }
    }
}
</script>

<style scoped>
.img-card {
    width: 576px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #d2d2d2;
}
.img-card>img {
    width: 100%;
}
.bottom {
    padding-left: 15px;
    padding-right: 10px;
}
.title {
    font-size: 26px;
    color: #333333;
    margin: 10px 0;
}
.intro {
    color: #666666;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 22px;
    line-height: 35px;
}
</style>