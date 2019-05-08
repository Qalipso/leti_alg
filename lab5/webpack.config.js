var path = require("path");

module.exports = {
    entry: "./src/scripts.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            //es6
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/')
        }
    }
};
