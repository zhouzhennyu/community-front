<template>
    <div class="my-posts-container">
        <el-table
            :data="postData"
            height="250"
            border
            style="width: 100%" >
            <el-table-column
                prop="title"
                label="帖子标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                align="center"
                label="状态">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="结贴">
            </el-table-column>
            <el-table-column
                prop="sendDate"
                align="center"
                label="发表时间">
            </el-table-column>
            <el-table-column
                prop="data"
                align="center"
                label="数据">
            </el-table-column>
            <el-table-column
                align="center"
                label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            postData: [{
                title: '哈哈哈哈',
                status: '开',
                address: '未结贴',
                sendDate: '16小时前',
                data: '2阅/0答'
            }]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log('Edit', index, row)
        },
        handleDelete(index, row) {
            console.log('Delete', index, row)
        }
    }
}
</script>
<style lang="scss" scoped>
.my-posts-container {

}
</style>
