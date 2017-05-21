import Vue from 'vue'
import App from './app'
import router from './router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
