var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HotModuleReplacementPlugin = require('hot-module-replacement');
var path = require('path');
module.exports = {
    devtool: 'eval',
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        overlay: true,
        inline: true,
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}