"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Webpack = require("Webpack");
const path = require("path");
var srcPath = path.join(__dirname, '/src/js');
var distPath = path.join(__dirname, '/dist/js');
var config = {
    watch: true,
    cache: true,
    devtool: '#cheap-module-eval-source-map',
    context: srcPath,
    entry: {
        app: './app.js',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: ["node_modules"],
    },
    plugins: [
        new Webpack.NoEmitOnErrorsPlugin()
    ]
};
exports.default = config;
//# sourceMappingURL=webpack.config.js.map