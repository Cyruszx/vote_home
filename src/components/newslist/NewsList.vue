<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/newslist/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg">
						<div class="mui-media-body">
							像少年啦飞驰
							<p class='mui-ellipsis'>
								<span>2019-01-18</span>
								<span>点击次数：0次</span>
							</p>
						</div>
					</router-link>
				</li>

			</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{'id':0},
					{'id':1},
					{'id':2},
					{'id':3},
					{'id':4},
					{'id':5},
					{'id':6},
					{'id':7},
					{'id':8},
					{'id':9},
				]
			}
		}
	};

</script>

<style>
	.mui-media-body{
		font-size: 14px;
	}
	.mui-ellipsis{
		display: flex;
		justify-content: space-between;
		color:#226aff;
		font-size: 12px;
	}

</style>