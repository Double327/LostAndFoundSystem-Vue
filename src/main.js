import Vue from 'vue';
import App from './App.vue';
import router from "@/router/index";
import {Notification} from 'element-ui';
import  store from "@/store"



Vue.use(Notification);


Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router: router,
    store
}).$mount('#app')
