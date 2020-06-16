import Router from 'vue-router'
import Vue from 'vue';
import routes from './router'

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: routes
});

export default router;