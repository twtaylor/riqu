import * as Webpack from 'Webpack';
import * as path from 'path';

var srcPath  = path.join(__dirname, '/src/js');
var distPath = path.join(__dirname, '/dist/js');

var config:Webpack.Configuration = {
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

export default config;