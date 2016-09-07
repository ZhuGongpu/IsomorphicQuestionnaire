const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = require('./webpack.config.base.js')({
    entry: {
        Questionnaire: [path.resolve(__dirname, "../src/containers/Questionnaire")],
        QuestionType: [path.resolve(__dirname, "../src/enums/QuestionType")],
    },
    output: {
        publicPath: '/',
        library: 'isomorphic-questionnaire',
        libraryTarget: 'umd',
        filename: "[name].js"
    }
    ,
    scssLoader: 'style-loader!css-loader?localIdentName=[local]__[name]__[hash:base64:5]&modules&importLoaders=1!postcss-loader!sass-loader',
    plugins: [],
    externals: {
        'react': 'umd react',
        'react-dom': 'umd react-dom',
        'antd': 'umd antd',
    }
})
;
