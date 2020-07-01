<template>
	<div class="w">
		<div class="main box-shadow">
			<div class="hd">
				<div class="avatar">
					<img alt="" src="../../assets/img/avatar.jpg">
				</div>
				<div class="user-primary">
					<p class="username">Double</p>
					<p class="user-role">普通用户</p>
				</div>
			</div>
			<div class="bd">
				<div class="bd-nav">
					<ul>
						<li class="bd-nav-item">
							<router-link class="current" tag="a" to="userInfo">账户管理</router-link>
						</li>
						<li class="bd-nav-item">
							<router-link tag="a" to="releaseInfoManagement">发布信息管理</router-link>
						</li>
						<li class="bd-nav-item">
							<router-link tag="a" to="userInfo">最新通知</router-link>
						</li>
						<li class="bd-nav-item">
							<router-link tag="a" to="userList">用户管理</router-link>
						</li>
						<li class="bd-nav-item">
							<router-link tag="a" to="userInfo">系统通知管理</router-link>
						</li>
						<li class="bd-nav-item">
							<router-link tag="a" to="userInfo">系统设置</router-link>
						</li>
					</ul>
				</div>
				<div class="title">
					<h5>账户安全</h5>
					<p>安全等级: <span>100</span></p>
				</div>
				<div class="content">
					<ul>
						<li class="content-item">
							<p class="key">密码</p>
							<p class="value password"></p>
							<a class="update" href="">修改</a></li>
						<li class="content-item">
							<p class="key">邮箱</p>
							<p class="value">123***789@qq.com</p>
							<a class="update" href="">修改</a></li>
						<li class="content-item">
							<p class="key">手机号码</p>
							<p class="value">123****6789</p>
							<a class="update" href="">修改</a></li>
						<li class="content-item">
							<p class="key">QQ</p>
							<p class="value">123***456</p>
							<a class="update" href="">修改</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped src="../../common/style/userInformation.css">
</style>