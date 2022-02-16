<template>
    <div class="ads-component">
       <p class="title">温馨通道</p>
       <div class="content">
           <a class="item inline-block" href="">百度</a>
           <a class="item inline-block" href="">阿里</a>
           <a class="item inline-block" href="">字节</a>
           <a class="item inline-block" href="">京东</a>
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
    .ads-component {
        font-size: 14px;
        background: #fff;
        padding: 0 16px;
        margin-bottom: 15px;
        overflow: hidden;
        .title {
            color: #333;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #E9E9E9;
            border-radius: 2px;
        }
        .content {
            margin: 16px 0;
            overflow: hidden;
            border-left: 1px solid #E9E9E9;
            border-bottom: 1px solid #E9E9E9;
            .item {
                width: 50%;
                height: 40px;
                color: #333;
                font-size: 14px;
                line-height: 40px;
                text-align: center;
                border: 1px solid #E9E9E9;
                border-bottom: none;
                border-left: none;
            }
        }
    }
</style>
