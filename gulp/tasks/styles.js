var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');
var lazypipe = require('lazypipe');
var merge = require('merge-stream');

var cssTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return plugins.if(!config.enabled.production, plugins.plumber());
    })
    .pipe(function() {
      return plugins.if(config.enabled.maps, plugins.sourcemaps.init({loadMaps: true}));
    })
      .pipe(function() {
        return plugins.if('*.scss', plugins.sass(config.styles.settings));
      })
      .pipe(plugins.concat, filename)
      .pipe(plugins.autoprefixer, {
        browsers: [
          'last 2 versions',
          'ie 8',
          'ie 9',
          'android 2.3',
          'android 4',
          'opera 12'
        ]
      })
      .pipe(plugins.cssnano, ({discardComments: {removeAll: true}, zindex: false}))
    .pipe(function() {
      return plugins.if(config.enabled.maps, plugins.sourcemaps.write('.', {
        sourceRoot: config.styles.src
      }));
    })();
};

gulp.task('styles', ['bower'], function() {
  var merged = merge();
    config.manifest.forEachDependency('css', function(dep) {
      var cssTasksInstance = cssTasks(dep.name);
      if (!config.enabled.production) {
        cssTasksInstance.on('error', handleErrors)
        .pipe(plugins.debug({title: 'styles:'}))
      }
      merged.add(gulp.src(dep.globs, {base: 'styles'})
        .pipe(cssTasksInstance));
    });
    return merged
      .pipe(config.writeToManifest('styles'));
});
