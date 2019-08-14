const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    src: path.resolve(__dirname, 'assetsSource'),
    public: path.resolve(__dirname, 'www'),
};
console.log(paths.src);
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
    devServer: {
        contentBase: paths.public,
        // publicPath: paths.public,
        historyApiFallback: true,
        compress: true,
        port: 9001,
        hot: true
    },
    devtool: "source-map",
    resolve: {
        symlinks: false,
        extensions: ['.jsx', '.js'],
        modules: [paths.src, 'node_modules']
    },
    watchOptions: {
        aggregateTimeout: 300
    }
};