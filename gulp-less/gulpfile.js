var gulp = require('gulp');
var less =require('gulp-less');
var minifyCss=require('gulp-minify-css');

gulp.task('cssLess',function(){
	gulp.src('src/less/**/*.less')
		.pipe(less())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css/'))
})
gulp.task('watch',function(){
	gulp.watch('src/less/**/*.less',['cssLess']);
})
gulp.task('default',['cssLess','watch']);