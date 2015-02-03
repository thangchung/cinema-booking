'use strict';

var path    = require('path'),
    webpack = require('webpack'),
    config  = require('./config/global'),
    info    = require('./package.json');

module.exports = {
    cache: false,
    debug: true,
    devtool: 'source-map',
    entry: {
        'main': path.join(__dirname, config.sourceDir) + '/js/main.js'
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
        new webpack.BannerPlugin(info.name + '\n' + info.version + ':' + Date.now() + ' [development build]'),
        new webpack.DefinePlugin({
            DEV: true
        }),
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
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};