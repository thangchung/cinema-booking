var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('../../global');
var webpackConfig = require('../../../webpack.config.js');

gulp.task("webpack", function() {
    return gulp.src(config.sourceDir + '/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.destinationDir));
});