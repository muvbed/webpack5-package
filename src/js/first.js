import '@/assets/scss/first.scss'

import Vue from 'vue'

import router from '@/vue/router/first'
import store from '@/vue/store/first'

Vue.component('first', require('@/vue/pages/first/index.vue').default)

new Vue({
	router,
	store,
	el: '#app'
})
