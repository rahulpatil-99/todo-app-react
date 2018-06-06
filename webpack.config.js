var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    devServer:{
        port: 3000,
        publicPath: 'http://localhost:3000'
    },
    plugins: [HTMLWebpackPluginConfig]
};
