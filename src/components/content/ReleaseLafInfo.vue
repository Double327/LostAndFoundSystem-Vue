<template>
	<div class="form-box">
		<form action="" class="form">
			<div class="form-group">
				<label for="title">标题</label>
				<input class="form-item" id="title" placeholder="请输入标题" type="text">
			</div>
			<div class="form-group">
				<label for="lost">遗失</label>
				<input class="" id="lost" name="infoType" type="radio">
				<label for="find">捡到</label>
				<input class="" id="find" name="infoType" type="radio">
			</div>
			<div class="form-group">
				<label for="lostTime">遗失时间</label>
				<input class="form-item" id="lostTime" name="lostTime" placeholder="请输入遗失时间" type="text">
			</div>
			<div class="form-group">
				<label for="lostLocation">遗失地点</label>
				<input class="form-item" id="lostLocation" name="lostLocation" placeholder="请输入遗失地点" type="text">
			</div>
			<div class="form-group">
				<label for="summary">物品描述</label>
				<textarea class="" id="summary" name="summary" placeholder="请输入描述信息"></textarea>
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
				<button type="submit" id="releaseBtn">发布信息</button>
				<button type="reset">重置</button>
			</div>
		</form>
		<div class="alert">
			A simple primary alert—check it out!
		</div>
	</div>
</template>

<script>
    export default {
        name: "ReleaseLafInfo"
    }
</script>

<style scoped src="../../common/style/releaseInformation.css">
</style>