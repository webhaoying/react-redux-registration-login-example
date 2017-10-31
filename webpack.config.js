var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.css$/,

                        use:[// 这里的use  参数值可以是数组也可以是字符串也可以是对象   可以根据文档轻松获得使用方法
                            //https://webpack.js.org/plugins/extract-text-webpack-plugin/
                            {
                                loader:"style-loader"
                            },
                            {
                                loader: "css-loader" , //使你能够使用类似@import 和 url(...)的方法实现 require()或者import的功能
                                // options:{ // 这个配置项就是将css模块化 只作用于当前模块 而不会全局污染
                                //     /*
                                //      * 有了这个属性，就决定了虽然是相同的属性名 只要是来源于不同的css文件的属性
                                //      *  无论是哪个js组件引用，样式都不会互相污染，因为webpack会将css属性名做一个hash处理
                                //      *  简单来讲，webpack让每一个引入进来的className 都处理成了唯一的值
                                //      例如 我在Greeter.js引入了两个相同的classnaName的属性，是互不干扰的
                                //      */
                                //     modules:true,
                                //     localIdentName:'[name]-[local]-[hash:base64:5]'
                                //
                                // }
                            }
                        ]



            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true,
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
    }
}