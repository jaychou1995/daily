import axios from 'axios'
import { Notify } from 'vant'

//创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 //超时时间
})

//请求拦截
service.interceptors.request.use(
  (config) => {},
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

//响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 20000) {
      Notify({
        message: res.message || '错误',
        type: 'danger',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || '错误'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error)
    Notify({
      message: error.message,
      type: 'danger',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
