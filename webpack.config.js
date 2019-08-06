const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    src: path.resolve('assetsSource'),
    public: path.resolve('www'),
};
module.exports = {
    context: paths.src,
    entry: {
        main: './index.js'
    },
    output: {
        path: paths.public,
        filename: 'build/[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: '/node_modules',
                use: ["babel-loader"],
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'build/[name].min.css',
        })
    ],
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: ['node_modules']
    }
};