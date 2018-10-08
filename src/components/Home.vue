<template>
  <div class="login-layout">
      <div class="login-container">
      <div class="img-box">
         <img src="../assets/logo.png" width="100px" height="100px" id="logo_img" >
      </div>
     
      <h1>{{ msg }}</h1>
      <el-form   class="demo-ruleForm" @submit.prevent  classname="el-form">
        
        <el-form-item  prop="username" class="el-form-item">
          <el-button plain disabled icon="el-icon-news"></el-button>
          <el-input v-model="input" placeholder="请输入内容" class="el-input"></el-input>
        </el-form-item>

      
        <el-form-item  prop="password" class="el-form-item">
          <el-button plain disabled icon="el-icon-goods"></el-button>
          <el-input v-model="password" placeholder="请输入密码" class="el-input"></el-input>
        </el-form-item>

        <router-link to='management'><el-button round type="primary" class="st">提交</el-button></router-link>
      </el-form>

      <div class="option fl" >
        <input type="radio" ><span>记住密码</span> <a style="float:right; color:blue;">忘记密码?</a>
      </div>
      
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
      return {
        msg: 'm-system后台管理系统',
        input: '',
        password: ''
       
   }
  }
    
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button{margin: 0;padding:0;}
.login-layout{
  border: 1px solid#ccc;
  width:735px;height:577px;
  margin:0 auto;
  margin-top:60px;
  padding: 0 auto;
  padding-top:40px;
    .login-container{
      margin:0 auto;
      margin-top:30px;
      width:400px;
      
      .img-box{
        text-align: center;
      }
      h1{
        font-weight: normal;
        font-size:26px;
        color:#666;
        text-align: center;
        }

      .el-form{
            margin-top: 40px;
            text-align:center;
              .el-form-item{
                  margin-bottom: 60px;
                  .el-input{
                      width:200px; height:40px;display: inline-block;
                  }
                  .el-button{
                      width:40px; height:40px;display: inline-block;
                      text-align: center;position:relative;right:-4px;
                  }
              }
          .st{
                width: 340px; height: 40px;
              }
      }

        .option{
          margin-top:30px;
          .fl{
            float:left;
          }
        }
    }
    
}



</style>
