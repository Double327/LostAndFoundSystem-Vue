<template>
	<div class="form-box">
		<form class="form">
			<div class="form-group">
				<label for="title">标题</label>
				<input class="form-item" id="title" placeholder="请输入标题" type="text" v-model="lafInfo.title">
			</div>
			<div class="form-group">
				<label for="lost">遗失</label>
				<input class="" id="lost" name="infoType" value="1" type="radio" v-model="lafInfo.type">
				<label for="find">捡到</label>
				<input class="" id="find" name="infoType" value="2" type="radio" v-model="lafInfo.type">
			</div>
			<div class="form-group">
				<label for="lostTime">遗失时间</label>
				<input class="form-item" id="lostTime" name="lostTime" placeholder="请输入遗失时间" type="text"
				       v-model="lafInfo.lostTime">
			</div>
			<div class="form-group">
				<label for="lostLocation">遗失地点</label>
				<input class="form-item" id="lostLocation" name="lostLocation" placeholder="请输入遗失地点" type="text"
				       v-model="lafInfo.lostPosition">
			</div>
			<div class="form-group">
				<label for="summary">物品描述</label>
				<textarea class="" id="summary" name="summary" placeholder="请输入描述信息"
				          v-model="lafInfo.summary"></textarea>
			</div>
			<div class="form-group">
				<label for="img">物品图片</label>
				<input class="form-item" id="img" name="lostLocation" type="file">
			</div>
			<div class="form-group">
				<label for="canvas">验证码</label>
				<input class="checkCode" type="text" id="checkCode">
				<canvas id="canvas" width="100" height="30"></canvas>
			</div>
			<div class="form-group">
				<button type="button" id="releaseBtn" @click="release">发布信息</button>
				<button type="reset">重置</button>
			</div>
		</form>
	</div>
</template>

<script>
    import {addLafInfo} from "@/api/lafInfo";
    import {Notification} from 'element-ui';

    export default {
        name: "ReleaseLafInfo",
        data() {
            return {
                lafInfo: {
                    title: '',
                    type: '',
                    lostTime: '',
                    lostPosition: '',
                    summary: ''
                }
            }
        },
        methods: {
            release() {
                addLafInfo(this.lafInfo.title, this.lafInfo.type, this.lafInfo.lostTime, this.lafInfo.lostPosition, this.lafInfo.summary).then(() => {
                    Notification.success('提交成功!');
                    this.$router.push('/lafInfoList');
                }).catch(() => {
                    Notification.error('提交失败,请重新提交!');
                });
                return false;
            }
        }
    }
</script>

<style scoped src="../../common/style/releaseInformation.css">
</style>