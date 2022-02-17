<template>
    <div class="top-component">
        <div class="list-panel flex j-content-between">
            <div class="flex">
                <span>置顶</span>
            </div>
        </div>
        <list-item :lists="lists" @nextPage="nextPage" :isShow="false"></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/content/ListItem.vue'
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
        nextPage() {}
    }
}
</script>
<style lang="scss" scoped>
    .top-component {
        background: #fff;
        .list-panel {
            height: 50px;
            line-height: 50px;
            padding: 0 16px;
            border-radius: 2px;
            border-bottom: 1px solid #E9E9E9;
            span {
                color: #666;
                font-size: 14px;
            }
        }
    }
</style>
