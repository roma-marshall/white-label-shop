import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Cart from '../components/Cart.vue'
import Content from '../components/Content.vue'
import Profile from '../components/Profile.vue'
import History from '../components/History.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    { path: '/content', component: Content },
    { path: '/profile', component: Profile },
    { path: '/history', component: History },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router