/**
 * axios 基础配置
 */

import axios from 'axios'
// import auth from "@/utils/auth"

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true //发起请求携带cookie(CROS跨域需要服务端的支持)

// 将token传回服务器认证登录状态
// axios.defaults.headers.common['Authorization'] = auth.getToken()

//请求拦截
axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

//响应拦截//
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  //错误处理

  // 可处理用户登录基础信息,比如用户名,token,过期时间等

  // if (error.response.status === 403) {
  //   // 403
  // }
  // if (error.response.status === 500) {
  //   // 500
  // }
  // if (error.response.status === 502) {
  //   // 502
  // }
  // if (error.response.status === 404) {
  //   // 404
  // }

  return Promise.reject(err)
})

export default axios
