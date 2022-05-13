/* eslint-disable quote-props */
class ErrorCode {
  get errorObj() {
    return {
      // 系统错误码
      20001: 'session_key错误',
      20006: '无此权限'
    }
  }

  getErrorMsg(code) {
    return this.errorObj[code] || null
  }
}

export default new ErrorCode()
