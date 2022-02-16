<template>
    <div class="link-component">
        <p class="title">友情链接</p>
       <div class="content">
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
    .link-component {
        font-size: 14px;
        background: #fff;
        padding: 0 16px;
        margin-bottom: 15px;
        .title {
            color: #333;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #E9E9E9;
            border-radius: 2px;
        }
        .content {
            padding: 16px 0;
        }
    }
</style>
