var gulp = require('gulp');
var uglify =require('gulp-uglify');

gulp.task('script',function(){
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
})
gulp.task('watch',function(){
	gulp.watch('src/js/**/*.js',['script']);
})
gulp.task('default',['script','watch']);