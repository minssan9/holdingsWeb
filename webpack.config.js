var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        // path: path.join(__dirname, 'dist'), //경로
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:52000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            //   // '/images': {
            //   //   target: 'http://localhost:8081',
            //   //   changeOrigin: true
            //   // }
        },
        port: 8081,
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        disableHostCheck: true,
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
            // utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }),
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
            // ,
            // {
            //     test: /.s[a|c]ss$/,
            //     loader: 'style!css!sass'
            // }
        ]
    },
}