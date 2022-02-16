import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
const Forget = () => import(/* webpackChunkName: "Forget" */ '@/views/Forget.vue')
const Register = () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: "Template1" */ '@/views/channels/Template1.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '',
                name: 'index',
                component: Index
            },
            {
                path: '/index/:catalog',
                name: 'template1',
                component: Template1
            }
        ]
    },
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
    linkExactActiveClass: 'active-panel-this',
    routes
})

export default router
