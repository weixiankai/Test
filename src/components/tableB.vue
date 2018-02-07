<template>
	<div class="table-b">
		<h1>复杂表格组件</h1>
		<hr />
		<el-row :gutter="20">
  		<el-col :span="24">
  			<p>可以排序的表格</p>
  			<el-card class="box-card">
				  <el-table :data="tableA" :default-sort="{prop: 'date', order:'descending'}" stripe border style="width: 100%">
				    <el-table-column sortable prop="date" label="日期"></el-table-column>
				    <el-table-column sortable prop="name" label="姓名"></el-table-column>
				    <el-table-column sortable prop="province" label="省份"></el-table-column>
				    <el-table-column sortable prop="city" label="市区">	</el-table-column>
				    <el-table-column prop="address" label="地址"></el-table-column>
				    <el-table-column prop="zip" label="邮编"></el-table-column>
				  </el-table>
  			</el-card>
  			<p>可以根据省份过滤的表格</p>
  			<el-card class="box-card">
  				  <el-table :data="tableA" border style="width: 100%">
					    <el-table-column prop="date" label="日期"></el-table-column>
					    <el-table-column prop="name" label="姓名"></el-table-column>
					    <el-table-column :filters="filterP" :filter-method="filterProvince" prop="province" label="省份"></el-table-column>
					    <el-table-column prop="city" label="市区">	</el-table-column>
					    <el-table-column prop="address" label="地址"></el-table-column>
					    <el-table-column prop="zip" label="邮编"></el-table-column>
					  </el-table>
  			</el-card>
  		</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name: 'table-b',
	  data(){
	  	return{
	  		tableA: [
		  		{
	          date: '2016-05-03',
	          name: '张小三',
	          province: '广州',
	          city: '普陀区',
	          address: '广州市8楼公交站',
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
	          province: '深圳',
	          city: '普陀区',
	          address: '深圳市普陀区金沙江路 1518 弄',
	          zip: 200002
	        }, 
	        { 
	        	date: '2016-05-07',
	          name: '张小牛',
	          province: '北京',
	          city: '普陀区',
	          address: '北京市普陀区金沙江路 1518 弄',
	          zip: 200001
	        }
	      ],
	      filterP:[
	      	{ text: '广州', value:'广州' },
	     	 	{ text: '上海', value:'上海' }
	      ]
	  	}
	  },
  	methods:{
  		filterProvince(value, row) {
      	return row.province === value;
    	}
  	}
	}
</script>

<style lang="less" scoped>
	.table-b{
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