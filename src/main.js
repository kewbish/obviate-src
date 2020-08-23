import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FontPicker from 'font-picker-vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [{ path: "/auth", component: () => import('./components/Auth.vue'), meta: { requiresAuth: false } },
    { path: "/customize", component: () => import('./components/Customize.vue'), meta: { requiresAuth: true } },
    { path: "/", component: () => import('./components/Index.vue'), meta: { requiresAuth: false } }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (localStorage.getItem("allAuthed")) {
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

Vue.use(FontPicker);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
