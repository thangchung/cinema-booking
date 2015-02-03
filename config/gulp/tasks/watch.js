'use strict';

var gulp   = require('gulp'),
    watch  = require('gulp-watch'),
    config = require('../../global');

gulp.task('watch', function () {
    gulp.watch(config.sourceDir + '/js/*.js', ["webpack"]);
    gulp.watch(config.sourceDir + '/styles/*.scss', ['sass']);
});