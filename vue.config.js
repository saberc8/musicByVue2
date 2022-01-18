const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'music',
  configureWebpack: {
    devtool: isProd ? false: 'source-map',
    devServer: {
      open: true,
      disableHostCheck: true,
      proxy: {
        '/netease-api': {
          target: 'http://localhost:3000',
          pathRewrite: { '^/netease-api': '' },
          changeOrigin: true,
          secure: false,
        },
      },
      port: 8889,
    },
    externals: isProd ? {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    }: {}
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `,
      },
    },
  },
  lintOnSave: false
}
