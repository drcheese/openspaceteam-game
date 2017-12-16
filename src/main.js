// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'  // TODO: Remove
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import Store from './store'
import Bus from './bus'

Vue.component('icon', Icon)
Vue.use(Element)
Vue.prototype.$store = Store
Vue.prototype.$bus = Bus
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})