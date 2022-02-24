import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
const Forget = () => import(/* webpackChunkName: "Forget" */ '@/views/Forget.vue')
const Register = () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: "Template1" */ '@/views/channels/Template1.vue')
const Center = () => import(/* webpackChunkName: "Center" */ '@/views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: "UserCenter" */ '@/components/user/Center.vue')
const Msg = () => import(/* webpackChunkName: "UserCenter" */ '@/components/user/Msg.vue')
const Others = () => import(/* webpackChunkName: "UserCenter" */ '@/components/user/Others.vue')
const Posts = () => import(/* webpackChunkName: "UserCenter" */ '@/components/user/Posts.vue')
const Settings = () => import(/* webpackChunkName: "UserCenter" */ '@/components/user/Settings.vue')
const UserHome = () => import(/* webpackChunkName: "UserCenter" */ '@/views/User.vue')

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
    },
    {
        path: 'user-home',
        name: 'user-home',
        component: UserHome
    },
    {
        path: '/center',
        component: Center,
        children: [
            {
                path: '',
                name: 'center',
                component: UserCenter
            },
            {
                path: 'settings',
                name: 'settings',
                component: Settings
            },
            {
                path: 'posts',
                name: 'posts',
                component: Posts
            },
            {
                path: 'msg',
                name: 'msg',
                component: Msg
            },
            {
                path: 'others',
                name: 'others',
                component: Others
            }
        ]
    }
]

const router = new VueRouter({
    // linkExactActiveClass: '',
    routes
})

export default router
