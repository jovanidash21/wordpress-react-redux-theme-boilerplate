var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');
var lazypipe = require('lazypipe');
var merge = require('merge-stream');

var jsTasks = function (filename) {
  return lazypipe()
    .pipe(function () {
      return plugins.if(config.enabled.maps, plugins.sourcemaps.init());
    })
      .pipe(plugins.concat, filename)
      .pipe(plugins.uglify, {
        compress: {
          'drop_debugger': config.enabled.production
        }
      })
    .pipe(function () {
      return plugins.if(config.enabled.maps, plugins.sourcemaps.write('.', {
        sourceRoot: config.scripts.src
      }));
    })();
};

gulp.task('scripts', ['lint'], function () {
  var merged = merge();
  config.manifest.forEachDependency('js', function (dep) {
    merged.add(
      gulp.src(dep.globs, {base: 'scripts'})
        .pipe(jsTasks(dep.name))
        .on('error', handleErrors)
        .pipe(plugins.debug({title: 'scripts:'}))
    );
  });
  return merged
    .pipe(config.writeToManifest('scripts'));
});
