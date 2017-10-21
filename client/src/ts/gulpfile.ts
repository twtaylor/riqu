import * as Gulp from "gulp";
import * as Webpack from "webpack";
import * as WebpackStream from "webpack-stream";

import cfg from './webpack.config';

Gulp.task('default', function() {
    return Gulp.src('src/js/app.js')
        .pipe(WebpackStream(cfg, Webpack))
        .pipe(Gulp.dest('wwwroot/js/'));
});