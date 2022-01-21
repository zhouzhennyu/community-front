<template>
    <div class="register-container">
        <ul class="nav clearfix">
            <li>
                <router-link :to="{ name: 'login'}">登录</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'register'}">注册</router-link>
            </li>
        </ul>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="邮箱" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
                <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="againPass">
                <el-input v-model="form.againPass"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="form.code"></el-input>
            </el-form-item>
            <div class="captcha" @click="getCaptcha()" v-html="captcha"></div>
            <el-form-item class="button-content">
                <el-button type="primary" @click="submitForm">点击注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { getCode, register } from '@/api/login'
export default {
    name: 'register',
    data() {
        return {
            form: {
                username: '',
                nickname: '',
                password: '',
                againPass: '',
                code: ''
            },
            captcha: '',
            rules: {
                username: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' }
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
            console.log(11111, this.$refs.form)
            this.$refs.form.validate((valid) => {
                console.log('submitForm', valid)
                if (valid) {
                    console.log(this.form)
                    register({
                        username: this.form.username,
                        nickname: this.form.nickname,
                        password: this.form.password,
                        code: this.form.code,
                        sid: this.$store.state.sid
                    }).then(res => {
                        if (res.code === 200) {
                            this.form.username = ''
                            this.form.password = ''
                            this.form.nickname = ''
                            this.form.againPass = ''
                            this.form.code = ''
                            console.log('register successfully', res)
                            this.$zAlert('注册成功')
                            setTimeout(() => {
                                this.$router.push('/login')
                            })
                        } else {
                            this.$zAlert(res.msg)
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
    created() {
        this.getCaptcha()
    }
}
</script>
<style lang="scss" scoped>
.register-container {
    .nav {

        li {
            float: left;
            width: 50px;
            line-height: 50px;
            text-align: center;
            margin: 0 30px;
        }
    }
}
</style>
