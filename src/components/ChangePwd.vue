<template>
    <div class="changePwd">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="当前密码" prop="pwd">
                <el-input v-model.number="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPwd">
                <el-input type="password" v-model="ruleForm.newPwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPwd">
                <el-input type="password" v-model="ruleForm.checkPwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'ChangePwd',
       
        data() {
                var checkpwd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }
            };
            var validateNewPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPwd !== '') {
                        this.$refs.ruleForm.validateField('checkPwd');
                    }
                    callback();
                }
            };
            var validateCheckPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.newPwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    newPwd: '',
                    checkPwd: '',
                    pwd: ''
                },
                rules: {
                    newPwd: [
                        { validator: validateNewPwd, trigger: 'blur' }
                    ],
                    checkPwd: [
                        { validator: validateCheckPwd, trigger: 'blur' }
                    ],
                    pwd: [
                        { validator: checkpwd, trigger: 'blur' }
                    ]
                }
            };
        }
    }

</script>

<style lang="scss" scoped>
    .el-breadcrumb{
      margin-bottom: 10px;
    }
    .el-input{
        width:276px;
    }
</style>