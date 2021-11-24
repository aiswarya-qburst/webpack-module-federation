const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "http://localhost:3001/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ModuleFederationPlugin({
            name: "sidebar",
            remotes: {
                home: "home@http://localhost:3000/remoteEntry.js",
            },
            exposes: {},
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"]
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            scriptLoading: 'defer'
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: "dist",
        hot: true,
    },
};