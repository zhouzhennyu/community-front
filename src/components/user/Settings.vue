<template>
    <div class="center-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的资料" name="first">
                <my-info></my-info>
            </el-tab-pane>
            <el-tab-pane label="头像" name="second">
                <pic-upload></pic-upload>
            </el-tab-pane>
            <el-tab-pane label="密码" name="third">
                <passwd></passwd>
            </el-tab-pane>
            <el-tab-pane label="帐号绑定" name="fourth">
                <accounts></accounts>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import MyInfo from './common/MyInfo.vue'
import Accounts from './common/Accounts.vue'
import Passwd from './common/Passwd.vue'
import PicUpload from './common/PicUpload.vue'
export default {
    name: 'settings',
    components: {
        MyInfo,
        Accounts,
        Passwd,
        PicUpload
    },
    data() {
        return {
            activeName: 'first'
        }
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
