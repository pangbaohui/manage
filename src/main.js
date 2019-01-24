import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axiosApi from './api/axios'

Vue.use(axiosApi)
Vue.use(iview)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
