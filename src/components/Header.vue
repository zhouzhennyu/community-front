<template>
    <div class="header-component">
        <div class="header">
            <span>我是头部组件</span>
            <span><router-link :to="{ name: 'login'}">登录</router-link></span>
            <span><router-link :to="{ name: 'register'}">注册</router-link></span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .header-component {
        width: 100%;
        background-color: grey;
        color: #fff;
        .header {
            width: 1200px;
            height: 60px;
            box-sizing: border-box;
            margin: auto;
            span {
                margin: 0 30px;
            }
        }
    }
</style>
