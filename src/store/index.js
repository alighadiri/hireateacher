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


  },

  mutations: {
  },

  actions: {
  },

  getters: {
    
  },
})
