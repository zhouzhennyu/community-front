<template>
    <div class="list-component">
        <div class="list-panel flex j-content-between">
            <div class="flex a-items-center">
                <a :class="{'link-active': status === '' && tag === ''}" @click.prevent="search()">综合</a><span class="gap-line"></span>
                <a :class="{'link-active': status === '0'}" @click.prevent="search(0)">未结</a><span class="gap-line"></span>
                <a :class="{'link-active': status === '1'}" @click.prevent="search(1)">已结</a><span class="gap-line"></span>
                <a :class="{'link-active': status === '' && tag === '精华'}" @click.prevent="search(2)">精华</a>
            </div>
            <div class="flex a-items-center">
                <a :class="{'link-active': sort === 'created'}" @click.prevent="search(3)">按最新</a><span class="gap-line"></span>
                <a :class="{'link-active': sort === 'answer'}" @click.prevent="search(4)">按热议</a>
            </div>
        </div>
        <list-item :lists="lists" @nextPage="nextPage" :isEnd="isEnd"></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/content/ListItem.vue'
import { getList } from '@/api/content.js'
export default {
    data() {
        return {
            status: '',
            sort: 'created',
            tag: '',
            catalog: '',
            isTop: false,
            page: 1,
            limit: 20,
            isEnd: false,
            lists: []
        }
    },
    components: {
        ListItem
    },
    methods: {
        // tab切换
        search(val) {
            switch (val) {
            // 未结贴
            case 0:
                this.status = '0'
                this.tag = ''
                break
            // 已结贴
            case 1:
                this.status = '1'
                this.tag = ''
                break
            // 精华
            case 2:
                this.status = ''
                this.tag = '精华'
                break
            // 按照时间去查询
            case 3:
                this.sort = 'created'
                break
            // 按照评论数去查询
            case 4:
                this.sort = 'answer'
                break
            // 综合去查询
            default:
                this.status = ''
                this.tag = ''
            }
        },

        // 获取帖子列表
        getPostList() {
            if (this.isEnd) return
            const params = {
                catalog: this.catalog,
                isTop: this.isTop,
                page: this.page,
                limit: this.limit,
                sort: this.sort,
                tag: this.tag,
                status: this.status
            }

            getList(params).then(res => {
                if (res.data.length < 20) {
                    this.isEnd = true
                }
                this.lists = [...this.lists, ...res.data]
            }).catch(err => {
                this.$zAlert(err.message)
            })
        },

        // 下一页
        nextPage() {
            console.log('nextPage')
            this.page++
            this.getPostList()
        }
    },
    mounted() {
        this.getPostList()
    }
}
</script>
<style lang="scss" scoped>
    .list-component {
        background: #fff;
        .list-panel {
            height: 50px;
            line-height: 50px;
            padding: 0 16px;
            border-radius: 2px;
            border-bottom: 1px solid #E9E9E9;
            a {
                color: #666;
                font-size: 14px;
            }
            .gap-line {
                display: inline-block;
                height: 10px;
                width: 1px;
                margin: 0 10px;
                background: #e2e2e2;
            }
        }
    }
</style>
