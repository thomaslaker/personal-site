'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});