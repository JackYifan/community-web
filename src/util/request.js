import axios from 'axios'
import Vue from 'vue'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://127.0.0.1:8887/api',
    // 超时
    timeout: 10000
})

/**
 * 请求拦截
 */
service.interceptors.request.use(config => {
    config.headers['token'] = Vue.$cookies.get('token') // 请求头带上token

    return config
}, error => {
    return Promise.reject(error)
})

export default service