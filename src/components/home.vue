<template>
	<div class="home">
		<div class="home-header">
			<div><span class="fa fa-dashboard"></span><p>仪表盘</p></div>
			<div><span class="fa fa-shopping-cart"></span><p>购物车</p></div>
			<div><span class="fa fa-globe"></span><p>市场</p></div>
			<div><span class="fa fa-user"></span><p>用户</p></div>
			<div><span class="fa fa-bar-chart"></span><p>统计信息</p></div>
		</div>
		<el-row :gutter="20">
		  <el-col :span="12">
		  	<el-collapse v-model="collapseA">
			  <el-collapse-item title="最新消息" name="1"> 
			    <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			    <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			    <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			    <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			  </el-collapse-item>
			  <el-button type="primary" :loading="true">加载中</el-button>
			</el-collapse>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>待处理事件</span>
			  </div>
				  <el-alert title="需要维护10台服务器" type="success"></el-alert>
				  <el-alert title="需要编写开发文档" type="info"></el-alert>
				  <el-alert title="需要维护网页代码" type="warning"></el-alert>
				  <el-alert title="需要设计网页" type="error"></el-alert>
			</el-card>
		  </el-col>
		  <el-col :span="12">
		  	<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>开发进度</span>
			  </div>
			  	<p>微信项目开发进度</p>
				<el-progress :text-inside="true" :stroke-width="30" :percentage="10"></el-progress>
				<p>微信项目开发进度</p>
				<el-progress :text-inside="true" :stroke-width="30" :percentage="70"></el-progress>
				<p>微信项目开发进度</p>
				<el-progress :text-inside="true" :stroke-width="30" :percentage="100" status="success"></el-progress>
				<p>微信项目开发进度</p>
				<el-progress :text-inside="true" :stroke-width="30" :percentage="50" status="exception"></el-progress>
			</el-card>
			<el-collapse v-model="collapseB" >
			  <el-collapse-item title="项目通知" name="1"> 
			    <div class="my-box" >
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			    <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			     <div class="my-box">
			    		<div>
			    			<span class="fa fa-flag"></span>
			    		</div>
			    		<div>
			    			<p>管理员A / Date: 2 Aug 2018 / Time:09:27</p>
			    			<p>系统运行一切正常</p>
			    		</div>
			    </div>
			    <el-button type="primary" :loading="true">加载中</el-button>
			  </el-collapse-item>			 
			</el-collapse>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"home",
		mounted(){
			this.$notify({
	          title: '欢迎使用',
	          message: '请任意使用所有功能',
	          duration:2000,
	          type: 'success',
	          offset:100
        })
			setTimeout(() =>{
      	this.$notify({
      	  title: '欢迎使用',
      	  message: '所有的功能尽情使用吧',
      	  duration: 2000,
      	  type: 'warning',
      	  offset: 100
      	});       
      },1000)
		},
		data(){
			return{
				collapseA:["1"],collapseB:["1"]
			}
		}
	}
</script>

<style lang="less" scoped>
	.home-header{
		&>div{
			width: 170px;
			height: 65px;
			padding-top: 10px;
			margin: 0px 10px 10px 0;
			float: left;
			text-align: center;
			span{
				font-size: 30px;
				color: white;
			}
			p{
				color: white;
				margin: 8px 0px;
				font-weight: 200;
			}
		}
		&>div:nth-child(1){background-color:#26A8E3;}
		&>div:nth-child(2){background-color:#26B678;}
		&>div:nth-child(3){background-color:#FEB747;}
		&>div:nth-child(4){background-color:#DA542D;}
		&>div:nth-child(5){background-color:#2255A4;}
	}
	
	.el-collapse{
		padding: 0px 20px;
		background-color: #FFFFFF;
	}
	
	.my-box{
		display: flex;
		flex-flow: row nowrap;
		height: 60px;
		padding: 10px 0px;
		border-bottom: 1px solid gray;
		&>div:first-child{
			width: 60px;
			flex-grow:0;
			height: 60px;
/*			background-color: lightblue;*/
			span{
				display: flex;
				width: 40px;
				height: 40px;
				padding: 10px;
				justify-content: center;
				align-items: center;
				font-size: 24px;
				color: #666;
				background-color:#ccc;
			}
		}
		&>div:last-child{
			flex-grow:1;
			height: 60px;
			p{
				margin: 5px 0px;
				padding-left: 15px;
				&:hover{
					color: dodgerblue;
				}
			}
		}
	}
	.el-collapse{
		margin-bottom: 20px;
	}
	
	button{
		margin: 10px 0;
	}
	.box-card{
		margin-bottom: 20px;
		.el-alert{
			margin-bottom: 10px;
		}
		.el-progress{
			margin-bottom: 10px;
		}
	}
</style>