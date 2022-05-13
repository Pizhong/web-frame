export default [
  {
    name: '系统一',
    path: '/system-one/index',
    component: () => import('../views/system-one/system-one-page'),
    meta: {
      title: '系统一',
      keepAlive: true
    }
  },
]
