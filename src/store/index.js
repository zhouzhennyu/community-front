import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sid: '',
        isLogin: false,
        token: '',
        userInfo: {}
    },
    mutations: {
        // 设置sid
        setSid(state, value) {
            state.sid = value
        },

        // 设置登录状态
        setIsLogin(state, value) {
            state.isLogin = value
        },

        // 设置用户信息
        setUserInfo(state, value) {
            state.userInfo = value
        }
    },
    actions: {
    },
    modules: {
    }
})
