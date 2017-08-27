'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    cache = require('gulp-cached'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('assets/scss/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function() {
    gulp.src('assets/js/*.js')
    .pipe(cache('compress'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
        .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'))

    gulp.src('assets/js/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
        .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'))
});
