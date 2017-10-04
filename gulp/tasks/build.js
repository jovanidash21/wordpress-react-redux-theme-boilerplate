var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(
    'styles',
    'scripts',
    ['fonts', 'images'],
    callback
  );
});
