const gulp = require('gulp');

// from SCSS to CSS
const gulpSass = require('gulp-sass')(require('sass'));
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpWatch = require('gulp-watch');

gulp.task('styles-compile', () => {
     return gulp.src('./app/scss/*.scss')
     .pipe(gulpSourcemaps.init())
     .pipe(gulpSass().on('error', gulpSass.logError))
     .pipe(gulpSourcemaps.write('./'))
     .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', () => {
     gulp.watch('./app/scss/*.scss', gulp.series('styles-compile'));
});

// concat and minify JS
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
gulp.task('build-js', function() {
  return gulp.src('./app/js/*.js')
    .pipe(gulpConcat('script.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('./dist/js/'));
});