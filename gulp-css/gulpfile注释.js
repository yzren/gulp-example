//获取gulp
var gulp =require('gulp');
//获取gulp-minify-css 用于压缩css
var minifyCss=require('gulp-minify-css');

//定义压缩css的任务，命令行运行gulp css即可
gulp.task('css',function(){
	//1、文件原路径
	gulp.src('src/css/**/*.css')
		//2、压缩css文件
		.pipe(minifyCss())
		//3、压缩后css文件存放的目标路径，会自动生成dist文件夹，无需创建
		.pipe(gulp.dest('dist/css/'))
})

//定义监听任务，命令行运行gulp watch 即可，每当操作css时候命令行贿出现提示
gulp.task('watch',function(){
	gulp.watch('src/css/**/*.css',['css'])
})

//定义默认任务，命令行运行 gulp default 即可同时执行gulp css 和 gulp watch
gulp.task('default',['css','watch'])