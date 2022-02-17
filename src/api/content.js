import axios from '@/utils/request'
import qs from 'qs'

// 文章列表
const getList = (options) => {
    return axios.get('/public/list?' + qs.stringify(options))
}

// 温馨提醒
const getTips = () => {
    return axios.get('/public/tips')
}

// 本周热议
const topWeek = () => {
    return axios.get('/public/topWeek')
}

// 友情链接
const getLinks = () => {
    return axios.get('/public/links')
}
export {
    getList,
    getTips,
    topWeek,
    getLinks
}
