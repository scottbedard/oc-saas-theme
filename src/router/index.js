import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/home/Home.vue'),
        name: 'home',
        path: '/',
    },
    {
        component: () => import(/* webpackChunkName: 'about' */ '@/pages/about/About.vue'),
        name: 'about',
        path: '/about',
    },
    {
        component: () => import(/* webpackChunkName: '404' */ '@/pages/404/404.vue'),
        meta: {
            statusCode: 404,
        },
        name: '404',
        path: '*',
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

const meta = document.querySelector('meta[name="prerender-status-code"]');

router.afterEach((to) => {
    const statusCode = String(to.meta.statusCode || 200);

    if (meta && meta.getAttribute('content') !== statusCode) {
        meta.setAttribute('content', statusCode);
    }
});

export default router;
