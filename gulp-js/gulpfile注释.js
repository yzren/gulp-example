//require() 此处理解为可以获取模块
//获取gulp
var gulp = require('gulp');
//获取gulp-uglify 模块用于压缩js
var uglify =require('gulp-uglify');

//定义压缩js任务'script'，命令行运行gulp script启动此任务
gulp.task('script',function(){
	//源文件路径
	gulp.src('src/js/*.js')
		//压缩文件
		.pipe(uglify())
		//压缩后文件路径
		.pipe(gulp.dest('dist/js'))
})


//定义监听任务，命令行运行gulp watch启动此任务
gulp.task('watch',function(){
	//监听文件修改，当文件修改的时候执行script
	gulp.watch('src/js/*.js',['script'])
})
//gulp.task('default'),定义默认任务
//在命令行运行gulp，即是启动了script和watch两个任务
gulp.task('default',['script','watch'])