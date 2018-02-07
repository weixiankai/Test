<template>
	<div class="form-b">
		<h1>校验表单组件</h1>
		<hr />
		<el-row :gutter="20">
		  <el-col :span="12">
		  	<el-card class="box-card">
		  		<div slot="header" class="clearfix">
			    <span class="fa fa-check-square-o">&nbsp;&nbsp;表单类型E</span>
			  </div>
			  <el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="活动名称">
			    <el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域">
			    <el-select v-model="form.region" placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="活动时间">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="即时配送">
			    <el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="活动性质">
			    <el-checkbox-group v-model="form.type">
			      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			      <el-checkbox label="地推活动" name="type"></el-checkbox>
			      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
			      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源">
			    <el-radio-group v-model="form.resource">
			      <el-radio label="线上品牌商赞助"></el-radio>
			      <el-radio label="线下场地免费"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="活动形式">
			    <el-input type="textarea" v-model="form.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" >立即创建</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
			</el-form>
		  	</el-card>
		  	<el-card class="box-card">
		  		<div slot="header" class="clearfix">
			    	<span class="fa fa-retweet">&nbsp;&nbsp;表单类型F</span>
			  	</div>
			  	<el-color-picker v-model="color1"></el-color-picker>
				<el-color-picker v-model="color2" size="medium"></el-color-picker>
				<el-color-picker v-model="color3" size="small"></el-color-picker>
				<el-color-picker v-model="color4" size="mini"></el-color-picker>
		  	</el-card>
		  </el-col>
		  <el-col :span="12">
		  	<el-card class="box-card">
		  		<div slot="header" class="clearfix">
			    	<span class="fa fa-puzzle-piece">&nbsp;&nbsp;表单类型G</span>
			 	</div>
			 	<el-transfer v-model="value1" :data="data"></el-transfer>
		  	</el-card>
		  	<el-card class="box-card">
		  		<div slot="header" class="clearfix">
			    <span class="fa fa-line-chart ">&nbsp;&nbsp;表单类型H</span>
			  </div>
			    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
			    </el-date-picker>
			     <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1">
			    </el-date-picker>
		  	</el-card>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"form-b",
		data() {
			const generateData = _ => {
	        const data = [];
	        for (let i = 1; i <= 15; i++) {
	          data.push({
	            key: i,
	            label: `备选项 ${ i }`,
	            disabled: i % 4 === 0
	          });
	        }
	        return data;
	     };
	      return {
	      	 data: generateData(),
        		value1: [1, 4],
        		color1: '#409EFF',
        		color2: '#409EFF',
        		color3: '#409EFF',
        		color4: '#409EFF',
	        form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: '',
	          pickerOptions1: {
	          shortcuts: [{
	            text: '今天',
	            onClick(picker) {
	              picker.$emit('pick', new Date());
	            }
	          }, {
	            text: '昨天',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24);
	              picker.$emit('pick', date);
	            }
	          }, {
	            text: '一周前',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', date);
	            }
	          }]
	        },
	        value1: '',
	        value2: ''
	        }
	      }
	    }
	}
</script>

<style lang="less" scoped>
	.form-b{
		h1{
			margin: 0 0 20px;
		}
		hr{
			height: 2px;
			border: none;
			background-color: #2CA1DD;
		}
		.el-card{
			margin-bottom:20px;
		}
	}
</style>