<template>
    <div class="ads-component">
        <p class="title">温馨通道</p>
        <div class="content">
        <a class="item inline-block" target="_blank" :href="item.link" v-for="(item, index) in lists" :key="index">{{ item.title }}</a>
        </div>
    </div>
</template>
<script>
import { getTips } from '@/api/content.js'
export default {
    data() {
        return {
            lists: []
        }
    },
    methods: {
        _getTips() {
            getTips().then(res => {
                if (res.code === 200) {
                    this.lists = res.data
                }
            })
        }
    },
    mounted() {
        this._getTips()
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
                box-sizing: border-box;
            }
        }
    }
</style>
