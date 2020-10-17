import axios from 'axios'
import { Message } from 'element-ui'

// 创建实例
const server = axios.create({
  baseURL: process.env.BASE_API, // 配置请求路径头
  timeout: 6000 // 请求超时时间
  /*
  * headers: [], // 即将发送的自定义请求头
  * // 更多相关配置信息：http://www.axios-js.com/zh-cn/docs/index.html#axios-create-config
  * */
})

// 配置请求拦截
server.interceptors.request.use(config => {
  if (Object.key(config.data.reqdata).length === 0) {
    config.data.reqdata = {}
  }
  return config
}, error => {
  Promise.reject(error)
})

// 配置相应拦截
server.interceptors.response.use(response => {
  let res = response.data
  if (res.status === !100) {
    if (!res.status) return response.data
    Message({
      message: res.msg,
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    return response.data
  }
}, error => {
  Message({
    message: '网络连接超时',
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default server
