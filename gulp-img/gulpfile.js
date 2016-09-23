var gulp = require('gulp');
var imagemin =require('gulp-imagemin');

gulp.task('img',function(){
	gulp.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img/'))
})
gulp.task('watch',function(){
	gulp.watch('src/img/**/*',['img']);
})
gulp.task('default',['img','watch']);