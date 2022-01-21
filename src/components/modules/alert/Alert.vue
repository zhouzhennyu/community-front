<template>
    <div v-show="isShow">
        <div class="alert">
            <div class="flex msg">{{ msg }}</div>
            <div v-if="type === 'alert'" class="btnCommon success" @click="close">确定</div>
            <div v-else class="space-around">
                <div class="btnCommon cancel" @click="cancelHandle">取消</div>
                <div class="btnCommon success" @click="enterHandle">确定</div>
            </div>
        </div>
        <div class="mask" @click="closeMask"></div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'alert'
        },
        isShow: {
            type: Boolean,
            default: false
        },
        msg: {
            type: String,
            default: ''
        },
        success: {
            type: Function,
            default: () => { console.log('点击了 success') }
        },
        cancel: {
            type: Function,
            default: () => { console.log('点击了 cancel') }
        }
    },
    methods: {
        close() {
            this.isShow = false
        },
        closeMask() {
            if (this.type === 'alert') {
                this.close()
            }
        },
        cancelHandle() {
            this.cancel()
            this.close()
        },
        enterHandle() {
            this.success()
            this.close()
        }
    }
}
</script>
<style lang="scss" scoped>
$btn-main: #409EFF;
$btn-dark: darken($btn-main, 5%);

.alert {
    width: 300px;
    height: 150px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -75px;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
    z-index: 3000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.flex {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
}
.btnCommon {
    width: 105px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 6px;
    &.success {
        background:$btn-main;
        color: #fff;
        &:hover {
            background: $btn-dark;
        }
    }
    &.cancel {
        background: #ededed;
        color: #333;
    }
}
.space-around {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2000;
    overflow: hidden;
}
</style>
