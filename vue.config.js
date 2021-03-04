const path = require("path");

// const API_SERVER_URL = 'http://localhost:34000'

module.exports = {
  outputDir: path.resolve(__dirname, "./dist"),
  devServer: {
    https: false,
    host: 'localhost',
    port: 8081,
    proxy: {
      "/api/": {
        target: 'localhost:34000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  }
};
