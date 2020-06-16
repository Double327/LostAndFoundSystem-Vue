<template>
	<div>
		<router-view name="header" keep-alive></router-view>
		<router-view name="content"></router-view>
	</div>
</template>

<script>
    export default {
        name: "Index",

    }
</script>
