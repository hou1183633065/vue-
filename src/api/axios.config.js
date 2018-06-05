/**
 * http配置
 */
import axios from 'axios'
import { Toast } from 'vant';
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
axios.interceptors.request.use(config => {
    // element ui Loading方法
    Toast.loading({
        mask: true,
        message: '加载中...'
    });
    return config
}, error => {
    Toast.clear()
    Toast.fail('加载超时')
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
    Toast.clear()
    return data.data
}, error => {
    Toast.clear()
    Toast.fail('加载失败')
    return Promise.reject(error)
})

export default axios