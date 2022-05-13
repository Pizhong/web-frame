import Vue from 'vue'
import index from './index.vue'
import router from '@/router'
import store from '@/store'

import '@/assets/styles/basic.scss'
import '@/assets/styles/global.scss'
import '@/assets/styles/atom.scss'

import directive from '@/utils/directive'
import Vtip from 'vtip'
import 'vtip/lib/index.min.css'

import Components from '@/components'

import LUi from 'l-ui'
import 'l-ui/lib/l-ui.css'
Vue.use(LUi)

directive.init(Vue)

Vue.config.productionTip = false
Vue.use(Components)
Vue.use(Vtip.directive)

Vue.use({
  install(Vue) {
    Vue.prototype.$toPage = function(val, obj) {
      if (typeof val === 'object') {
        obj = val
        val = this.$router.path
      }
      setTimeout(() => {
        this.$router.push({
          path: val,
          query: obj || {}
        })
      }, 0)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(index)
}).$mount('#app')
