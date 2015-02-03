'use strict';

var gulp = require('gulp'),
	webpack = require('gulp-webpack'),
	config = require('../../global'),
	webpackConfig = require('../../../webpack.config.js');

gulp.task("webpack", function() {
    return gulp.src(config.sourceDir + '/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.destinationDir + '/js'));
});