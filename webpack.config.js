var path = require("path");

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/main",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: "./dist",
        filename: "main.js"
    },
    debug: true,
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, "src"),
            loader: "babel-loader",
            query: {
              presets: ["es2015"]
            }
        }]
    },
    devServer: {
        contentBase: "./src"
    }
}
