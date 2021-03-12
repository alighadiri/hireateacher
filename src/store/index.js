import Vue from 'vue'
import Vuex from 'vuex'
import requestsModule from './modules/requests.js'
import teachersModule from './modules/teachers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    requests: requestsModule,
    teachers: teachersModule
  },
  
  state: {
    teacherId: 't3'

  },

  mutations: {
  },

  actions: {
  },

  getters: {
    teacherId(state) {
      return state.teacherId;
    } 
  },
})
