<template>
    <div class="login-contaner">
        <ul class="nav clearfix">
            <li>
                <router-link :to="{ name: 'login'}">登录</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'register'}">注册</router-link>
            </li>
        </ul>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="form.code"></el-input>
            </el-form-item>
            <div class="captcha" @click="getCaptcha()" v-html="captcha"></div>
            <el-form-item class="button-content">
                <el-button type="primary" @click="submitForm">点击登录</el-button>
                <el-button @click="submitForm">
                    <router-link :to="{ name: 'forget' }">忘记密码</router-link>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { getCode, login } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'
export default {
    components: {
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
                code: ''
            },
            captcha: '',
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 4, message: '请输入4位验证码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.form.validate((valid) => {
                console.log('submitForm', valid)
                if (valid) {
                    console.log(this.form)
                    login({
                        sid: this.$store.state.sid,
                        ...this.form
                    }).then(res => {
                        if (res.code === 200) {
                            this.form.username = ''
                            this.form.password = ''
                            this.form.code = ''
                            console.log('login successfully', res)
                            this.$zAlert('登录成功')
                        } else {
                            this.$zAlert(res.msg)
                        }
                    }).catch(err => {
                        const data = err.response.data
                        if (data.code === 500) {
                            this.$zAlert('用户名密码校验失败，请检查')
                        } else {
                            this.$zAlert('服务器错误')
                        }
                    })
                } else {
                    return false
                }
            })
        },
        getCaptcha() {
            const sid = this.$store.state.sid
            getCode(sid).then(res => {
                if (res.code === 200) {
                    this.captcha = res.data
                }
            })
        }
    },
    mounted() {
        let sid = ''
        if (localStorage.getItem('sid')) {
            sid = localStorage.getItem('sid')
        } else {
            sid = uuidv4()
            localStorage.setItem('sid', sid)
        }
        this.$store.commit('setSid', sid)
        console.log('sid-->>>', sid)
        this.getCaptcha()
    }
}
</script>
<style lang="scss" scoped>
.login-contaner {
    width: 500px;
    width: 500px;
    .nav {

        li {
            float: left;
            width: 50px;
            line-height: 50px;
            text-align: center;
            margin: 0 30px;
        }
    }
    .captcha {
        display: inline-block;
        cursor: pointer;
    }
    .button-content {
        margin-top: 100px;
    }
}
</style>
