const menuModel = {
  authCache: ['AUTH_APP-SAVE', 'AUTH_APP_INSTANCE-SAVE', 'AUTH_MENU-SAVE']
}

export default {
  init(Vue) {
    Vue.directive('auth', (el, binding) => {
      if (menuModel.authCache) {
        if (menuModel.authCache.indexOf(binding.value) !== -1) {
          return
        }
      }

      if (el.className.indexOf('is-disabled') === -1) {
        el.className = el.className + ' is-disabled'
      }
      el.setAttribute('auth-code', binding.value)
      el.setAttribute('disabled', 'disabled')
      el.setAttribute('title', '没有此功能权限')
    })
  }
}
