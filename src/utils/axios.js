import axios from 'axios'
import errorHandle from './errorHandle'

const CancelToken = axios.CancelToken

class HttpRequest {
    constructor(baseUrl) {
        this.baseURL = baseUrl
        this.pedding = {}
    }

    // 获取axios配置信息
    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            timeout: 10000
        }
        return config
    }

    removePedding(key, isRequest = false) {
        if (this.pedding[key] && isRequest) {
            this.pedding[key]('取消重复请求')
        }
        delete this.pedding[key]
    }

    // 设定拦截器
    interceptors(instance) {
        instance.interceptors.request.use((config) => {
            const key = config.url + '&' + config.method
            this.removePedding(key, true)
            config.cancelToken = new CancelToken((c) => {
                this.pedding[key] = c
            })
            return config
        }, (err) => {
            errorHandle(err)
            return Promise.reject(err)
        })

        instance.interceptors.response.use((res) => {
            const key = res.config.url + '&' + res.config.method
            this.removePedding(key)

            if (res.status === 200) {
                return Promise.resolve(res.data)
            } else {
                return Promise.reject(res)
            }
        }, (err) => {
            errorHandle(err)
            return Promise.reject(err)
        })
    }

    // 发起请求
    request(options) {
        const instance = axios.create()
        const newOptions = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(newOptions)
    }

    // get 方法
    get(url, config) {
        const options = Object.assign({
            method: 'get',
            url
        }, config)
        return this.request(options)
    }

    // post方法
    post(url, data) {
        return this.request({
            method: 'post',
            url,
            data
        })
    }
}

export default HttpRequest
