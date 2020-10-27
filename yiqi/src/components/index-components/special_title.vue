<template>
    <div class="title">
        <div class="line"></div>
        <div class="diamond"></div>
        <div class="msg">{{ title }}</div>
        <div class="diamond"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: {
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
.line {
    width: 120px;
    height: 2px;
    background-color: #f26357;
}
.diamond {
    width: 10px;
    height: 10px;
    border: solid 2px #f24849;
    transform: rotate(45deg);
}
.msg {
    margin: 0 25px;
    font-size: 28px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
}
</style>