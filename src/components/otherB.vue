<template>
	<div class="other-b">
		<h1>小工具</h1>
		<hr />
		<el-row :gutter="20">
  		<el-col :span="24">
  			<p>这是会自动关闭的消息提示框</p>
  			<el-card class="box-card">
				  <el-button :plain="true" @click="openA">成功</el-button>
				  <el-button :plain="true" @click="openB">警告</el-button>
				  <el-button :plain="true" @click="openC">消息</el-button>
				  <el-button :plain="true" @click="openD">错误</el-button>
  			</el-card>
  			<p>这是不会自动关闭的消息提示框</p>
  			<el-card class="box-card">
				  <el-button :plain="true" @click="openE">成功</el-button>
				  <el-button :plain="true" @click="openF">警告</el-button>
				  <el-button :plain="true" @click="openG">消息</el-button>
				  <el-button :plain="true" @click="openH">错误</el-button>
  			</el-card>
   			<p>这是封装后是提示框</p>
  			<el-card class="box-card">
				  <el-button type="success" :plain="true" @click="openI">警告框</el-button>
				  <el-button type="info"    :plain="true" @click="openJ">确认框</el-button>
				  <el-button type="warning" :plain="true" @click="openK">输入框</el-button>
  			</el-card> 			
   			<p>常用的标签组件</p>
  			<el-card class="box-card">
  				<el-tag v-for="(tag,index) in tags" :disable-transitions="false" @close="handleClose(index)" :key="tag.name" closable :type="tag.type">
						{{tag.name}}
					</el-tag>
  			</el-card> 	  			
  		</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
	  name: 'other-b',
	  data(){
	  	return{
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
	  	}
	  },
  	methods:{
  		handleClose(i){
  			this.tags.splice(i,1)
  		},
      openA() {
        this.$message('这是一条消息提示');
      },
      openB() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      openC() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      openD() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      openE() {
      	this.$message({
        	showClose: true,
          message: '这是一条消息提示'
        });
      },
      openF() {
        this.$message({
        	showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      openG() {
        this.$message({
        	showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      openH() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      openI() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      openJ() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'});
				});
			},
			openK(){
				this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });				
			}
		}
	}
</script>

<style lang="less" scoped>
	.other-b{
		h1{
			font-weight: 200;
			margin: 0 0 20px;
		}
		hr{
			height: 1px;
			border: none;
			background-color: grey;
		}
		.el-tag{
			margin-right: 10px;
		}
	}
	.box-card{
		margin-bottom: 20px;
		.el-transfer-panel{
			width: 180px !important;
		}
	}

</style>