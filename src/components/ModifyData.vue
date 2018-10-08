<template>
    <div class="modifyData">
        <h1>设置我的资料</h1>
        <hr>
        <div class="formData">
            <el-form class="demo-ruleForm">
                <el-form-item  prop="pass">
                    <h1>我的角色</h1>
                    <el-input type="password"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="checkPass">
                    <h1>用户名</h1>
                    <el-input  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="age">
                    <h1>昵称</h1>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <h1>性别</h1>
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio>
                </el-form-item>
                <el-form-item>
                    <h1>图像</h1>
                    <el-input v-model="input" placeholder="请输入图片地址"></el-input>
                    <el-button icon="el-icon-upload">上传图片</el-button>
                    <el-button>查看图片</el-button>
                </el-form-item>
                <el-form-item>
                    <h1>手机</h1>
                    <el-input v-model="input"></el-input>
                </el-form-item>
                <el-form-item>
                    <h1>邮箱</h1>
                    <el-input v-model="input"></el-input>
                </el-form-item>
                <el-form-item >
                    <h1>备注</h1>
                    <el-input class="area" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" v-model="textarea">
                    </el-input>
                </el-form-item>
                <el-form-item class="submit">
                    <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
                    <el-button @click="resetForm('ruleForm2')">重新填写</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModifyData',
        data() {
            return {
                 radio: '1',
                 input: '',
                 textarea: ''
            }
        }
    }

</script>

<style lang="scss" scoped>
    h1{
        font-weight: normal;
        font-size:14px;
        color:#666;
        display:inline-block;
        line-height: 14px;
        width:100px;height:14px;
    }
    .formData{margin:10px 40px;}
    .el-input{
        width:236px;height:40px;
    }
    .submit{
        margin-left:104px;
    }
    .area{
        width:600px;
    }
    
</style>