<template>
    <div class="my-collection-container">
        <el-table
            :data="collectionData"
            height="250"
            border
            style="width: 100%" >
            <el-table-column
                prop="title"
                label="帖子标题">
            </el-table-column>
            <el-table-column
                prop="collectionDate"
                align="center"
                label="收藏时间"
                width="280">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collectionData: []
        }
    }
}
</script>
<style lang="scss" scoped>
.my-collection-container {

}
</style>
