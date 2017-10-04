var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync').create();

gulp.task('fonts', function() {
  return gulp.src(config.fonts.bowerFonts
    .concat(config.fonts.globs))
    .pipe(plugins.flatten())
    .on('error', handleErrors)
    .pipe(plugins.debug({title: 'fonts:'}))
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream());
});
