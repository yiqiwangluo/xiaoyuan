<template>
    <div class="title">
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
    display: flex;
    margin: 0px auto;
    height: 39px;
    align-items: center;
    justify-content: center;
}
.msg {
    margin: 0 25px;
    font-size: 28px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
}
</style>