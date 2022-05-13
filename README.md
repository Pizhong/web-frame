# web-frame

## 开发环境运行
```
npm run dev
```

## 生产环境打包
```
npm run build
```

## 项目目录
```
|-- public  入口HTML, 使用 link 和 script 标签引入的第三方 css 和 js
|-- src
  |-- assets  项目内静态资源
  |  |-- images  图片资源
  |  |-- styles  样式资源
  |  |-- fonts  字体资源
  |-- components  项目全局组件
  |  |-- xxxx.vue
  |  |-- index.js  项目全局组件入口文件
  |-- pages  页面入口, 一般有index 和 login
  |  |-- index  项目主页面
  |  |-- login  登录页面
  |-- router  路由
  |  |-- index.js  路由入口文件
  |  |-- xxxxx.js  其他模块路由文件, 在 router/index.js 文件中引入, 以模块名命名
  |-- static  通过 import xxx from 'xxx' 引入的第三方模块, 如: 直播SDK
  |-- store  VUEX, store(数据处理主要放在这一层)
  |  |-- module  各模块的store存放位置, 安装功能模块分目录
  |  |-- index.js  store的全局入口
  |-- utils  全局工具方法
  |  |-- ajax.js  通用请求方法
  |  |-- directive.js  自定义指令
  |  |-- errorCode.js  错误处理code列表
  |  |-- utils.js  通用工具方法
  |  |-- filter.js  全局过滤器
  |-- views  页面
     |-- index.vue  首页(也可能不存在此页面)
     |-- 模块一  按模块分目录
        |-- 模块一/页面一  每一个页面使用一个文件夹目录
           |-- index.vue  页面一的具体内容
           |-- components  只在页面一使用的内部组件
```