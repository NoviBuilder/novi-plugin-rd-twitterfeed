path = require("path");
webpack = require("webpack");
UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/novi-twitter.jsx",
    output: {
        filename: "dist/novi-plugin-rd-twitterfeed.js",
        libraryTarget: 'commonjs2',
        library: 'novi-plugin-rd-twitterfeed'
    },

    externals: [],

    module: {
        loaders: [
            {
                test: /\.jsx/,
                include: [
                    path.resolve(__dirname, "src/")
                ],
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJsPlugin({output: {comments: false}})
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};