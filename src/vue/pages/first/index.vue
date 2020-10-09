<template>
	<section class="vue-page">
		<h2 class="vue-page__title">Vue Modules</h2>
		<img src="img/vue-logo.svg" alt="" class="vue-page__img">
		<Module/>
	</section>
</template>

<script>
import Module from '@/vue/components/Module.vue'

export default {
	name: 'first',
	components: {
		Module
	}
}
</script>

<style lang="scss">
.vue-page {
	&__title {
		color: rgb(0,100,0);
	}

	&__img {
		width: 300px;
	}
}
</style>
