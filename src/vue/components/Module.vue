<template>
	<p>{{ msg }}</p>
</template>

<script>
export default {
	name: 'module',
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
