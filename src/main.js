import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import boot from './app/boot';
import initialize from './store/initialize';

Vue.config.productionTip = false;

// configure our vue constructor
boot(Vue);

// set initial data from the dom
const vuetober = document.querySelector('meta[name=vuetober]');
const data = JSON.parse(vuetober.getAttribute('content'));

initialize(store, data);

// create our application and mount it to the dom
const app = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

// define globals
window.app = app;
window.stripe = Stripe(data.stripe_token);
