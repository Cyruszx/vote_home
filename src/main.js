
import Vue from 'vue'

import app from './App.vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

// 3.导入自定义路由模块
import router from './router.js'

//mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//mint-ui
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);






var vm = new Vue({
	el:'#app',
	data:{

	},
	render:c => c(app),
	router //4.将路由对象挂载到vm上
})