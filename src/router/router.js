import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Cart from '../components/Cart.vue'
import Content from '../components/Content.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    { path: '/content', component: Content },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router