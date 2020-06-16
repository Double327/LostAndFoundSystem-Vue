<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
</script>
<style>
	@import "common/style/base.css";
	@import "common/style/common.css";
</style>
