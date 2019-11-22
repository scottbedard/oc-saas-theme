import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import boot from './app/boot';

Vue.config.productionTip = false;

boot(Vue);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
