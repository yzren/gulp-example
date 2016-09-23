var gulp = require('gulp');
var sass =require('gulp-sass');
var minifyCss=require('gulp-minify-css');
gulp.task('csssass',function(){
	gulp.src('src/sass/**/*.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css/'))
})
gulp.task('watch',function(){
	gulp.watch('src/sass/**/*.scss',['csssass']);
})
gulp.task('default',['csssass','watch']);