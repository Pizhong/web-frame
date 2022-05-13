import Vue from 'vue'
import index from './index.vue'
import store from '../../store'
import '../../assets/styles/atom.scss'

console.info('VERSION', process.env.VUE_APP_VERSION)
console.info('ENV', process.env.VUE_APP_ENV)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(index)
}).$mount('#login')
