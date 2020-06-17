import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Pagination from '@/components/Pagination/index';
import router from "@/router/index";
import {Notification} from 'element-ui';
import  store from "@/store"

Vue.component('Pagination', Pagination);
Vue.use(ElementUI);
Vue.use(Notification);


Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router: router,
    store
}).$mount('#app')
