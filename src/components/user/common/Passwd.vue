<template>
    <div class="passwd-container">
        <el-form :model="passwdForm" ref="passwdForm" :hide-required-asterisk="false" label-position="left" label-width="100px">
            <el-form-item label="当前密码" prop="currentPass" required>
                <el-input v-model="passwdForm.currentPass"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPass" required>
                <el-input v-model="passwdForm.newPass"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="againPass" required>
                <el-input v-model="passwdForm.againPass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitPasswdForm('passwdForm')">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'passwd',
    data() {
        return {
            passwdForm: {
                currentPass: '',
                newPass: '',
                againPass: ''
            }
        }
    },
    methods: {
        submitPasswdForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('提交')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.passwd-container {

}
</style>
