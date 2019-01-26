var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var branchName = require('current-git-branch');
var path = require('path');

module.exports = (env) => {
    const config = {
        devtool: 'source-map',
        entry: {
            main: './index.js'
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        devServer: {
            contentBase: './dist',
            overlay: true,
            inline: true,
            hot: true
        },
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                title: `${branchName()} demo test`,
            })
        ],
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {
                'utils': path.join(__dirname, '/src/utils'),
            },

        }
    }
    return config;
};