const webpack = require('webpack');
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
    },
    scssLoader: 'style-loader!css-loader?localIdentName=[local]&modules&importLoaders=1!postcss-loader!sass-loader',
    plugins: [],
    externals: {
        'react': 'umd react',
        'antd': 'umd antd',
        "rc-animate": "umd rc-animate",
        // "rc-calendar": "umd rc-calendar",
        // "rc-cascader": "umd rc-cascader",
        // "rc-checkbox": "umd rc-checkbox",
        // "rc-collapse": "umd rc-collapse",
        // "rc-dialog": "umd rc-dialog",
        // "rc-dropdown": "umd rc-dropdown",
        // "rc-form": "umd rc-form",
        // "rc-input-number": "umd rc-input-number",
        // "rc-menu": "umd rc-menu",
        // "rc-notification": "umd rc-notification",
        // "rc-pagination": "umd rc-pagination",
        // "rc-progress": "umd rc-progress",
        // "rc-queue-anim": "umd rc-queue-anim",
        // "rc-radio": "umd rc-radio",
        // "rc-rate": "umd rc-rate",
        // "rc-select": "umd rc-select",
        // "rc-slider": "umd rc-slider",
        // "rc-steps": "umd rc-steps",
        // "rc-switch": "umd rc-switch",
        // "rc-table": "umd rc-table",
        // "rc-tabs": "umd rc-tabs",
        // "rc-time-picker": "umd rc-time-picker",
        "rc-tooltip": "umd rc-tooltip",
        // "rc-tree": "umd rc-tree",
        // "rc-tree-select": "umd rc-tree-select",
        // "rc-upload": "umd rc-upload",
        // "rc-util": "umd rc-util",
        // "react-addons-pure-render-mixin": "umd react-addons-pure-render-mixin",
        // "react-slick": "umd react-slick",
        "react-redux": "umd react-redux",
        "relocate-lazy-load": "umd relocate-lazy-load",
        "reselect": "umd reselect",
        "redux": "umd redux",
        "immutable": "umd immutable"
    }
});
