import Vue from 'vue'

import router from '@/router'
import store from '@/store'

import '@/assets/js/main'
import '@/assets/css/main.css'
import '@/assets/scss/main.scss'

Vue.component('example', require('@/components/Example.vue').default)

new Vue({
	router,
	store,
	el: '#app'
})
