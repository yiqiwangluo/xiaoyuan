<template>
    <div>
        <!-- 正常卡片 -->
        <div class="card flex-align-center" v-if="!reverse">
            <div class="card-left">
                <img :src="imgUrl" />
            </div>
            <div class="card-right">
                <div class="content-top flex-align-center">
                    <div class="title">{{ title }}</div>
                    <div class="subTitle">{{ subTitle }}</div>
                </div>
                <div class="content-bottom">
                    <div>{{ intro1 }}</div>
                    <div>{{ intro2 }}</div>
                </div>
            </div>
        </div>
        <!-- 反转卡片 -->
        <div class="card flex-align-center reverse-card" v-else>
            <div class="card-left">
                <img :src="imgUrl" />
            </div>
            <div class="card-right card-right-reverse">
                <div class="content-top flex-align-center content-top-reverse">
                    <div class="title title-reverse">{{ title }}</div>
                    <div class="subTitle">{{ subTitle }}</div>
                </div>
                <div class="content-bottom">
                    <div>{{ intro1 }}</div>
                    <div>{{ intro2 }}</div>
                </div>
            </div>
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
        // 副标题
        subTitle: {
            require: true,
            type: String
        },
        // 介绍段落 1
        intro1: {
            require: true,
            type: String
        },
        // 介绍段落 2
        intro2: {
            require: true,
            type: String
        },
        // 是否反转
        reverse: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
}
.reverse-card {
    flex-direction: row-reverse;
}
.card-right {
    height: 405px;
    margin-left: 33px;
}
.card-right-reverse {
    margin-right: 33px;
}
.content-top-reverse,
.content-top-reverse > .title {
    flex-direction: row-reverse;
}
.content-top-reverse > .subTitle {
    text-indent: 0px;
    padding-right: 8px;
}
.title {
    background-color: #f24849;
    border-radius: 0px 15px 0px 0px;
    color: #ffffff;
    padding: 7px 10px;
    font-size: 20px;
    letter-spacing: 1px;
}
.title-reverse {
    border-radius: 15px 0px 0px 0px;
}
.subTitle {
    height: 39px;
    line-height: 39px;
    box-sizing: border-box;
    color: #999999;
    font-size: 16px;
    text-indent: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid #999;
}
.content-bottom > div {
    margin-top: 10px;
    font-size: 20px;
    text-indent: 40px;
    color: #666666;
    line-height: 40px;
    letter-spacing: 1px;
}
@media screen and (max-width: 1150px) {
    .card {
        flex-direction: column;
        width: 95%;
        margin: 0px auto;
    }
    .card-right {
        margin-left: 0px;
        margin-right: 0px;
        height: auto;
    }
    img {
        width:100%;
    }
}
</style>