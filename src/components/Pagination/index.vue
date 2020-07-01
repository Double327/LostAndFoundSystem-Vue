<template>
	<div :class="{'hidden':hidden}" class="pagination-container">
		<el-pagination
				:current-page.sync="currentPage"
				:page-size="pageSize"
				layout="prev, pager, next, jumper"
				:total="total"
				@current-change="handleCurrentChange"
				@size-change="handleSizeChange">
		</el-pagination>
	</div>
</template>

<script>

    export default {
        name: 'Pagination',
        props: {
            total: {
                required: true,
                type: Number
            },
            page: {
                type: Number,
                default: 1
            },
            limit: {
                type: Number,
                default: 9
            },
            pageSizes: {
                type: Array,
                default() {
                    return [6, 9, 12, 15]
                }
            },
            layout: {
                type: String,
                default: 'total, sizes, prev, pager, next, jumper'
            },
            background: {
                type: Boolean,
                default: true
            },
            autoScroll: {
                type: Boolean,
                default: true
            },
            hidden: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            currentPage: {
                get() {
                    return this.page
                },
                set(val) {
                    this.$emit('update:page', val)
                }
            },
            pageSize: {
                get() {
                    return this.limit
                },
                set(val) {
                    this.$emit('update:limit', val)
                }
            }
        },
        methods: {
            handleSizeChange(val) {
                this.$emit('pagination', {page: this.currentPage, limit: val});
                if (this.autoScroll) {
                    scrollTo(0, 800)
                }
            },
            handleCurrentChange(val) {
                this.$emit('pagination', {page: val, limit: this.pageSize});
                if (this.autoScroll) {
                    scrollTo(0, 800)
                }
                this.$emit('reloadData');
                console.log('切换页数--->' + val);
            }
        }
    }
</script>

<style scoped>
	.pagination-container {
		background: #fff;
		text-align: right;
		padding: 32px 16px;
	}

	.pagination-container.hidden {
		display: none;
	}
</style>
