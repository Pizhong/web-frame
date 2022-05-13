import api from '@/utils/ajax'

export default {
  namespaced: true,

  state: {},

  getters: {},

  actions: {
    /**
     * 获取系统列表
     * @param {*} ctx
     * @param {Number} page 页码
     * @param {Number} size 每页条数
     * @param {String} quickSearch 关键字
     * @param {String} type
     */
    authAppList(ctx, { page = 1, size = 10, quickSearch, type } = {}) {
      return api.post('/admin/auth/instance/authApp/list.do', {
        data: {
          quickSearch: quickSearch,
          type,
          page,
          size
        }
      })
    },

    /**
     * 添加系统 / 修改系统
     * @param {*} ctx
     * @param {Number} id 系统ID,修改系统时传入
     * @param {String} code 系统英文编码
     * @param {String} cnName 系统中文名称
     * @param {String} descript 系统描述
     */
    authAppSave(ctx, { id, code, cnName, descript } = {}) {
      return api.post('/admin/auth/instance/authApp/save.do', {
        data: {
          id,
          code,
          cnName,
          descript
        }
      })
    },

    /**
     * 获取系统实例列表
     * @param {*} ctx
     * @param {Number} page 页码
     * @param {Number} size 每页条数
     */
    authAppInstanceList(ctx, { page = 1, size = 10 } = {}) {
      return api.post('/admin/auth/instance/authAppInstance/list.do', {
        data: {
          page,
          size
        }
      })
    },

    /**
     * 添加系统实例/ 修改系统实例
     * @param {*} ctx
     * @param {Number} id 实例ID,修改系统时传入
     * @param {String} appId 关联的系统id
     * @param {String} name 实例名称
     */
    authAppInstanceSave(ctx, { id, appId, name } = {}) {
      return api.post('/admin/auth/instance/authAppInstance/save.do', {
        data: {
          id,
          appId,
          name
        }
      })
    },

    /**
     * 获取菜单列表
     * @param {*} ctx
     * @param {Number} appId 系统ID
     */
    authMenuList(ctx, { appId } = {}) {
      return api.get('/admin/auth/instance/authMenu/list.do', {
        data: {
          appId
        }
      })
    },

    /**
     * 获取资源表
     * @param {*} ctx
     * @param {Number} appId 系统ID
     */
    authResourcesList(ctx, { appId } = {}) {
      return api.post('/admin/auth/instance/authResources/listForApp.do', {
        data: {
          appId
        }
      })
    },
  },

  mutations: {}
}
