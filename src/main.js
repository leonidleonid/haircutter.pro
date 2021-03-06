import Vue from 'vue'
import router from "@/router/router";
import store from './store'
import i18n from './i18n/i18n';

import App from './App.vue'
import './style.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  i18n,
})