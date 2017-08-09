var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./js_dev/main.js",
    output: {
        path: __dirname + "/vendor/js",
        filename: "build.js"
    },
    module:{
        loaders: [
            {
                test: /\.css_dev\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        inline:true,
        port: 10000
    },
};