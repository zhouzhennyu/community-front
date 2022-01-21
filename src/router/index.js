import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
const Forget = () => import(/* webpackChunkName: "about" */ '@/views/Forget.vue')
const Register = () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/forget',
        name: 'forget',
        component: Forget
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
            if (from.name === 'login') {
                next()
            } else {
                next('/login')
            }
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
