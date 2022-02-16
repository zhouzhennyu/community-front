<template>
    <div class="index-container">
        <el-row :gutter="20">
            <el-col :span="18">
                <zzy-list></zzy-list>
            </el-col>
            <el-col :span="6">
                <zzy-hotlist></zzy-hotlist>
                <zzy-ads></zzy-ads>
                <zzy-links></zzy-links>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Ads from '@/components/sidebar/Ads.vue'
import HotList from '@/components/sidebar/HotList.vue'
import Links from '@/components/sidebar/Links.vue'
import List from '@/components/content/List.vue'
export default {
    data() {
        return {}
    },
    components: {
        'zzy-ads': Ads,
        'zzy-hotlist': HotList,
        'zzy-links': Links,
        'zzy-list': List
    }
}
</script>
<style lang="scss" scoped>
.index-container {
    width: 1200px;
    margin: auto;
}
</style>
