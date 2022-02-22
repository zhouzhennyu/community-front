<template>
    <div class="hotlist-component">
        <p class="title">本周热议</p>
        <ul>
            <li class="hotlist-item" v-for="(item, index) in lists" :key="index">
                <span class="hotlist-title">{{ item.title }}</span>
                <span class="hotlist-answer">{{ item.answer }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getTopWeek } from '@/api/content.js'
export default {
    data() {
        return {
            lists: []
        }
    },
    methods: {
        _getTopWeek() {
            getTopWeek().then(res => {
                if (res.code === 200) {
                    this.lists = res.data
                }
            })
        }
    },
    mounted() {
        this._getTopWeek()
    }
}
</script>
<style lang="scss" scoped>
    .hotlist-component {
        font-size: 14px;
        background: #fff;
        padding: 0 16px 16px;
        margin-bottom: 15px;
        .title {
            color: #333;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #E9E9E9;
            border-radius: 2px;
        }
        .hotlist-item {
            color: #999;
            line-height: 30px;
            cursor: pointer;
            .hotlist-title {
                font-size: 13px;
                margin-right: 15px;
            }
        }
    }
</style>
