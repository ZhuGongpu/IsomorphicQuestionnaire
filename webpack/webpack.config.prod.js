const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//Extract styles into seperate files.
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = require('./webpack.config.base.js')({
    entry: { app: ['babel-polyfill'] },
    output: {
        publicPath: '/'
    },
    scssLoader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1', 'postcss-loader', 'sass-loader'] }),
    plugins: [
        // Merge all duplicate modules
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
});
