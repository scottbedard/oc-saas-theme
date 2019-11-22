import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: 'about' */ '@/pages/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
