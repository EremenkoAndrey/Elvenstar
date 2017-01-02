// SET NODE_ENV=dev && webpack
// SET NODE_ENV=prod && webpack

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./config/helpers');
const NODE_ENV = (process.env.NODE_ENV || 'dev').trim();

module.exports = {
    // entry: {
    //     'polyfills': './dev/app/polyfills.ts',
    //     'vendor': './dev/app/vendor.ts',
    //     'main': './dev/app/main.ts'
    // },

    output: {
     //   path: helpers.root('public_html', 'app'),
    //    publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    watch: NODE_ENV === 'dev',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('dev', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('dev', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        })
    ]
};

if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}