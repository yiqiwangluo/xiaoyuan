<template>
    <div class="title  flex-align-center">
        <img src="@/assets/images/line1.png" />
        <div class="msg">{{ title }}</div>
        <img src="@/assets/images/line2.png" />
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
}
.msg {
    margin: 0 25px;
    font-size: 2vw;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
}
</style>