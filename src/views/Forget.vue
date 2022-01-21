<template>
    <div class="register-container">
         <ul class="nav clearfix">
            <li>
                <router-link :to="{ name: 'login'}">登录</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'forget'}">找回密码</router-link>
            </li>
        </ul>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verifyCode">
                <el-input v-model="form.verifyCode"></el-input>
            </el-form-item>
            <el-form-item class="button-content">
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { forget } from '@/api/login'
export default {
    name: 'forget',
    data() {
        return {
            form: {
                email: '',
                verifyCode: ''
            }

        }
    },
    methods: {
        submitForm() {
            console.log('xxxxxxxx')
            const data = this.form
            forget({
                username: data.email,
                code: data.verifyCode
            }).then(res => {
                if (res.status === 200) {
                    alert('邮件发送成功')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.register-container {
    .nav {

        li {
            float: left;
            width: 100px;
            line-height: 50px;
            text-align: center;
            margin: 0 30px;
        }
    }
}
</style>
