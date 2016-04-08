var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('comp_sass', function () {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});
 
gulp.task('default', function () {
  gulp.watch('./assets/scss/*.scss', ['comp_sass']);
});