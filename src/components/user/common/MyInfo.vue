<template>
    <div class="my-info-container">
        <el-form :model="infoForm" ref="infoForm" :hide-required-asterisk="false" label-position="left" label-width="100px">
            <el-form-item label="邮箱" prop="eamil" required>
                <el-input v-model="infoForm.eamil"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname" required>
                <el-input v-model="infoForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="城市" prop="location">
                <el-input v-model="infoForm.location"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="infoForm.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="个性签名" prop="remark">
                <el-input type="textarea" v-model="infoForm.remark"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitInfoForm('infoForm')">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'my-info',
    data() {
        return {
            infoForm: {
                eamil: '',
                nickname: '',
                location: '',
                gender: '',
                remark: ''
            }
        }
    },
    methods: {
        submitInfoForm(formName) {
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
.my-info-container {

}
</style>
