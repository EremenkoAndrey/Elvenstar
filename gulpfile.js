var gulp = require('gulp'),
        rigger = require('gulp-rigger'),
        postcss    = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        less = require('gulp-less');

var path = {
    src: {
        template: [
            './dev/index.html',
            './dev/section.html',
            './dev/element.html'
        ],
        less: './dev/styles.less',
        js: './dev/common.js'
    },
    build: {
        template: './public_html/',
        less: './public_html/css/',
        js: './public_html/js/'
    },
    watch: {
        html: './dev/**/*.html',
        less: ['./dev/**/*.less',
                './dev/**/*.css'],
        js: './dev/**/*.js'
    }
};

gulp.task('template', function () {
    gulp.src(path.src.template)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.template));
});

gulp.task('css', function () {
    gulp.src(path.src.less)
        .pipe(less())
        .pipe(postcss([
            autoprefixer({
                browsers: ['> 1%', 'IE 9', 'IE 10', 'IE 11']
            })
        ]))
        .pipe(gulp.dest(path.build.less));
});

gulp.task('js', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('default', function () {
    gulp.watch([path.watch.js], ['js']);
    gulp.watch([path.watch.html], ['template']);
    gulp.watch([path.watch.less], ['css']);
});