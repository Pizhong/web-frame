export default [
  {
    name: '系统二',
    path: '/system-two/index',
    component: () => import('../views/system-two/system-two-page'),
    meta: {
      title: '系统二',
      subtitle: '系统二的描述文案'
    }
  },
]
