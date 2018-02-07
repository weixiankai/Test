<template>
	<div class="my-header">
		<h1>信息系统管理平台</h1>
		<div class="my-header-right">
			<div class="my-header-right-user">
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<span class="fa fa-user"></span>&nbsp;&nbsp;欢迎你，Admin
					<span class="fa fa-caret-down"></span>
				</span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item><span class="fa fa-file"></span>&nbsp;&nbsp;个人资料</el-dropdown-item>
			    <el-dropdown-item><span class="fa fa-book"></span>&nbsp;&nbsp;我的人物</el-dropdown-item>
			    <el-dropdown-item><span class="fa fa-key"></span>&nbsp;&nbsp;退出系统</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>							
			</div>
			<div class="my-header-right-msg">
				<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<span class="fa fa-envelope"></span>&nbsp;&nbsp;我的消息
					<el-badge :value="12" class="item"></el-badge>
					<span class="fa fa-caret-down"></span>
				</span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item><span class="fa fa-plus"></span>&nbsp;&nbsp;新消息</el-dropdown-item>
			    <el-dropdown-item><span class="fa fa-envelope-o"></span>&nbsp;&nbsp;收件箱</el-dropdown-item>
			    <el-dropdown-item><span class="fa fa-arrow-up"></span>&nbsp;&nbsp;发件箱</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			</div>
			<div class="my-header-right-set">
				<span class="fa fa-gear"></span>&nbsp;&nbsp;<span>设置</span>
			</div>
			<div class="my-header-right-exit">
				<span class="fa fa-share"></span>&nbsp;&nbsp;<span>退出系统</span>
			</div>
			<div class="my-header-right-input">
				<input type="text" placeholder="搜索..."/>
				<button><i class="fa fa-search"></i></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"my-header"
	}
</script>

<style lang="less" scoped>
	.my-header{
		height: 50px;
		background-color:#1f262d ;
		h1{
			float: left;
			color:#A4D3EE;
			padding-left: 40px;
			height: 50px;
			line-height: 50px;
			text-align: left;
			margin: 0;
			font-size: 1.4rem;
		}
		.my-header-right{
			height: 50px;		
			float:right;
			&>div{
				height: 50px;
				line-height: 50px;
				float: left;
				cursor: pointer;
				border-left: 1px solid #000;
				padding: 0px 10px;
			}
			span{
				color:#999;
				&:hover{
					color:white;
				}
			}
			input{
				background-color: #888 !important;
				border: none;
				height: 24px;
				padding: 0px 10px;
				color:white;
				&:focus{
					outline: none;
				}
			}
			button{
				background-color: #28B779;
				color: white ;
				padding: 7px 10px !important;
				border: none;
				transition: all .4s;
				&:hover{
					transform: rotate(360deg);
				}
				
			}	
		}
	}
</style>
