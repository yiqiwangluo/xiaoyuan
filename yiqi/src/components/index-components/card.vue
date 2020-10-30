<template>
    <div class="card">
        <img :src="icon" />
        <div class="title">{{ title }}</div>
        <div class="intro">{{ intro }}</div>
    </div>
</template>

<script>
export default {
    props: {
        // icon图标路径
        icon: {
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
.card {
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 16px 5px rgba(203, 203, 203, 0.64);
    padding-top: 27px;
    padding-bottom: 15px;
}
.title {
    font-size: 26px;
    color: #333333;
    margin-top: 23px;
    margin-bottom: 23px;
}
.intro {
    font-size: 19px;
    color: #999999;
    padding-left: 16px;
    /* padding-right: 16px; */
    letter-spacing: 2px;
    line-height: 40px;
}
</style>