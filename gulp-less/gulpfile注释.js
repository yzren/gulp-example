//require() 此处理解为可以获取模块
//获取gulp
var gulp = require('gulp');
//获取gulp-less 模块用于编译less成css
var less =require('gulp-less');

//定义压缩less任务'cssLess'，命令行运行gulp cssLess启动此任务
gulp.task('cssLess',function(){
	//源文件路径
	gulp.src('src/less/*.less')
		//压缩文件
		.pipe(less())
		//压缩后文件路径
		.pipe(gulp.dest('dist/less'))
})


//定义监听任务，命令行运行gulp watch启动此任务
gulp.task('watch',function(){
	//监听文件修改，当文件修改的时候执行cssLess
	gulp.watch('src/less/*.less',['cssLess'])
})
//gulp.task('default'),定义默认任务
//在命令行运行gulp，即是启动了cssLess和watch两个任务
gulp.task('default',['cssLess','watch'])