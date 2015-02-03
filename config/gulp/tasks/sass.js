'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	config = require('../../global');

gulp.task('sass', function () {
    gulp.src(config.sourceDir + '/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.destinationDir + '/css'));
});