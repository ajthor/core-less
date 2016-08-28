
const gulp = require('gulp');
const less = require('gulp-less');

const paths = {
  entry: 'src/core.less',
  styles: 'src/**/*.less',
  mixins: 'src/mixins/**/*.less'
}

gulp.task('build-styles', () =>
  gulp.src(paths.entry)
    .pipe(less())
    .pipe(gulp.dest('dist'))
);

gulp.task('build-mixins', () => {
  gulp.src(paths.mixins)
    .pipe(gulp.dest('dist/mixins'));
});

gulp.task('watch', () => {
  gulp.watch(paths.styles, ['build-styles']);
  gulp.watch(paths.mixins, ['build-mixins']);
});

gulp.task('build', ['build-styles', 'build-mixins']);
