import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "@/assets/css/community.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
