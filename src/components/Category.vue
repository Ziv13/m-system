<template>
    <div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/management' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="success" class="add" @click="addEquipment">添加</el-button>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%;color:#666">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="id" label="ID" width="120">
        </el-table-column>
        <el-table-column property="category" label="分类" width="220">
        </el-table-column>


        <el-table-column  label="操作" width="180">
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" size="small"  @click.native.prevent="handleEdit(scope.$index, scope.row)" >编辑</el-button>
                <el-button type="danger" icon="el-icon-delete" size="small"  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>      
            </template>
        </el-table-column>
    </el-table>

    <el-dialog :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-form :model="tableData"  slot-scope="scope">
            <el-form-item label="ID">
                <el-input property="id" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-input property="category" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  
       
    </div>
</template>

<script>
    export default {
        name: 'Category',
         data() {   
                    return {
                        tableData: [{
                            id: '001',
                            category: '美食'
                        }, {
                            id: '002',
                            category: '新闻'
                        }, {
                            id: '003',
                            category: '八卦'
                        }, {
                            id: '004',
                            category: '体育'
                        },
                        {
                            id: '005',
                            category: '音乐'
                        }],
                        seen: false,
                        currentRow: null,
                        dialogFormVisible: false,
                        // form:{
                        //     id: "",
                        //     category: ""   
                        // },
                        
                        //新增or编辑弹框标题(根据点击的新增or编辑按钮显示不同的标题)
                        titleMap: {
                            addEquipment: '新增',
                            editEquipment: "编辑"
                    },
                        //新增和编辑弹框标题
                        dialogStatus: "",
                    }
                },

                methods: {
                    setCurrent(row) {
                        this.$refs.singleTable.setCurrentRow(row);
                    },
                    handleCurrentChange(val) {
                        this.currentRow = val;
                    },
                    deleteRow(index, rows) {
                        rows.splice(index, 1);
                    }, 
                     //新增
                    addEquipment(){     
                        //显示弹框
                        this.dialogFormVisible = true;
                        //新增弹框标题
                        this.dialogStatus = "addEquipment";
                    },
                    //编辑
                    handleEdit() {
                        //显示弹框
                         this.dialogFormVisible = true;
                        //编辑弹框标题
                        this.dialogStatus = "editEquipent"
                    }
                }
            }


</script>

<style lang="scss" scoped>
    .add{
        width:80px;height:40px;position:absolute;top:156px;left:256px;
    }
    
   .el-table{
    margin-top:96px; 
   }
   .el-button{
       display: inline-block;
   }
   
</style>