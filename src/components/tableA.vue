<template>
	<div class="table-a">
		<h1>基本表格组件</h1>
		<hr />
		<el-row :gutter="20">
  		<el-col :span="24">
  			<p>自适应的表格</p>
  			<el-card class="box-card">
				  <el-table :data="tableA" stripe border style="width: 100%">
				    <el-table-column prop="date" label="日期"></el-table-column>
				    <el-table-column prop="name" label="姓名"></el-table-column>
				    <el-table-column prop="province" label="省份"></el-table-column>
				    <el-table-column prop="city" label="市区">	</el-table-column>
				    <el-table-column prop="address" label="地址"></el-table-column>
				    <el-table-column prop="zip" label="邮编"></el-table-column>
				  </el-table>
  			</el-card>
  			<p>固定高度和固定列宽的表格</p>
  			<el-card class="box-card">
  				  <el-table :data="tableA" style="width: 100%" height="250">
					    <el-table-column prop="date" label="日期" width="150" fixed></el-table-column>
					    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
					    <el-table-column prop="province" label="省份" width="120"></el-table-column>
					    <el-table-column prop="city" label="市区" width="120">	</el-table-column>
					    <el-table-column prop="address" label="地址" width="300"></el-table-column>
					    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
					  </el-table>
  			</el-card>
  		</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name: 'table-a',
	  mounted(){
	  	console.log("table-A",this.$http)
	  },
	  data(){
	  	return{
	  		tableA: [
		  		{
	          date: '2016-05-03',
	          name: '张小三',
	          province: '乌鲁木齐',
	          city: '普陀区',
	          address: '乌鲁木齐市8楼公交站',
	          zip: 200321
	        }, 
	        { 
	        	date: '2016-05-02',
	          name: '李小明',
	          province: '深圳',
	          city: '普陀区',
	          address: '深圳市普陀区金沙江路 1518 弄',
	          zip: 200654
	        }, 
	        { 
	        	date: '2016-05-04',
	          name: '袁小军',
	          province: '广州',
	          city: '普陀区',
	          address: '广州市普陀区金沙江路 1518 弄',
	          zip: 200005
	        }, 
	        { 
	        	date: '2016-05-01',
	          name: '王达成',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200004
	        }, 
	        { 
	        	date: '2016-05-08',
	          name: '王顺带',
	          province: '北京',
	          city: '闵行区',
	          address: '北京市普陀区金沙江路 1518 弄',
	          zip: 200003
	        }, 
	        { 
	        	date: '2016-05-06',
	          name: '王小虎',
	          province: '武汉',
	          city: '普陀区',
	          address: '武汉市普陀区金沙江路 1518 弄',
	          zip: 200002
	        }, 
	        { 
	        	date: '2016-05-07',
	          name: '张小牛',
	          province: '重庆',
	          city: '普陀区',
	          address: '重庆市普陀区金沙江路 1518 弄',
	          zip: 200001
	        }
	      ]
	  	}
	  }
	}
</script>

<style lang="less" scoped>
	.table-a{
		h1{
			font-weight: 200;
			margin: 0 0 20px;
		}
		hr{
			height: 1px;
			border: none;
			background-color: grey;
		}
	}

	.box-card{
		margin-bottom: 20px;
		.el-transfer-panel{
			width: 180px !important;
		}
	}
</style>