<template>
    <div class="list-component">
        <div class="list-panel flex j-content-between">
            <div class="flex a-items-center">
                <p>综合</p><span class="gap-line"></span>
                <p>未接</p><span class="gap-line"></span>
                <p>已结</p><span class="gap-line"></span>
                <p>精华</p>
            </div>
            <div class="flex a-items-center">
                <p>按最新</p><span class="gap-line"></span>
                <p>按热议</p>
            </div>
        </div>
        <list-item></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/content/ListItem.vue'
export default {
    data() {
        return {}
    },
    components: {
        ListItem
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
            p {
                color: #666;
                padding: 0 4px;
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
