import '@/assets/scss/first.scss'

import Vue from 'vue'

import router from '@/vue/router/first'
import store from '@/vue/store/first'

const First = Vue.component('first', require('@/vue/pages/first/index.vue').default)
const Second = Vue.component('first', require('@/vue/pages/second/index.vue').default)

new First({
	router,
	store,
	el: '#app'
})

new Second({
	el: '#app1'
})
