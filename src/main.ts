import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/bootstrap.min.css';
import '@/assets/font-awesome/4.5.0/css/font-awesome.min.css';
import '@/assets/css/all.min.css';  // font awesome
import '@/assets/css/ace.min.css';
import '@/assets/css/ace-skins.min.css';

import '@/assets/js/bootstrap.min.js';
import '@/assets/js/ace-elements.min.js';
import '@/assets/js/ace.min.js';

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
