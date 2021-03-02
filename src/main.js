import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store/index.js' 
import 'bootstrap'
// import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    el: '#app',
    router,
    axios,
    store,
    components: { App },
    render: h => h(App)
})

