import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueCookie from 'vue-cookie';
import Dayjs from 'vue-dayjs';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(Dayjs);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
