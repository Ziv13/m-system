import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Management from '@/components/Management'
import Category from '@/components/Category'
import GoodsList from '@/components/GoodsList'
import OrderList from '@/components/OrderList'
import ChangePwd from '@/components/ChangePwd'
import ModifyData from '@/components/ModifyData'



Vue.use(Router)



export default new Router({
  mode:"history",
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
    },
     { path: '/management', name: 'Management', component: Management ,
      children:[
         { path:'/category', name: 'Category', component: Category },
         { path:'/goodsList', name: 'GoodsList', component: GoodsList },
         { path:'/orderList', name: 'GoodsList', component: OrderList },
         { path:'/changePwd', name: 'GoodsList', component: ChangePwd },
         { path:'/modifyData', name: 'GoodsList',component: ModifyData }           
      ] 
    }
  ]
})
