const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');
const PORT = process.env.PORT || '15295';

const LINT_PATH = ['src/**/*.js', '!src/**/templates/*'];

gulp.task('lint', () => {
  return gulp.src(LINT_PATH)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webserver', () => {
  console.error('Listening on http://localhost:' + PORT + '/');
  gulp.src('.')
    .pipe(webserver({
      directoryListing: true,
      port: PORT,
    }));
});

gulp.task('dev', ['webserver'], () => {
  gulp.watch(LINT_PATH, ['lint']);
});
gulp.task('default', ['lint']);
