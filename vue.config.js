module.exports = {
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .test(/messages\.i18n?$/)
      .use("i18nResourceLoader")
        .loader(require.resolve('./webpack/vue-i18n-resource-loader/index.js'));
  }
}
