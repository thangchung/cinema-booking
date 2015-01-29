'use strict';

var path = require('path');
var webpack = require('webpack');
var config = require('./config/global');

module.exports = {
    cache: false,
    debug: true,
    devtool: 'source-map',
    entry: {
        'main': path.join(__dirname, config.sourceDir) + '/main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.join(__dirname, "src/frontend/vendors")
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("./bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
        new webpack.optimize.CommonsChunkPlugin("commons.js", ["main"], 4)
    ],
    module: {
        loaders: [
            // { test: /\.json$/, loader: "json" },
            /*{
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=[name].[ext]"
            }*/
        ]
    }
};