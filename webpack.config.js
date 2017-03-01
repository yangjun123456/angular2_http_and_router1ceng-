var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/app/main.ts'],
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', 'html', 'css']
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, "src/app")], //排除目标路径下的文件
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css'] })
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, "src/app")], //添加目标路径下的文件
                // 或include : root( "src","app" )
                loader: 'raw'
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: [path.resolve(__dirname, "src/index.html")],
                // 或exclude: root( "src","index.html" )
                include: [path.resolve(__dirname, "src/app")]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({ filename: 'css/[name].[hash].css' })
    ]
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}