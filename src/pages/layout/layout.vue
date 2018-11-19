<template>
	<div class="layout">
		<el-header height="5rem">
			
		</el-header>
		<el-container :class="false ? 'layout-container hidden-aside':'layout-container'">
			<el-aside>
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="IsCollapse">
				  <el-submenu index="1">
				    <template slot="title">
				      <i class="el-icon-location"></i>
				      <span slot="title">导航一</span>
				    </template>
				    <el-menu-item-group>
				      <span slot="title">分组一</span>
				      <el-menu-item index="1-1">选项1</el-menu-item>
				      <el-menu-item index="1-2">选项2</el-menu-item>
				    </el-menu-item-group>
				    <el-menu-item-group title="分组2">
				      <el-menu-item index="1-3">选项3</el-menu-item>
				    </el-menu-item-group>
				    <el-submenu index="1-4">
				      <span slot="title">选项4</span>
				      <el-menu-item index="1-4-1">选项1</el-menu-item>
				    </el-submenu>
				  </el-submenu>
				  <el-menu-item index="2">
				    <i class="el-icon-menu"></i>
				    <span slot="title">导航二</span>
				  </el-menu-item>
				  <el-menu-item index="3" disabled>
				    <i class="el-icon-document"></i>
				    <span slot="title">导航三</span>
				  </el-menu-item>
				  <el-menu-item index="4">
				    <i class="el-icon-setting"></i>
				    <span slot="title">导航四</span>
				  </el-menu-item>
				</el-menu>
			</el-aside>
			<el-container class="lauout-main">
				<router-view></router-view>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: "Layout",
		data(){
			return{
				IsCollapse: false
			}
		},
		computed:{
		},
		mounted(){
			
		},
		methods:{}
	}
</script>

<style>
	.layout{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.el-header{
		width: 100%;
		height: 5rem;
		background: darkslateblue;
	}
	.layout-container{
		position: absolute;
		top: 5rem;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}
	.el-aside{
		width: 210px!important;
		float: left;
		height: 1005;
		overflow: auto;
		transition: all 1s linear;
		background: darkblue;
	}
	.hidden-aside .el-aside{
		width: 65px!important;
	}
	.lauout-main{
		width: calc(100% - 220);
		float: right;
		height: 100%;
		overflow: auto;
	}
	.hidden-aside .lauout-main{
		width: calc(100% - 75);
	}
</style>