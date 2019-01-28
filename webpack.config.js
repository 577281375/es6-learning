const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const branchName = require('current-git-branch');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = () => {
    const config = {
        devtool: 'eval',
        entry: {
            main: './index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
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
                template: './index.html',
                title: `${branchName()} demo test`,
            }),
            new DashboardPlugin(),
        ],
        resolve: {
            alias: {
                utils: path.join(__dirname, '/src/utils'),
            },
        },
    };
    return config;
};
