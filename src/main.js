import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/boostrap-vue'
import VueAgile from 'vue-agile'
import VS2 from 'vue-script2'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueWindowSize from 'vue-window-size';
import VueMobileDetection from 'vue-mobile-detection'
import BootstrapVueIcons from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.use(VS2)
Vue.use(VueAgile)
Vue.use(VueMobileDetection)
Vue.use(VueWindowSize);
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
