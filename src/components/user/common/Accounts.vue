<template>
    <div class="accounts-container">
        <div class="item">已成功绑定，您可以使用QQ帐号直接登录Imooc社区，当然，您也可以<span>解除绑定</span></div>
        <div class="item"><span>立即绑定</span>，即可使用微博帐号登录Imooc社区</div>
    </div>
</template>
<script>
export default {
    name: 'accounts',
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.accounts-container {
    color: #333;
    .item {
        padding: 10px 15px;
        margin-bottom: 10px;
        line-height: 30px;
        background-color: #f8f8f8;
        span {
            color: #4f99cf;
        }
    }
}
</style>
