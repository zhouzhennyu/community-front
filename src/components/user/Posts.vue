<template>
    <div class="center-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的帖子" name="first">
                <my-posts></my-posts>
            </el-tab-pane>
            <el-tab-pane label="我的收藏的帖子" name="second">
                <my-collection></my-collection>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import MyCollection from './common/MyCollection.vue'
import MyPosts from './common/MyPosts.vue'
export default {
    name: 'posts',
    data() {
        return {
            activeName: 'first'
        }
    },
    components: {
        MyPosts,
        MyCollection
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
