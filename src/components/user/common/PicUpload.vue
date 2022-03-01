<template>
    <div class="pic-upload-container">
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><em>上传头像</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    name: 'pic-upload',
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.pic-upload-container {

}
</style>
