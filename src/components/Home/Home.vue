<template>
    <div>
        <div>我是首页</div>
        <router-link to="/home/test1">首页下的内容</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
