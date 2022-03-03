<template>
    <div class="sign-info-modal" v-show="isShow">
        <div class="mask" @click="close"></div>
        <div class="modal-content" :class="{'active': isShow }">
            <div class="title flex j-content-between">
                <p>签到说明</p>
                <span @click="close">x</span>
            </div>
            <div class="quote">“签到”可获得的社区积分，规则如下</div>
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>连续签到天数</th>
                        <th>每天可获积分</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&lt;5 </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>≥5</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>≥15</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>≥30</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>≥100</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>≥365</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
            <p class="text">中间若有间隔，则连续天数重新计算</p>
            <p class="text red">不可复用程序自动签到，否则积分清零</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        close() {
            this.$emit('closeSignInfoModal', 1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .sign-info-modal {
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.8);
            z-index: 900;
        }
        .modal-content {
            position: fixed;
            width: 300px;
            height: 480px;
            top: 50%;
            left: 50%;
            margin-top: -240px;
            margin-left: -150px;
            background: #fff;
            z-index: 1000;
            .title {
                height: 42px;
                line-height: 42px;
                padding: 0 20px;
                color: #333;
                background-color: #f8f8f8;
                margin-bottom: 20px;
                span {
                    font-size: 20px;
                    color: #999;
                    cursor: pointer;
                }
            }
            .quote {
                margin-bottom: 10px;
                padding: 15px;
                line-height: 22px;
                border-left: 5px solid #009688;
                border-radius: 0 2px 2px 0;
                background-color: #f2f2f2;
                margin: 0 20px;
            }
            .modal-table {
                width: 100%;
                background-color: #fff;
                color: #666;
                padding: 20px;
                th, td {
                    text-align: center;
                    border-width: 1px;
                    border-style: solid;
                    border-color: #e6e6e6;
                }
                th {
                    background-color: #f2f2f2;
                    position: relative;
                    padding: 9px 15px;
                    min-height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                }
            }
            .text {
                padding: 0 20px;
            }
            .red {
                color: #ff5722;
            }
        }
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        .active {
            animation: bounceIn 0.2s;
        }
    }
</style>
