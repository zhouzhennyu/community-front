<template>
    <div class="center-container">
        <div class="clear-btn" @click="clearAllMsg">清空全部消息</div>
    </div>
</template>
<script>
export default {
    name: 'msg',
    data() {
        return {}
    },
    methods: {
        clearAllMsg() {
            console.log('清空全部消息')
        }
    }
}
</script>
<style lang="scss" scoped>
    .clear-btn {
        background-color: #FF5722;
        display: inline-block;
        height: 38px;
        line-height: 38px;
        padding: 0 18px;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
</style>
