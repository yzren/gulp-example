//require() 此处理解为可以获取模块
//获取gulp
var gulp = require('gulp');
//获取gulp-imagemin 模块用于压缩图片
var imagemin =require('gulp-imagemin');

//定义压缩img任务'img'，命令行运行gulp img启动此任务
gulp.task('img',function(){
	//源文件路径
	gulp.src('src/img/**/*')
		//压缩文件
		.pipe(imagemin())
		//压缩后文件路径
		.pipe(gulp.dest('dist/img'))
})


//定义监听任务，命令行运行gulp watch启动此任务
gulp.task('watch',function(){
	//监听文件修改，当文件修改的时候执行img
	gulp.watch('src/img/**/*',['img'])
})
//gulp.task('default'),定义默认任务
//在命令行运行gulp，即是启动了img和watch两个任务
gulp.task('default',['img','watch'])