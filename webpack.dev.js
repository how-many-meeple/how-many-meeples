const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const apiMocker = require('connect-api-mocker');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000
    }
});
    