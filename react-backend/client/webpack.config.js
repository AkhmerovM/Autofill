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
                use: [
                    {
                        loader: "babel-loader",
                        // options: {
                        //     presets: ['react', 'es2015','stage-1']
                        // }
                    }],
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
        extensions: ['.jsx', '.js'],
        modules: ['node_modules', paths.src]
    },
    watchOptions: {
        aggregateTimeout: 300
    }
};