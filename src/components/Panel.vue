<template>
    <div class="panel-component">
        <div class="panel-container">
            <el-row :gutter="20">
                <el-col :span="18">
                    <ul class="panel-nav inline-block">
                        <router-link tag="li" class="inline-block" to="/">
                            <a href="/">首页</a>
                        </router-link>
                        <router-link
                            tag="li"
                            class="inline-block"
                            v-for="(item, index) in panels" :key="index"
                            :to="item.path"
                        >
                            <a href="">
                                {{ item.name}}
                                <span v-if="item.isNew" class="new-dot"></span>
                            </a>
                        </router-link>
                        <template v-if="isLogin">
                            <li class="inline-block"><router-link to="/user/post">我发表的贴</router-link></li>
                            <li class="inline-block"><router-link to="/user/sc">我收藏的贴</router-link></li>
                        </template>
                    </ul>
                </el-col>
                <el-col :span="6" class="t-right">
                    <div class="public-tips inline-block">发表新帖</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            panels: [
                {
                    name: '提问',
                    path: '/index/ask',
                    isNew: true
                },
                {
                    name: '分享',
                    path: '/index/share',
                    isNew: false
                },
                {
                    name: '讨论',
                    path: '/index/discuss',
                    isNew: false
                },
                {
                    name: '建议',
                    path: '/index/advise',
                    isNew: false
                },
                {
                    name: '公告',
                    path: '/index/notice',
                    isNew: false
                },
                {
                    name: '动态',
                    path: '/index/logs',
                    isNew: false
                }
            ],
            isLogin: this.$store.state.isLogin
        }
    }
}
</script>
<style lang="scss" scoped>
    .panel-component {
        height: 50px;
        line-height: 50px;
        margin-bottom: 10px;
        background: #fff;
    }
    .panel-container {
        width: 1200px;
        margin: auto;
        .panel-nav {
            li {
                padding: 0 20px;
                a {
                    color: #333;
                    position: relative;
                    &:hover {
                        color: #5FB878;
                    }
                }
                span {
                    position: absolute;
                    top: 0;
                    right: -4px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: red;
                }
            }
        }
        .public-tips {
            height: 38px;
            color: #fff;
            padding: 0 20px;
            line-height: 38px;
            background: #009688;
            border-radius: 4px;
        }
    }
</style>
