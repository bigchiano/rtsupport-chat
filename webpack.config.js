const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    // webpack-dev-server configuration
    devServer: {
        publicPath: '/dist/',
        contentBase: path.resolve(__dirname, "./public"),
        watchContentBase: true,
        compress: true,
        port: 9001
    },
    // resolve: {
    //     extensions: ['.js', '.jsx']
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}