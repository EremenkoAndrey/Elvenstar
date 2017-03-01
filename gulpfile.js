// SET NODE_ENV=dev && gulp dev или npm start
// SET NODE_ENV=prod && gulp build

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-cssmin'),
    replace = require('gulp-replace'),
    nunjucks = require('gulp-nunjucks'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    base64 = require('postcss-base64');

var path = {
    src: {
        less: [
            './dev/styles.less'
        ],
        js: ['./dev/common.js',
            './dev/js/load/*.js'],
        nunj: './dev/js/templ/*.nunj'
    },
    build: {
        css: 'C:/Bitrix/www/bitrix/templates/elvenstar/',
        js: 'C:/Bitrix/www/bitrix/templates/elvenstar/js/',
        nunj: './dev/js/templ/precompiled/'
    },
    watch: {
        less: ['./dev/**/*.less']
    }
};

gulp.task('css', function () {
    return gulp.src(path.src.less)
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
            }),
            base64({
                extensions: ['.svg']
            })
        ]))
        .pipe(replace('../images/', 'images/'))
        .pipe(cssmin())
        .pipe(rename("template_styles.css"))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('nunj', function () {
    return gulp.src(path.src.nunj)
        .pipe(nunjucks.precompile())
        .pipe(gulp.dest(path.build.nunj));
});

gulp.task('js', ['nunj'], function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(rename(function (path) {
            if(path.basename === 'common') {
                path.basename = 'main';
            }
            path.basename += ".min";
        }))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('watch', function () {
    gulp.watch([path.watch.less], ['css']);
});

gulp.task('default', function () {
    gulp.watch([path.watch.less], ['watch']);
});