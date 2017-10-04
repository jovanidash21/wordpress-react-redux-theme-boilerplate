var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');
var wiredep = require('wiredep').stream;

gulp.task('bower', function() {
  return gulp.src(config.styles.proj)
    .pipe(wiredep(config.styles.wiredepSettings))
    .on('error', handleErrors)
    .pipe(plugins.debug({title: 'bower:'}))
    .pipe(plugins.changed(config.styles.src, {
      hasChanged: plugins.changed.compareContents
    }))
  .pipe(gulp.dest(config.styles.src));
});
