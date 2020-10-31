<template>
    <div class="card flex-align-center">
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
    flex-direction: column;
    box-shadow: 0px 3px 16px 5px rgba(203, 203, 203, 0.64);
    padding: 27px 0 15px 0;
}
.title {
    font-size: 26px;
    color: #333333;
    margin: 23px 0;
}
.intro {
    /* -----------------兼容IE------------- */
    width: 95%;
    margin: 0px auto;
    /* -----------------兼容IE------------- */
    font-size: 19px;
    color: #999999;
    padding-left: 16px;
    letter-spacing: 2px;
    line-height: 40px;
}
</style>