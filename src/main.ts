import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/bootstrap.min.css';
import '@/assets/css/all.min.css';  // font awesome
import '@/assets/css/ace.min.css';
import '@/assets/css/ace-skins.min.css';

import '@/assets/js/jquery-2.1.4.min.js';



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
