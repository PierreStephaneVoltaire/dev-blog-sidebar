import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#appsidebar')
