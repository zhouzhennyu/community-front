<template>
    <div class="sign-component">
        <ul class="sign-nav">
            <li class="inline-block">签到</li><span class="gap-line"></span>
            <li class="inline-block">说明</li><span class="gap-line"></span>
            <li class="inline-block">活跃榜</li>
        </ul>
        <div class="sign-content">
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .sign-component {
        background: #fff;
        padding: 0 16px;
        border-radius: 2px;
        font-size: 14px;
        color: #333;
        margin-bottom: 15px;
    }
    .sign-nav {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #E9E9E9;
        .gap-line {
            display: inline-block;
            height: 10px;
            width: 1px;
            margin: 0 10px;
            background: #e2e2e2;
        }
    }
    .sign-content {
        padding: 16px 0;
    }
</style>
