<template>
	<div class="main clearfix">
		<div class="content clearfix">
			<div :key="item.id" class="card" v-for="item in list">
				<div class="card-title">
					<h3>{{item.title}}</h3>
				</div>
				<div class="card-img">
					<img alt="" src="../../assets/img/avatar.jpg">
				</div>
				<div class="card-summary">
					<p>物品描述:<span>{{item.summary}}</span></p>
				</div>
				<div class="card-footer">
					<p class="lost-time">丢失时间:<span>{{item.lostTime}}</span></p>
					<p class="lost-location">丢失地点:<span>{{item.lostPosition}}</span></p>
					<p class="author">发布人:<span>{{item.createBy}}</span></p>
					<p class="release-time">发布时间:<span>{{item.createTime}}</span></p>
				</div>
			</div>
		</div>
		<pagination :limit.sync="queryParams.pageSize" :page.sync="queryParams.pageNum" :total="total"
		            @reloadData="reloadData" v-show="total>0"/>
	</div>
</template>

<script>
    import initData from "@/mixins/initData";
    import {findLafInfoList} from "@/api/lafInfo";
    import {Notification} from 'element-ui';

    export default {
        name: "LafInfoList",
        mixins: [initData],
        data() {
            return {
            }
        },
        created() {
            this.reloadData();
        },
        methods: {
            reloadData() {
                findLafInfoList(this.queryParams).then(res => {
                    console.log(res)
                    this.list = res.rows;
                    this.total = res.total;
                }).catch(() => {
                    Notification.error("数据加载失败！");
                })
            }
        }
    }
</script>

<style scoped src="../../common/style/lostAndFoundInfo.css">
</style>