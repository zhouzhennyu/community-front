<template>
    <div class="user-center-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <ul class="menu-container t-center">
                    <li
                        v-for="(item, index) in menus"
                        :key="index"
                        class="menu-item">
                        <router-link :to="{ name: item.link }" exact-active-class="center-menu-active">{{ item.name }}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus: [
                {
                    name: '我的主页',
                    link: 'user-home'
                },
                {
                    name: '用户中心',
                    link: 'center'
                },
                {
                    name: '基本设置',
                    link: 'settings'
                },
                {
                    name: '我的帖子',
                    link: 'posts'
                },
                {
                    name: '我的消息',
                    link: 'msg'
                },
                {
                    name: '其他设置',
                    link: 'others'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.user-center-container {
    margin-top: 15px;
    .menu-container {
        color: #fff;
        border-radius: 2px;
        font-size: 0;
        min-height: 600px;
        box-sizing: border-box;
        background-color: #393D49;
        padding: 10px 0;
        .menu-item {
            font-size: 14px;
            line-height: 45px;
            a {
                display: block;
                color: rgba(255,255,255,.7);
                &:hover {
                    color: #fff;
                    background-color: #4E5465;
                }
            }
            .center-menu-active {
                background-color: #009688;
            }
        }
    }
}
</style>
