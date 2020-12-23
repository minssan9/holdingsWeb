module.exports = {
//   // publicPath: process.env.NODE_ENV === 'production'
//   //   ? '/production-sub-path/'
//   //   : '/'
//   //   ,
  entry: {
    home: 'home.js',
    about: 'vuejs_about.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    showEslintErrorsInOverlay: false,
    overlay: {
      warnings: true,
      // errors: true
    }
  }, 
    chainWebpack: (config) => {
      config.plugins.delete('prefetch')
    }
}

