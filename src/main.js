import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
Vue.use(axios)
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
