<template>
	<div class="form-a">
		<h1>基本表单组件</h1>
		<hr />
		<el-row :gutter="20">
		  <el-col :span="12">
		  	<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span class="fa fa-pie-chart">&nbsp;&nbsp;表单类型A</span>
			  </div>
			  	<p>请选择你最喜欢的NBA球队</p>
				   <el-radio-group v-model="radioA">
				    <el-radio :label="3">马刺</el-radio>
				    <el-radio :label="6">湖人</el-radio>
				    <el-radio :label="9">骑士</el-radio>
				  </el-radio-group>
				  <p>请选择你出生的城市</p>
				  <el-radio-group v-model="radioB">
			      <el-radio-button label="上海"></el-radio-button>
			      <el-radio-button label="北京"></el-radio-button>
			      <el-radio-button label="广州"></el-radio-button>
			      <el-radio-button label="深圳"></el-radio-button>
			    </el-radio-group>
			    <p>请选择你最想居住的城市 (最多2个)</p>
			      <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
			      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  				  </el-checkbox-group>
  				  <p>请选择日期</p>
				  <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2">
				  </el-input>
				  <p>请输入内容</p>
				  <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1">
				  </el-input>
			</el-card>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span class="fa fa-line-chart ">&nbsp;&nbsp;表单类型B</span>
			  </div>
			  <p>可调节数字 ( 1 - 100 )</p>
			  <el-input-number v-model="num1" :min="1" :max="100" label="描述文字"></el-input-number>
			  <p>请选择你喜欢吃的食物</p>
			  <el-select v-model="valueM" clearable placeholder="请选择">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			    </el-option>
			  </el-select>
			  <p></p>
			  <el-cascader :options="optionsB" v-model="selectedOptions" >
  </el-cascader>
			</el-card>
		  </el-col>
		  <el-col :span="12">
		  	<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span class="fa fa-bar-chart">&nbsp;&nbsp;表单类型C</span>
			  </div>
			  <p>默认打开的开关</p>
				<el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费">
				</el-switch>
				<p>默认关闭的开关</p>
				<el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
				</el-switch>
   			    <p class="demonstration">无间断点的进度条</p>
	    	   <el-slider v-model="value6" :step="10">
		      </el-slider>		 
		     <p>有间断点的进度条</p>
		     <el-slider v-model="value7" :step="10" show-stops>
		     </el-slider>
			</el-card>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span class="fa fa-area-chart">&nbsp;&nbsp;表单类型D</span>
			  </div>
			    <p>带文字的星星点评</p>
				  <el-rate v-model="value8" show-text>
					</el-rate>
					<p>不带文字的星星点评</p>
					  <el-rate v-model="value9" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
					  </el-rate>
			</el-card>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"form-a",
		mounted(){
	      this.$notify({
	        title: '欢迎使用',
	        message: '所有的功能尽情使用吧',
	        duration: 1000,
	        type: 'success',
	        offset: 100
	      });  
	    },
		data(){
			return{
				radioA:3,
				radioB:"北京",
				checkedCities1:["上海"],
				cities:["上海","北京","广州","深圳","合肥"],
				input2:"",
				input1:"",
				num1:"",
				options:[
				{value: '选项1',label: '黄金糕'},
				{value: '选项2',label: '双皮奶'},
				{value: '选项3',label: '蚵仔煎'},
				{value: '选项4',label: '龙须面'},
				{value: '选项5',label: '北京烤鸭'}
				],
		        valueM: '',
		        optionsB: [
		       	{ value: 'zhinan', label: '指南',
		          children: [
		          	{ value: 'shejiyuanze',label: '设计原则',
		            	children: [
		            		{value: 'yizhi',label: '一致'}, 
		            		{value: 'fankui',label: '反馈'}, 
		            		{value: 'xiaolv',label: '效率'}
		            	]
		          	},
		          	{ value: 'daohang',label: '导航',
		              children: [
		            		{value: 'cexiangdaohang',label: '侧向导航'}
		            	]
		          	}
		          ]
		        },
		        { value: 'ziyuan',label: '资源',
		          children: [
		          	{value: 'axure',label: 'Axure Components'}, 
		          	{value: 'sketch',label: 'Sketch Templates'}, 
		          	{value: 'jiaohu',label: '组件交互文档'}
		          ]
		        }
	        ],
	        selectedOptions: [],
	        value3: true,
        	value4: false,
        	value6:"",
        	value7:"",
        	value8:3,
        	value9:2
		  	}
		}
	}
</script>

<style lang="less" scoped>
	.form-a{
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