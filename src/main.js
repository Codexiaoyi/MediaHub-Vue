import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './MyApp.vue'
import router from './router'
import store from './store'
import uploader from 'vue-simple-uploader'
import element from 'element-ui'

Vue.use(BootstrapVue)
Vue.use(uploader)
Vue.use(element)
//引用api文件
import api from './api/http.js'
//将api方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')