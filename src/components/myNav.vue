<template>
	<div class="my-nav">
		<div class="my-nav-left" ref="nav">
			<div @click="backHome()" class="nav-top">
				<span class="fa fa-home">&nbsp;&nbsp;&nbsp;&nbsp;控制面板</span>
			</div>
			<div>
			    <el-menu class="el-menu-vertical-demo" background-color="#2e363f" text-color="#fff" active-text-color="#ffd04b">
			      <el-submenu class="my-nav-left-box" v-for="(nav,index) in navs" :index="nav.nav_id" :key="index">
			        <template slot="title">
			          <i class="fa" :class="nav.nav_icon">&nbsp;&nbsp;&nbsp;&nbsp;</i><span>{{nav.nav_title}}</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item @click="changeRouter(sub.nav_router)" v-for="(sub,index) in nav.sub_navs" :index="sub.nav_id" :key="index">
			         	<i class="fa" :class="sub.nav_icon">&nbsp;&nbsp;&nbsp;&nbsp;</i><span>{{sub.nav_title}}</span>
			          </el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			    </el-menu>
			</div>
		</div>
		<div class="my-nav-right">
			<div class="nav-top">
				<span @click="backHome()" class="fa fa-home">&nbsp;&nbsp;&nbsp;&nbsp;Home</span>
				<!--<span></span>-->
			</div>
			<div class="nav-view">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import router from '../router'  //在当前组件中使用router需导入，并在组件中加载
	
	export default{
		name:"my-nav",
		router,				// 并在组件中加载
		mounted(){
			console.log(this.$refs.nav)
			console.log(document.body.clientHeight) 
			this.$refs.nav.style.height = document.body.clientHeight - 50 +"px";
			router.push({name:"Home"});
		},
		data(){
			return{
				navs:[
					{nav_id:"1",
					nav_icon:"fa-plus-square-o",
					nav_title:"表单组件",
					sub_navs:[
							{nav_id:"1-1",nav_icon:"fa-caret-down",nav_title:"基本表单",nav_router:"FormA"},
							{nav_id:"1-2",nav_icon:"fa-caret-down",nav_title:"校验表单",nav_router:"FormB"}
						]
					},
					{nav_id:"2",
					nav_icon:"fa-check-square",
					nav_title:"表格组件",
					sub_navs:[
							{nav_id:"2-1",nav_icon:"fa-caret-down",nav_title:"基本表格",nav_router:"TableA"},
							{nav_id:"2-2",nav_icon:"fa-caret-down",nav_title:"复杂表格",nav_router:"TableB"}
						]
					},
					{nav_id:"3",
					nav_icon:"fa-square",
					nav_title:"其他组件",
					sub_navs:[
							{nav_id:"3-1",nav_icon:"fa-caret-down",nav_title:"轮播图",nav_router:"OtherA"},
							{nav_id:"3-2",nav_icon:"fa-caret-down",nav_title:"折叠框",nav_router:"OtherB"}
						]
					},
					{nav_id:"4",
					nav_icon:"fa-warning",
					nav_title:"错误页面",
					sub_navs:[
							{nav_id:"4-1",nav_icon:"fa-caret-down",nav_title:"404错误",nav_router:"ErrorA"},
							{nav_id:"4-2",nav_icon:"fa-caret-down",nav_title:"500错误",nav_router:"ErrorB"}
						]
					}
				]
			}
		},
		methods:{
			changeRouter(rName){
				router.push({name:rName})
			},
			backHome(){
				router.push({name:"Home"})
			}
		}
	}
</script>

<style lang="less" scoped>
	.my-nav{
		text-align: left;
		display: flex;
		background-color: #2e363f;
		flex-flow:row nowrap;
		.nav-top{
			height: 36px;
			line-height: 36px;
			padding-left: 20px;
		}
	}
	.my-nav-left{
		flex-grow: 0;
		width: 220px;
		height: 100%;
	/*	background-color: #2e363f;*/
		.nav-top{
			background-color: #27a9e3;
			color: white;
			cursor: pointer;
		}
		ul{
			border-right: none;
		}
		.my-nav-left-box{
			border-bottom: 1px solid #1F262D;
		}
	}
	.my-nav-right{
		flex-grow: 1;
		background-color:#EEEEEE;
		.nav-top{
			background-color: #fff;
			color: #666666;
			font-size: 0.9rem;
		}
		.nav-view{
			padding: 20px 20px 0 20px;
		}
	}
	
</style>