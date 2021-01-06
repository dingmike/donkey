const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/router.js',
    output: {
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            'nezha': path.resolve(__dirname, '../packages/donkey-big/esm/index.js'),
            'nezha-router': path.resolve(__dirname, '../packages/donkey-router/esm/index.js'),
            'nezha-nax': path.resolve(__dirname, '../packages/donkey-big-donkey/esm/index.js'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
        })
    ]
};
