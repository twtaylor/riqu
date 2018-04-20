"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gulp = require("gulp");
const Webpack = require("webpack");
const WebpackStream = require("webpack-stream");
const webpack_config_1 = require("./webpack.config");
Gulp.task('default', function () {
    return Gulp.src('src/js/app.js')
        .pipe(WebpackStream(webpack_config_1.default, Webpack))
        .pipe(Gulp.dest('wwwroot/js/'));
});
//# sourceMappingURL=gulpfile.js.map