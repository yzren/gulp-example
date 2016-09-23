var gulp =require('gulp');
var minifyCss=require('gulp-minify-css');

gulp.task('css',function(){
	gulp.src('src/css/**/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css/'))
})
gulp.task('watch',function(){
	gulp.watch('src/css/**/*.css',['css'])
})
gulp.task('default',['css','watch'])