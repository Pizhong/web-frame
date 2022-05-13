import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/ajax'

import auth from './module/auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    auth
  },

  state: {
  },
  mutations: {
  },
  actions: {
    test() {
      return api.get('/admin/auth/instance/authCommon/get.do')
    }
  }
})

export default store
