<template>
    <div class="login-contaner">
        <ul class="nav">
            <li class="inline-block">
                <router-link :to="{ name: 'login'}">登录</router-link>
            </li>
            <li class="inline-block">
                <router-link :to="{ name: 'register'}">注册</router-link>
            </li>
        </ul>
        <el-form class="from-content" ref="form" label-width="80px" :model="form" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input class="input-style" v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input class="input-style" type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input class="input-style" v-model="form.code" :maxlength="4"></el-input>
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
        const usernameValidator = (rule, value, callback) => {
            if (!value) return callback(new Error('请输入邮箱'))
            const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!reg.test(value)) {
                return callback(new Error('请输入正确的邮箱'))
            } else {
                callback()
            }
        }
        const passwordValidator = (rule, value, callback) => {
            if (!value) return callback(new Error('请输入密码'))
            if (value.length < 6) {
                callback(new Error('密码长度必须至少为6个字符'))
            } else {
                callback()
            }
        }
        const codeValidator = (rule, value, callback) => {
            if (!value) return callback(new Error('请输入验证码'))
            if (value.length < 4) {
                callback(new Error('验证码必须为4个字符'))
            } else {
                callback()
            }
        }

        return {
            form: {
                username: '',
                password: '',
                code: ''
            },
            captcha: '',
            rules: {
                username: [
                    { validator: usernameValidator, trigger: 'blur' }
                ],
                password: [
                    { validator: passwordValidator, trigger: 'blur' }
                ],
                code: [
                    { validator: codeValidator, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm() {
            console.log(111)
            this.$refs.form.validate((valid) => {
                console.log('submitForm', valid)
                if (valid) {
                    console.log(this.form)
                    login({
                        sid: this.$store.state.sid,
                        ...this.form
                    }).then(res => {
                        if (res.code === 200) {
                            this.$store.commit('setUserInfo', res.data)
                            this.$store.commit('setIsLogin', true)
                            this.form.username = ''
                            this.form.password = ''
                            this.form.code = ''
                            console.log('login successfully', res)
                            this.$router.push({ name: 'index' })
                            // this.$zAlert('登录成功')
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
    padding: 16px 16px 32px 16px;
    background: #fff;
    .nav {
        li {
            width: 50px;
            line-height: 50px;
            text-align: center;
            margin: 0 30px;
            a {
                color: #333;
            }
        }
    }
    .input-style {
        width: 300px;
    }
    .captcha {
        display: inline-block;
        cursor: pointer;
    }
    .button-content {
        // margin-top: 100px;
    }
}
</style>
