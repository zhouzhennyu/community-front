<template>
    <div class="header-component">
        <div class="header">
            <el-row type="flex" align="middle" justify="space-between">
                <el-col :span="18">
                    <a class="header-logo inline-block" href="/"><img src="../assets/img/home-logo.svg" alt=""></a>
                    <ul class="header-ul inline-block">
                        <li class="inline-block"><i class=""></i><span>交流</span></li>
                        <li class="inline-block"><i class=""></i><span>案例</span></li>
                        <li class="inline-block"><i class=""></i><span>框架</span></li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <template v-if="!isLogin">
                        <div class="login-container">
                            <!-- <span><i class="el-icon-user-solid"></i></span> -->
                            <router-link :to="{ name: 'login'}">登录</router-link>
                            <router-link :to="{ name: 'register'}">注册</router-link>
                        </div>
                    </template>
                    <template v-else>
                        <div class="login-container">
                            <el-dropdown @command="handleCommand">
                                <div class="user-content">
                                    <span class="user-name">{{ userInfo.nickname }}</span>
                                    <img class="user-pic" :src="userInfo.pic" alt="">
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item><router-link :to="{name: 'settings'}">基本设置</router-link></el-dropdown-item>
                                    <el-dropdown-item><router-link :to="{name: 'msg'}">我的消息</router-link></el-dropdown-item>
                                    <el-dropdown-item><router-link :to="{name: 'user-home'}">我的主页</router-link></el-dropdown-item>
                                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </template>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        // 登录状态
        isLogin() {
            return this.$store.state.isLogin
        },
        // 用户信息
        userInfo() {
            return this.$store.state.userInfo
        }
    },
    methods: {
        handleCommand(command) {
            console.log('logout------', command)
            if (command === 'logout') {
                this.$zConfirm('确定要退出吗', () => {
                    localStorage.clear()
                    this.$store.commit('setIsLogin', false)
                    this.$store.commit('setUserInfo', {})
                    this.$store.commit('setToken', '')
                    this.$router.push({ name: 'index' }, () => {})
                }, () => {})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-component {
        width: 100%;
        background-color: #393D49;
        color: #fff;
        .header {
            width: 1200px;
            height: 60px;
            line-height: 60px;
            box-sizing: border-box;
            margin: auto;
            .header-logo {
                width: 120px;
                img {
                    vertical-align: middle;
                    padding-bottom: 10px;
                }
            }
            .header-ul {
                margin-left: 200px;
                li {
                    padding: 0 30px;
                    color: rgba(255,255,255,.7)
                }
            }
            .login-container {
                a {
                    color: rgba(255,255,255,.7);
                    padding: 0 20px;
                }
                .user-content {
                    cursor: pointer;
                }
                .user-name {
                    color: rgba(255,255,255,.7);
                }
                .user-pic {
                    width: 36px;
                    height: 36px;
                    margin-left: 10px;
                    border-radius: 100%;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
