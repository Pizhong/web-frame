module.exports = {
  outputDir: 'dist',

  // 代理配置
  devServer: {
    open: false,
    hotOnly: true,
    proxy: {
      '/admin': {
        target: 'http://test-admin-ensence.videocc.net',
        secure: false,
        changeOrigin: true,
        ws: true
      }
    }
  },

  // 入口配置
  pages: {
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/login.html',
      filename: 'login.html'
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 全局引入scss变量
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/styles/colorVariable.scss";',
      },
    },
  }
}
