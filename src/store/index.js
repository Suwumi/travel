import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    mutations,
    getters: {
        doubleCity (state) {
            return state.tCity + ' ' + state.tCity
        }
    }
})