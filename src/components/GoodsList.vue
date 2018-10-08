<template>
    <div class="goodslist">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>关键字</h1>
        <el-row class="demo-autocomplete">
            <el-col :span="12">
                <el-autocomplete class="inline-input" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入商品名称" @select="handleSelect"></el-autocomplete>
            </el-col>
        </el-row>
        <h1>商品分类</h1>
        <el-dropdown>
            <el-button >
                请选择分类
                <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button type="success" icon="el-icon-search"></el-button>
        <hr>
       
            <template  slot-scope="scope">
                <el-button type="success"  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                <el-button type="success">添加</el-button>
            </template>
        <el-table ref="multipleTable" :data="tableData"  :default-sort = "{prop: 'date', order: 'descending'}" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter" show-overflow-tooltip ></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="40">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsList',
        data() {
                    return {
                        restaurants: [],
                        state: '',
                        currentPage: 1,
                        tableData: [{
                            date: '2016-05-03',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                         {
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1517 弄'
                        },
                        {
                            date: '2016-05-06',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                         {
                            date: '2016-05-07',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1513 弄'
                        }, 
                        {
                                date: '2016-05-08',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1515 弄'
                        },
                        {
                                date: '2016-05-08',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1515 弄'
                        },
                        {
                                date: '2016-05-06',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                                date: '2016-05-07',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1513 弄'
                        },
                        {
                                date: '2016-05-10',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1512 弄'
                        }],
                        multipleSelection: []
                    };
                },
                methods: {
                    querySearch(queryString, cb) {
                        var restaurants = this.restaurants;
                        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                        // 调用 callback 返回建议列表的数据
                        cb(results);
                    },
                    createFilter(queryString) {
                        return (restaurant) => {
                            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                        };
                    }, 
                    deleteRow(index, rows) {
                        rows.splice(index, 1);
                    }, 
                    loadAll() {
                        return [
                            { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                            { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                            { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                            { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                            { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                            { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" }
                        ];
                    },
                    handleSelect(item) {
                        console.log(item);
                    },
                    handleSelectionChange(val) {
                        this.multipleSelection = val;
                    },
                    formatter(row, column) {
                        return row.address;
                        console.log(11)
                    },
                    handleSizeChange(val) {
                        console.log(`每页 ${val} 条`);
                    },
                    handleCurrentChange(val) {
                        console.log(`当前页: ${val}`);
                    }
                },
                mounted() {
                    this.restaurants = this.loadAll();
                }
    }

</script>

<style lang="scss" scoped>
    .el-breadcrumb{
      margin-bottom: 10px;
    }
    h1{
        font-weight: normal;
        font-size:16px;
        color:#666;
        display:inline-block;
        line-height: 22px;
        width:80px;height:22px;
    }
    .el-row{
        top:10px;
        display:inline-block;
    }
    .el-dropdown{
         margin-right: 10px;
    }
   .el-dropdown-menu{
       top:10px;
       display:inline-block;   
   }
</style>