import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{ path: "/auth", component: () => import('./components/Auth.vue'), meta: { requiresAuth: false } },
    { path: "/customize", component: () => import('./components/Customize.vue'), meta: { requiresAuth: true } },
    { path: "/", component: () => import('./components/Index.vue'), meta: { requiresAuth: false } }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.ghAuthed && store.netAuthed) {
            next();
        }
        else {
            router.push("/auth");
        }
    }
    else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
