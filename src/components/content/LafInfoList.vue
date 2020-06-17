<template>
	<div class="main clearfix">
		<div class="content clearfix">
			<div class="card" >
				<div class="card-title">
					<h3>这是标题</h3>
				</div>
				<div class="card-img">
					<img alt="" src="../../assets/img/avatar.jpg">
				</div>
				<div class="card-summary">
					<p>物品描述:<span>黑色皮质钱包，里面有银行卡、身份证等物品，另还有若干现金.</span></p>
				</div>
				<div class="card-footer">
					<p class="lost-time">丢失时间:<span>2000-11-11</span></p>
					<p class="lost-location">丢失地点:<span>江苏省徐州市江苏师范大学14号楼</span></p>
					<p class="author">发布人:<span>Double</span></p>
					<p class="release-time">发布时间:<span>2000-12-4</span></p>
				</div>
			</div>
		</div>
		<pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"/>
	</div>
</template>

<script>
    export default {
        name: "LafInfoList",
        data() {
            return {
                total: 100,
                queryParams: {
                    pageNum: 10,
                    pageSize: 6
                }
            }
        }
    }
</script>

<style scoped src="../../common/style/lostAndFoundInfo.css">
</style>