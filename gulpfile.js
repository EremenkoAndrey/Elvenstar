var gulp = require('gulp'),
        rigger = require('gulp-rigger'),
        less = require('gulp-less');

var path = {
    src: {
        template: [
            './dev/index.html',
            './dev/section.html'
        ],
        less: './dev/styles.less'
    },
    build: {
        template: './public_html/',
        less: './public_html/css/'
    },
    watch: {
        html: './dev/**/*.html',
        less: './dev/**/*.less'
    }
};


gulp.task('css', function () {
    gulp.src(path.src.less)
        .pipe(less())
        .pipe(gulp.dest(path.build.less));
});

gulp.task('default', function () {
    gulp.watch([path.watch.html], ['template']);
    gulp.watch([path.watch.less], ['css']);
});