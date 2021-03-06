var gulp = require('gulp');
var uglify = require('gulp-uglify');
// 新建一个‘script’任务用于压缩js文件
gulp.task('script', function () {
  // 找到需要压缩的文件
  return (
    gulp
      .src('input/*.js')
      // 压缩文件
      .pipe(uglify())
      // 另存压缩后文件
      .pipe(gulp.dest('output'))
  );
});
gulp.task('default', gulp.series('script'));


// 合并

// const { src, dest, parallel } = require('gulp');
// const concat = require('gulp-concat');

// function js() {
//   return src('input/*.js', { sourcemaps: true })
//     .pipe(concat('app.min.js'))
//     .pipe(dest('build/js', { sourcemaps: true }))
// }

// exports.js = js;
// exports.default = parallel(js);