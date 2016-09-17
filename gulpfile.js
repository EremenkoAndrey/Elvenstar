var gulp = require('gulp'),
        rigger = require('gulp-rigger'),
        postcss    = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        less = require('gulp-less'),
        rename = require("gulp-rename"),
        cssmin = require('gulp-cssmin');;

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
    },
    work: {
        src: {
            css: './public_html/css/styles.css'
        },
        build: {
            css: 'C:/BitrixMain/www/bitrix/templates/elvenstar/'
        }
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
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6']
            })
        ]))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.less));
});

gulp.task('js', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('work', ['work:css'], function () {
});
gulp.task('work:css', function () {
    gulp.src(path.work.src.css)
        .pipe(rename("template_styles.css"))
        .pipe(gulp.dest(path.work.build.css));
});

gulp.task('default', function () {
    gulp.watch([path.watch.js], ['js']);
    gulp.watch([path.watch.html], ['template']);
    gulp.watch([path.watch.less], ['css']);
});