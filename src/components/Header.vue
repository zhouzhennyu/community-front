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
                    <div class="login-container">
                        <!-- <span><i class="el-icon-user-solid"></i></span> -->
                        <router-link :to="{ name: 'login'}">登录</router-link>
                        <router-link :to="{ name: 'register'}">注册</router-link>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
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
            }
        }
    }
</style>
