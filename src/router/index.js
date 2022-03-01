import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import dayjs from 'dayjs'
import jsonwebtoken from 'jsonwebtoken'

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
        path: '/user-home',
        name: 'user-home',
        component: UserHome
    },
    {
        path: '/center',
        component: Center,
        meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (token !== '' && userInfo !== null) {
        const payload = jsonwebtoken.decode(token)
        if (dayjs().isBefore(dayjs(payload.exp * 1000))) {
            store.commit('setIsLogin', true)
            store.commit('setUserInfo', userInfo)
            store.commit('setToken', token)
        } else {
            localStorage.clear()
        }
    }
    // 需要登录才能访问的页面
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const isLogin = store.state.isLogin
        if (isLogin) {
            next()
        } else {
            next('/login')
        }
    } else {
        // 不需要登录就可以访问的页面
        next()
    }
})

export default router
