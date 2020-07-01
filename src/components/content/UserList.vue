<template>
	<div class="w">
		<div class="main box-shadow">
			<div class="hd">
				<div class="avatar">
					<img alt="" src="img/avatar.jpg">
				</div>
				<div class="user-primary">
					<p class="username">Double</p>
					<p class="user-role">普通用户</p>
				</div>
			</div>
			<div class="bd">
				<div class="bd-nav">
					<ul>
						<li class="bd-nav-item"><a href="#">账户管理</a></li>
						<li class="bd-nav-item"><a href="#">发布信息管理</a></li>
						<li class="bd-nav-item"><a href="#">最新通知</a></li>
						<li class="bd-nav-item"><a class="current" href="#">用户管理</a></li>
						<li class="bd-nav-item"><a href="#">系统通知管理</a></li>
						<li class="bd-nav-item"><a href="#">系统设置</a></li>
					</ul>
				</div>
				<div class="title">
					<h5>用户管理</h5>
					<p>用户数: <span>100</span></p>
				</div>
				<div class="content clearfix">
					<div class="content-head">
						<ul>
							<li class="content-head-item uUsername">用户名</li>
							<li class="content-head-item uEmail">邮箱</li>
							<li class="content-head-item uPhoneNum">手机号</li>
							<li class="content-head-item uQQ">QQ</li>
							<li class="content-head-item uRole">角色</li>
							<li class="content-head-item operation">操作</li>
						</ul>
					</div>
					<div class="content-body clearfix">
						<ul :id="user.id" :key="user.id" v-for="user in data">
							<li class="content-head-item uUsername">{{user.name}}</li>
							<li class="content-head-item uEmail">{{user.email}}</li>
							<li class="content-head-item uPhoneNum">13145218799</li>
							<li class="content-head-item uQQ">203814477</li>
							<li class="content-head-item uRole">管理员</li>
							<li class="content-head-item operation">
								<button class="btn detail">详情</button>
								<button class="btn update">修改</button>
								<button class="btn delete" onclick="deleteElement(123)">删除</button>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {listUser} from "@/api/user";

    export default {
        name: "UserManagement",
        data() {
            return {
                data: {},
                currentPage: 1
            }
        },
        created() {
            this.reloadUser(this.currentPage);
        },
        methods: {
            reloadUser(page) {
                listUser(page).then(res => {
                    this.data = res;
                });
            },
            nextPage() {
                this.currentPage = this.currentPage + 1;
                this.reloadUser(this.currentPage);
            },
            prevPage() {
                this.currentPage = this.currentPage - 1;
                this.reloadUser(this.currentPage);
            }
        }
    }
</script>

<style scoped src="../../common/style/userManagement.css">
</style>