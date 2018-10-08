
        <template id="management">
            <div>
                <el-container >
                    <el-header height="80px" class="fl">
                        <img src="../assets/logo.png" width="60px" height="40px" border-radius="6px" id="logo_img">
                        <h1>{{text}}</h1>
                        <span class="fr goback" @click="goback">退出</span>
                        <span class="fr login">欢迎xxx登录m-system系统</span>
                        
                    </el-header>
                    <el-container>
                        <el-aside width="200px" >
                            <el-collapse >
                               
                                <el-collapse-item title="商品管理">
                                    <router-link to="/category" replace><h1>商品分类</h1></router-link>
                                    <router-link to="/goodsList" replace><h1>商品列表</h1></router-link>
                                </el-collapse-item>
                                <el-collapse-item title="用户管理">
                                    <router-link to="/changePwd" replace>
                                        <h1>修改密码</h1>
                                    </router-link>
                                    <router-link to="modifyData" replace>
                                        <h1>资料修改</h1>
                                    </router-link>
                                </el-collapse-item>
                                <el-collapse-item title="交易管理">
                                    <router-link to="/orderList" replace>
                                        <h1>订单列表</h1>
                                    </router-link>
                                </el-collapse-item>
                            </el-collapse>
                        </el-aside>
                        <el-main>
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        </template>

<script>
export default {
    data(){
        return {
            text: 'm-system后台管理系统'
        }
    },
     methods: {
                goback() {
                    this.$router.go(-1)
                }
            }
}

</script>

<style lang="scss" scoped>
           
            .el-container{
                margin:0;padding:0;
                border:1px solid#ccc;
            }
            .el-header {
                background-color: #fff;
                color: #333;
                padding:16px 40px;
                
                    h1{
                    color:aqua;
                    display:inline-block;
                     position:relative;
                        top:-16px; left:16px;
                    }
                    .fl{
                        float:left;
                    }
                    .fr{
                        float:right;
                    }
                    .goback{
                        color:aquamarine;
                        position:relative;
                        top:20px;
                    }
                    .login{
                        position:relative;
                        top:20px;right:40px;
                    }
                  
            }
  
            .el-aside {
                background-color: #fafdff;
                color: #666;
                text-align: center;
                height:800px;
                .el-collapse-item{
                    overflow: hidden;
                    a {
                        text-decoration: none;
                        }
                    h1{            
                       font-size:14px;
                       color:aquamarine;
                       line-height: 40px;
                       text-align:center;
                       height:36px;
                       line-height:44px;
                       
                    }
                }
            }

            .el-main {
                background-color: #fff;
                color: #333;
            }


            
   
</style>
