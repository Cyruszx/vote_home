
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import NewsList from './components/newslist/NewsList.vue'
import Newsinfo from './components/newslist/NewsInfo.vue'

// 创建路由对象
var router = new VueRouter({

	routes:[
	{path:'/',redirect:'/home'},
	{path:'/home',component:HomeContainer},
	{path:'/member',component:MemberContainer},
	{path:'/shopCar',component:ShopCarContainer},
	{path:'/search',component:SearchContainer},
	{path:'/home/newslist',component:NewsList},
	{path:'/home/newslist/newsinfo/:id',component:Newsinfo}
	
	],

	linkActiveClass:'mui-active'

})
//把路由对象暴露出去
export default router