const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');

const LINT_PATH = ['src/**/*.js', '!src/**/templates/*'];

gulp.task('lint', () => {
  return gulp.src(LINT_PATH)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webserver', () => {
  gulp.src('.')
    .pipe(webserver({
      directoryListing: true,
      port: 15295,
    }));
});

gulp.task('dev', ['webserver'], () => {
  gulp.watch(LINT_PATH, ['lint']);
});
gulp.task('default', ['lint']);
