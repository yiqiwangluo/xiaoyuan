<template>
    <div>
        <!-- 页头 -->
        <nav-header />
        <!-- 页面内容 -->
        <router-view />
        <!-- 页尾 -->
        <!-- <nav-footer /> -->
    </div>
</template>
<script>
// 引入页头
import NavHeader from '@/components/header'
// 引入页尾
import NavFooter from '@/components/NavFooter'
export default {
    components: {
        NavHeader,
        NavFooter
    }
}
</script>