<template>
    <div class="title flex-align-center">
        <img src="@/assets/images/line1.png" class="arrowImg" />
        <div class="msg">{{ title }}</div>
        <img src="@/assets/images/line2.png" class="arrowImg" />
    </div>
</template>

<script>
export default {
    props: {
        // 标题
        title: {
            require: true,
            type: String
        }
    }
}
</script>

<style scoped>
.title {
    margin: 0px auto;
    height: 39px;
    justify-content: center;
    transition: 0.5s;
}
.msg {
    margin: 0 25px;
    font-size: 2vw;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
    transition: 0.5s;
}
.arrowImg {
    transition: 0.5s;
}
@media screen and (max-width: 1000px) {
    .arrowImg {
        transform: scale(0.8);
    }
    .msg {
        margin: 0px;
    }
}
@media screen and (max-width: 560px) {
    .arrowImg {
        transform: scale(0.7);
    }
}
</style>