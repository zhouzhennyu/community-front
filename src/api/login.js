import axios from '@/utils/request'

const getCode = (sid) => {
    return axios.get('/public/getCaptcha', {
        params: {
            sid: sid
        }
    })
}

const forget = (options) => {
    return axios.post('/login/forget', { ...options })
}

const login = (loginInfo) => {
    return axios.post('/login/login', loginInfo)
}

const register = (registerInfo) => {
    return axios.post('/login/register', registerInfo)
}

export {
    getCode,
    forget,
    login,
    register
}
