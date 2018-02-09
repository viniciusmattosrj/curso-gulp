var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('rolo-compressor', function(){
	gulp.src('dev/assets/css/style.css')
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('prod/assets/css/'));
});