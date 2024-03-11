import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Hello from '../views/Hello.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello
    }
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
