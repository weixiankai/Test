<template>
	<div class="error-b">
		<h1>500页面</h1>
		<hr />
		<el-row :gutter="20">
  		<el-col :span="24">
  			<div class="my-error">
  				<h2>500</h2>
					<h3>无法响应你的请求</h3>
					<h4>数据库哪里好像出错了耶...</h4> 
					<el-button @click=backHome()>返回首页</el-button>
  			</div>
  		</el-col>
		</el-row>
	</div>
</template>
<script>
	import router from '../router'
	export default {
	  name: 'error-b',
	  router,
	  data(){
	  	return{
	  	}
	  },
  	methods:{
	  	backHome(){
	  		router.push({ name: "Home" })
	  	}
	  }
	}
</script>

<style lang="less" scoped>
	.error-b{
		h1{
			font-weight: 200;
			margin: 0 0 20px;
		}
		hr{
			height: 1px;
			border: none;
			background-color: grey;
		}
		.my-error{
			height: 400px;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-flow: column;
			h4{
				margin: 10px 0px;
				font-weight: 200;
			}
			h2{
				font-size: 160px;
				margin: 10px 0px;
				color: #28B779;
				font-weight: bold;
			}
			h3{
				margin: 10px 0px;
				font-size: 24px;
			}
		}
	}
	.box-card{
		margin-bottom: 20px;
	}
</style>