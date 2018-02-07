<template>
	<div class="other-a">
		<h1>轮播图</h1>
		<hr />
		<el-row :gutter="20">
  		<el-col :span="24">
  			<p>可以循环的轮播图</p>
			  <el-carousel :interval="5000" arrow="always">
			    <el-carousel-item class="my-img-a" v-for="item in 4" :key="item">
			    </el-carousel-item>
			  </el-carousel>
  			<p>卡片式的轮播图</p>
				  <el-carousel :interval="4000" type="card" height="300px">
				    <el-carousel-item class="my-img-b" v-for="item in 4" :key="item">
				    </el-carousel-item>
				  </el-carousel>  				
  		</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"other-a",
		data(){
	  		return{
	  	}
		  },
	  	methods:{
	  	}
	}
</script>

<style lang="less" scoped>
	.other-a{
		h1{
			font-weight: 200;
			margin: 0 0 20px;
		}
		hr{
			height: 1px;
			border: none;
			background-color: grey;
		}
		.my-img-a{
			background-size: cover;
		}
		.my-img-a:nth-of-type(1){
			background-image: url(../assets/sky1.jpg);
		}
		.my-img-a:nth-of-type(2){
			background-image: url(../assets/sky2.jpg);
		}		
		.my-img-a:nth-of-type(3){
			background-image: url(../assets/sky3.jpg);
		}		
		.my-img-a:nth-of-type(4){
			background-image: url(../assets/sky4.jpg);
		}		
		.my-img-b{
			background-size: cover;
		}
		.my-img-b:nth-of-type(1){
			background-image: url(../assets/tech1.jpg);
		}
		.my-img-b:nth-of-type(2){
			background-image: url(../assets/tech2.jpg);
		}		
		.my-img-b:nth-of-type(3){
			background-image: url(../assets/tech3.jpg);
		}		
		.my-img-b:nth-of-type(4){
			background-image: url(../assets/tech4.jpg);
		}			
		
		
	}
	.box-card{
		margin-bottom: 20px;
		.el-transfer-panel{
			width: 180px !important;
		}
	}
</style>