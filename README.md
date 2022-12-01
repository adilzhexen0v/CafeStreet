# [Одностраничный сайт](https://adilzhexen0v.github.io/CafeStreet/dist/) кофейни
- Сайт адаптирован до ширины 320рх
- Для компиляции CSS файлов используется [gulp-sass](https://www.npmjs.com/package/gulp-sass). Для запуска используется команда `gulp styles-compile`. 
```javascript
     const gulp = require('gulp');
     const gulpSass = require('gulp-sass')(require('sass'));
     const gulpSourcemaps = require('gulp-sourcemaps');
     const gulpWatch = require('gulp-watch');

     gulp.task('styles-compile', () => {
          return gulp.src('./app/scss/**/*.scss')
          .pipe(gulpSourcemaps.init())
          .pipe(gulpSass().on('error', gulpSass.logError))
          .pipe(gulpSourcemaps.write('./'))
          .pipe(gulp.dest('./dist/css/'));
     });
```
- Для сборки JavaScript файлов используется [gulp-concat](https://www.npmjs.com/package/gulp-concat), а для минификации [gulp-uglify](). Для запуска используется команда `gulp build-js`.
```javascript
     const gulp = require('gulp');
     const gulpConcat = require('gulp-concat');
     const gulpUglify = require('gulp-uglify');
     
     gulp.task('build-js', function() {
          return gulp.src('./app/js/*.js')
          .pipe(gulpConcat('script.js'))
          .pipe(gulpUglify())
          .pipe(gulp.dest('./dist/js/'));
     });
```
