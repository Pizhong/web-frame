/**
 * @file 组件初始化
 * 注册全局组件
 * 命名规则：所有组件名称开头字母大写，驼峰标识
 */

const components = [
]

export default {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
