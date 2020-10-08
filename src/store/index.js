import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import module from './module'

export default new Vuex.Store({
    modules: {
        module
    }
})
