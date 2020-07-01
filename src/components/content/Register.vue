<template>
	<div class="form-box clearfix">
		<form class="form">
			<div class="logo">
				注册
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe773;</i>
				<label>
					<input type="text" class="text" v-model="registerForm.username" placeholder="请输入用户名...">
				</label>
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input type="password" class="text" v-model="registerForm.password" placeholder="请输入密码...">
				</label>
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input type="password" class="text" v-model="verifyPassword" placeholder="请再次输入密码...">
				</label>
			</div>
			<div class="form-item">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input class="text" placeholder="请输入邮箱..." type="text" v-model="registerForm.email">
				</label>
			</div>
			<div class="form-item verifyCode">
				<i class="iconfont icon">&#xe75b;</i>
				<label>
					<input type="text" class="text" v-model="registerForm.code" placeholder="请输入验证码...">
					<img style="display: inline-block;" :src="codeImgUrl" @click="getCode">
				</label>
			</div>
			<div class="form-item">
				<button @click="register" type="button">注册</button>
			</div>
			<div class="form-item">
				<button type="reset" @click="clearForm">重置</button>
			</div>

			<div class="form-item">
				<router-link class="link-item" tag="a" to="/login">已有账户？</router-link>
				<router-link class="link-item" tag="a" to="/login">立即登录</router-link>
			</div>
		</form>
	</div>
</template>

<script>
    import {getCodeImg} from "@/api/login";

    export default {
        name: "Register",
        data() {
            return {
                codeImgUrl: '',
                registerForm: {
                    username: '',
                    password: '',
                    email: '',
                    uuid: '',
                    code: '',
                },
                verifyPassword: '',
            }
        },
        created() {
            this.getCode();
        },
        methods: {
            getCode() {
                getCodeImg().then(res => {
                    this.codeImgUrl = "data:image/gif;base64," + res.img;
                    this.registerForm.uuid = res.uuid;
                })
            },
            clearForm() {
                this.registerForm.username = "";
                this.registerForm.password = "";
                this.registerForm.code = "";
                this.getCode();
            },
            register() {
                this.$store.dispatch('Register', this.registerForm).then(() => {
                    this.$router.push('/');
                }).catch(() => {
                    this.clearForm();
                })
            }
        }
    }
</script>

<style scoped src="../../common/style/form.css">
</style>