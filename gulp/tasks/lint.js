var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');

gulp.task('lint', function() {
  return gulp.src(['bower.json']
    .concat(config.scripts.proj))
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.debug({title: 'lint:'}))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.if(config.enabled.production, plugins.jshint.reporter('fail')));
});
