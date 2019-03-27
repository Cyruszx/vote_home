<template>
	<div>
		<h3>新闻详情页面--id:{{id}}</h3>
		<hr>
		<br>
		<br>
		<br>
		<br>
		<br>	
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请发表评论(最大120字)" maxlength="120" v-model="com1"></textarea>	
		<mt-button type="danger" size="large" plain @click="postcom">发表评论</mt-button>
		<div class="comments" v-for="(item,i) in comments" :key="i">
			
			<div class="title" >第{{i+1}}楼 用户:{{item.name}}</div>
			<div class="con">{{item.con}}</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				id:this.$route.params.id,
				com1:'',
				comments:[
					{'name':'匿名用户','con':'你好'},
					{'name':'匿名用户','con':'你好'},
				]
			}
		},
		methods:{
			postcom(){
				var com = {'name':'匿名用户','con':this.com1}
				this.comments.unshift(com)
				this.com1=''
			}
		}
	};
</script>

<style>
	.title{
		background-color: #ccc;
	}
	.con{
		padding:0px 10px;
	}
</style>