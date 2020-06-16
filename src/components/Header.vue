<template>
	<div class="header">
		<a class="header-brand" href="#">失物招领系统</a>
		<div class="nav left">
			<ul>
				<li class="nav-item">
					<router-link tag="a" to="/">首页</router-link>
				</li>
				<li class="nav-item">
					<router-link tag="a" to="/lafInfoList">失物招领信息</router-link>
				</li>
				<li class="nav-item">
					<router-link tag="a" to="/releaseLafInfo">发布新信息</router-link>
				</li>
			</ul>
		</div>

		<ul class="nav-user right">
			<!--已登录时显示-->
			<li class="user-content nav-item user-info" v-if="!user">
				<a href="#"><img alt="Double" class="user-avatar" src="../assets/img/avatar.jpg"><span
						class="user-name">{{user.username}}</span></a>
				<div class="dropdown" id="user-dropdown">
					<a class="dropdown-item" href="">个人中心</a>
					<a class="dropdown-item" href="">我的发布</a>
					<a class="dropdown-item" href="">退出登录</a>
				</div>
			</li>
			<!--未登录时显示-->
			<li class="nav-item" v-if="user">
				<router-link tag="a" to="/register">注册</router-link>
			</li>
			<li class="nav-item" v-if="user">
				<router-link tag="a" to="/login">登录</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: {}
            }
        }
    }
</script>

<style scoped>
	.header {
		display: block;
		width: 100%;
		height: 50px;
		background: #57606f;
	}

	.header-brand {
		display: block;
		float: left;
		padding: 10px;
		color: #ffffff;
		font-size: 20px;
	}

	.nav {
		width: 40%;
		position: relative;
	}

	.nav-item {
		float: left;
		text-align: center;
	}

	.nav-item a {
		display: block;
		padding: 15px;
		line-height: 20px;
		color: #f1f2f6;
	}

	.nav-item a:hover {
		color: #ced6e0;
	}

	.nav-user .nav-item {
		float: right;
	}

	.user-content {
		width: 130px;
	}


	.user-avatar {
		width: 40px;
		margin: 5px;
		border-radius: 10px;
	}

	.user-name {
		float: right;
		display: block;
		line-height: 50px;
	}

	.user-info a {
		padding: 0;
		margin-right: 30px;
	}

	.dropdown {
		display: none;
		position: absolute;
		background: #fff;
		z-index: 1;
		border-radius: 10px;
	}

	.dropdown .dropdown-item {
		padding: 10px;
		line-height: 30px;
		text-align: center;
		color: #000;
	}

	.dropdown .dropdown-item:hover {
		color: #2f3542;
	}
</style>