var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  browserSync.init({
    files: ['{dist}/**/*.html', '*.html'],
    proxy: config.dev.url,
    port: config.dev.watchPort
  });
  gulp.watch([config.assets + 'styles/**/*'], ['styles']);
  gulp.watch([config.assets + 'scripts/**/*'], ['lint', 'scripts']);
  gulp.watch([config.assets + 'images/**/*'], ['images']);
  gulp.watch([config.assets + 'fonts/**/*'], ['fonts']);
  gulp.watch(['bower.json', 'assets/manifest.json'], ['build']);
});
