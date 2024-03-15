import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/cart', component: Cart }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router