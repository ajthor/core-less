
const gulp = require('gulp');
const less = require('gulp-less');

const paths = {
  entry: 'src/core.less',
  styles: 'src/**/*.less'
}

gulp.task('build', () =>
  gulp.src(paths.entry)
    .pipe(less())
    .pipe(gulp.dest('dist'))
);

gulp.task('watch', () =>
  gulp.watch(paths.styles, ['build'])
);
