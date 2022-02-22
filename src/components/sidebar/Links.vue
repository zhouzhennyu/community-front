<template>
    <div class="link-component">
        <p class="title">友情链接</p>
        <div class="content">
            <a
                :href="item.link"
                v-for="(item, index) in lists"
                :key="index"
                target="_blank"
                class="link-title">
               {{ item.title }}
            </a>
        </div>
    </div>
</template>
<script>
import { getLinks } from '@/api/content.js'
export default {
    data() {
        return {
            lists: []
        }
    },
    methods: {
        _getLinks() {
            getLinks().then(res => {
                if (res.code === 200) {
                    this.lists = res.data
                }
            })
        }
    },
    mounted() {
        this._getLinks()
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
            .link-title {
                color: #333;
                font-size: 14px;
                line-height: 24px;
                margin-right: 24px;
                &:hover{
                    color: #009688;
                }
            }
        }
    }
</style>
