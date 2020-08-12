import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import '@/style/index.less'

import '@/plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
