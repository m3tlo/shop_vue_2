import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppPagination from '@/components/app/AppPagination'
import AppColorSelect from '@/components/app/AppColorSelect'

Vue.component('AppPagination', AppPagination)
Vue.component('AppColorSelect', AppColorSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
