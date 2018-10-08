// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Input,Button,Form,FormItem,Container,Header,
          Aside,Main,Collapse,CollapseItem,Breadcrumb,
         BreadcrumbItem,Table,TableColumn,Row,Col,
         Autocomplete,Dropdown,DropdownMenu,DropdownItem,
         Pagination,Radio,Dialog} from 'element-ui';

Vue.component(Input.name, Input); 
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Autocomplete.name, Autocomplete);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Pagination.name, Pagination);
Vue.component(Radio.name, Radio);
Vue.component(Dialog.name, Dialog);






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
