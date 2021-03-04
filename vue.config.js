const path = require("path");

const API_SERVER_URL = 'http://localhost:34000'

module.exports = {
  outputDir: path.resolve(__dirname, "./dist"),
  devServer: {
    https: false,
    port: 8081,
    proxy: {
      '/api': {
        target: API_SERVER_URL,
        ws: true,
        changeOrigin: true,
      }
    }
  }
};
