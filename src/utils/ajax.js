import axios from 'axios'
import errorCode from './errorCode'
import LUi from 'l-ui'
import Vue from 'vue'
Vue.use(LUi.message)

const Toast = Vue.prototype.$message

export default {
  async _request(url, options) {
    const baseUrl = process.env.VUE_APP_BASE_URL || ''

    // 请求之前添加请求头
    options.headers = options.headers || {}
    let userInfo = {}
    try {
      userInfo = JSON.parse(sessionStorage.getItem('UserInfo')) || {}
    } catch (e) {}
    options.headers['session-key'] = userInfo.sessionKey || '2c1c76d5db64451ea34d1764d5197415'

    // 发起请求
    const response = await axios({
      method: options.method,
      url: `${baseUrl + url}`,
      headers: options.headers,
      timeout: options.timeout || 60000,
      params: options.params,
      data: options.data
    })

    // 请求后处理
    const res = response.data
    const { toastError = true } = options || {}
    const { code, object, message, success } = res || {}
    if (code === 200 || success) {
      return object
    } else if (code === 20001) {
      // TODO 未登录
    } else {
      const msg = errorCode.getErrorMsg(code) || message
      toastError && Toast.error(msg)
      return Promise.reject(res)
    }
  },

  get(url, options = {}) {
    return this._request(
      url,
      Object.assign(options, {
        method: 'get'
      })
    )
  },

  post(url, options = {}) {
    return this._request(
      url,
      Object.assign(options, {
        method: 'post'
      })
    )
  },

  export(url, params) {
    // 如果没有域名默认配置baseURI
    if (!/https?:\/\//i.test(url)) {
      const baseUrl = process.env.VUE_APP_BASE_URL || ''
      url = baseUrl + url
    }
    const paramArr = []
    for (const key in params) {
      if (!params[key]) {
        continue
      }
      if (typeof params[key] === 'object') {
        params[key] = encodeURIComponent(JSON.stringify(params[key]))
      }
      paramArr.push(key + '=' + params[key])
    }

    if (paramArr.length !== 0) {
      if (url.indexOf('?') >= 0) {
        url += '&'
      } else {
        url += '?'
      }
      url += paramArr.join('&')
    }

    const saveLink = document.createElement('a')
    saveLink.href = url
    saveLink.target = '_blank'
    saveLink.click()
  }
}
