var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var merge = require('merge-stream');
var fs = require('fs');
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('rev', function () {
  fs.access(config.styles.dest + '/vendor.css', function (error) {
    if (!error) {
      fs.access(config.scripts.dest + '/vendor.js', function (error) {
        if (!error) {
          fs.access(config.styles.dest + '/main.css', function (error) {
            if (!error) {
              fs.access(config.scripts.dest + '/main.js', function (error) {
                if (!error) {
                  return gulp.src('lib/revision.php')
                    .pipe(plugins.wpRev({
                      css: config.styles.dest + '/vendor.css',
                      cssHandle: 'vendor-css',
                      js: config.scripts.dest + '/vendor.js',
                      jsHandle: 'vendor-js',
                    }))
                    .pipe(plugins.wpRev({
                      css: config.styles.dest + '/main.css',
                      cssHandle: 'main-css',
                      js: config.scripts.dest + '/main.js',
                      jsHandle: 'main-js',
                    }))
                    .on('error', handleErrors)
                    .pipe(plugins.debug({title: 'rev:'}))
                    .pipe(gulp.dest('lib'));
                }
              });
            }
          });
        }
      });
    }
  });
});
