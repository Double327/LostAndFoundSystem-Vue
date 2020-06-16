<template>
	<div class="form-box clearfix">
		<form class="form">
			<div class="logo">
				登录
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe773;</i>
				<label>
					<input type="text" class="text" v-model="loginForm.username" placeholder="请输入用户名...">
				</label>
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input type="password" class="text" v-model="loginForm.password" placeholder="请输入密码...">
				</label>
			</div>
			<div class="form-item verifyCode">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input type="text" class="text" v-model="loginForm.code" placeholder="请输入验证码...">
					<img style="display: inline-block;" :src="codeImgUrl" @click="getCode">
				</label>
			</div>
			<div class="form-item">
				<button type="button" @click="login">登录</button>
			</div>
			<div class="form-item">
				<button type="reset" @click="clearForm">重置</button>
			</div>

			<div class="form-item">
				<a href="#" class="link-item">忘记密码？</a>
				<router-link class="link-item" tag="a" to="/register">立即注册</router-link>
			</div>
		</form>
	</div>
</template>

<script>
    import {getCodeImg} from "@/api/login";

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                    code: '',
                    uuid: ''
                },
                codeImgUrl: ''
            }
        },
        created() {
            this.getCode();
        },
        methods: {
            getCode() {
                getCodeImg().then(res => {
                    this.codeImgUrl = "data:image/gif;base64," + res.img;
                    this.loginForm.uuid = res.uuid;
                });
            },
            clearForm() {
                this.loginForm.username = "";
                this.loginForm.password = "";
                this.loginForm.code = "";
                this.getCode();
            },
            login() {
                this.$store.dispatch("Login", this.loginForm)
                    .then(() => {
                        this.$router.push({path: "/"})
                    }).catch(() => {
                    this.getCode()
                })
            }

        }
    }
</script>

<style scoped src="../../common/style/form.css">
</style>
<style scoped>

</style>