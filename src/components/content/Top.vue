<template>
    <div class="top-component" v-if="lists.length">
        <div class="list-panel flex j-content-between">
            <div class="flex">
                <span>置顶</span>
            </div>
        </div>
        <list-item :lists="lists" :isShow="false"></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/content/ListItem.vue'
import listMixin from '@/mixin/list.js'
export default {
    name: 'top',
    mixins: [listMixin],
    data() {
        return {
            isTop: 1
        }
    },
    components: {
        ListItem
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
