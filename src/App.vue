<template>
    <div id="app">
        <p>
            <router-link to="/home">首页</router-link>
            <router-link to="/free">免费课程</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './router'


    export default {
        name: 'app',
        router,
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    a{
        margin-left: 30px;
    }
</style>
