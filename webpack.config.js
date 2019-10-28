const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlExtractPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlExtractPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.png/,
                loader: "file-loader",
            }
        ]
    },

    devServer: {
        port: 80,
        contentBase: path.resolve(__dirname, "src")
    }
};