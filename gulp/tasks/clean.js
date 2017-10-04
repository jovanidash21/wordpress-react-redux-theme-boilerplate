var gulp = require('gulp');
var del = require('del');

gulp.task('clean', del.bind(null, ['dist/']));
