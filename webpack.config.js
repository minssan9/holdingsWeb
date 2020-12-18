module.exports = {
//   // publicPath: process.env.NODE_ENV === 'production'
//   //   ? '/production-sub-path/'
//   //   : '/'
//   //   ,
  entry: {
    home: 'home.js',
    about: 'about.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }, 
    chainWebpack: (config) => {
      config.plugins.delete('prefetch')
    }
}

