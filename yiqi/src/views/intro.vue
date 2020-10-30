<template>
    <div>
        <img class="page-logo" src="@/assets/images/company-intro-top.jpg" />
        <special-title title="公司简介" style="margin-top: 88px; margin-bottom: 120px" />
        <company-intro-list />
    </div>
</template>

<script>
// 引入标题组件
import specialTitle from '@/components/index-components/special_title'
// 引入公司简介卡片列表
import companyIntroList from '@/components/intro-components/company-intro-list'
export default {
    components: {
        specialTitle,
        companyIntroList
    }
}
</script>

<style scoped>
.page-logo {
    width: 100%;
}
</style>