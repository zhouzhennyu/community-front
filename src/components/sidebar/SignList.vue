<template>
    <div class="sign-list-modal" v-show="isShow">
        <div class="mask" @click="close"></div>
        <div class="modal-content" :class="{'active': isShow}">
            <div class="title flex j-content-between">
                <p>签到活跃榜 - TOP</p>
                <span @click="close">x</span>
            </div>
            <div class="list-content">
                <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
                    <el-tab-pane label="最新签到" name="first">
                        <div class="list-item flex a-items-center j-content-between" v-for="(item, index) in newLists" :key="index">
                            <img :src="item.pic" alt="">
                            <span class="name">{{ item.name }}</span>
                            <span class="desc">已经连续签到<span class="red">{{ item.count }}</span>天</span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="今日最快" name="second">
                        <div class="list-item flex a-items-center j-content-between" v-for="(item, index) in todayLists" :key="index">
                            <img :src="item.pic" alt="">
                            <span class="name">{{ item.name }}</span>
                            <span class="desc">已经连续签到<span class="red">{{ item.count }}</span>天</span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="总签到榜" name="third">
                        <div class="list-item flex a-items-center j-content-between" v-for="(item, index) in totalLists" :key="index">
                            <img :src="item.pic" alt="">
                            <span class="name">{{ item.name }}</span>
                            <span class="desc">已经连续签到<span class="red">{{ item.count }}</span>天</span>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
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
            activeName: 'first',
            newLists: [
                { pic: '', name: 'zzy', count: 8 },
                { pic: '', name: 'haha', count: 6 },
                { pic: '', name: 'haha', count: 5 }
            ],
            todayLists: [
                { pic: '', name: 'cj', count: 9 },
                { pic: '', name: 'haha', count: 6 },
                { pic: '', name: 'haha', count: 3 }
            ],
            totalLists: [
                { pic: '', name: 'cjj', count: 10 },
                { pic: '', name: 'haha', count: 8 },
                { pic: '', name: 'haha', count: 6 }
            ]
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
        close() {
            this.$emit('closeSignListModal', 2)
        }
    }
}
</script>
<style lang="scss" scoped>
.sign-list-modal {
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
    }
    .title {
        height: 42px;
        line-height: 42px;
        padding: 0 20px;
        color: #333;
        background-color: #f8f8f8;
        span {
            font-size: 20px;
            color: #999;
            cursor: pointer;
        }
    }
    .list-content {
        .list-item {
            height: 50px;
            border-bottom: 1px dotted #dcdcdc;
            padding: 0 20px;
            img {
                width: 30px;
                height: 30px;
                border-radius: 2px;
                margin-right: 15px;
            }
            .name {
                flex: 1;
                display: inline-block;
                max-width: 80px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .desc {
                color: #999;
                padding-left: 10px;
                .red {
                    color: #ff5722;
                    padding: 0 5px;
                }
            }
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
