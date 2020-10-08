<template>
	<h2 class="example">{{ msg }}</h2>
</template>

<script>
export default {
	name: 'example',
	data() {
		return {
			msg: null
		}
	},
	created() {
		this.msg = this.$store.getters.getMsg
	}
}
</script>

<style lang="scss" scoped>
.example {
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
