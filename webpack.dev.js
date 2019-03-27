const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const apiMocker = require('connect-api-mocker');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000,

        // Will serve index.html, if the file requested doesn't exist.
        // This will make routing on the front-end possible.
        historyApiFallback: true,

        // Proxies to the express server, so the front-end can make
        // requests on the same domain, just like it can in prod mode.
        proxy: {
            '/bgg': {
                target: 'http://localhost:3000',
            }
        }
    }
});
    