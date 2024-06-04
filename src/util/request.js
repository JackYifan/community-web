import axios from 'axios'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://127.0.0.1:8887',
    // 超时
    timeout: 10000
})
export default service