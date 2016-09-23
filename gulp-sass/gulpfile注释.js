//require() 此处理解为可以获取模块
//获取gulp
var gulp = require('gulp');
//获取gulp-sass 模块用于编译sass成css
var sass =require('gulp-sass');

//获取gulp-minify-css 模块用于压缩css
var minifyCss=require('gulp-minify-css');

//定义压缩sass任务'csssass'，命令行运行gulp csssass启动此任务
gulp.task('csssass',function(){
	//源文件路径
		gulp.src('src/sass/**/*.scss')
		//压缩文件
		.pipe(sass())
		//压缩编译后的css
		.pipe(minifyCss())
		//压缩后文件路径
		.pipe(gulp.dest('dist/sass'))
})


//定义监听任务，命令行运行gulp watch启动此任务
gulp.task('watch',function(){
	//监听文件修改，当文件修改的时候执行csssass
	gulp.watch('src/sass/*.sass',['csssass'])
})
//gulp.task('default'),定义默认任务
//在命令行运行gulp，即是启动了csssass和watch两个任务
gulp.task('default',['csssass','watch'])


