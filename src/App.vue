<template>

	<div class="app-container">


		<transition>
			<router-view></router-view>
		</transition>
		


		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">新车流程0</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">二手车</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/shopCar">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">纯租</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">转租</span>
			</router-link >
		</nav>
	</div>

</template>

<script>

</script>


<style>
	.app-container{
		margin-top:40px;
		margin-bottom:50px;
		overflow-x:hidden;
	}
	.v-enter{
	opacity:0;
	transform:translateX(100%);
	}
	.v-leave-to{
	opacity:0;
	transform:translateX(-100%);
	position:absolute;
	}
	.v-enter-active{
	transition:all 0.2s ease;
	}
</style>			