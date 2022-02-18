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
// import { getList } from '@/api/content.js'
import listMixin from '@/mixin/list.js'
export default {
    name: 'list',
    mixins: [listMixin],
    data() {
        return {
            status: '',
            sort: 'created',
            tag: '',
            catalog: '',
            page: 0,
            isEnd: false,
            lists: [],
            currentVal: ''
        }
    },
    components: {
        ListItem
    },
    watch: {
        currentVal(nVal, oVal) {
            this.init()
        },
        '$route'(nVal, oVal) {
            const catalog = this.$route.params.catalog
            if (catalog !== '') {
                this.catalog = catalog
            }
            this.init()
        }
    },
    methods: {
        init() {
            this.page = 0
            this.lists = []
            this.isEnd = false
            this._getList()
        },
        // tab切换
        search(val) {
            if (typeof val === 'undefined' && this.currentVal === '') {
                return
            }
            this.currentVal = val
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
        }
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
