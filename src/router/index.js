import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/home/Home.vue'),
        meta: {
            title: 'Home',
        },
        name: 'home',
        path: '/',
    },
    {
        component: () => import(/* webpackChunkName: 'about' */ '@/pages/about/About.vue'),
        meta: {
            title: 'About us',
        },
        name: 'about',
        path: '/about',
    },
    {
        component: () => import(/* webpackChunkName: 'pricing' */ '@/pages/pricing/Pricing.vue'),
        meta: {
            title: 'Pricing',
        },
        name: 'pricing',
        path: '/pricing',
    },
    {
        component: () => import(/* webpackChunkName: '404' */ '@/pages/404/404.vue'),
        meta: {
            title: 'Page not found',
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
    // set the page title
    document.title = to.meta.title || 'oc-saas-theme';

    // set the status code for prerendering
    const statusCode = String(to.meta.statusCode || 200);

    if (meta && meta.getAttribute('content') !== statusCode) {
        meta.setAttribute('content', statusCode);
    }
});

export default router;
