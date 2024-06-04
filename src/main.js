import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "@/assets/css/community.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
