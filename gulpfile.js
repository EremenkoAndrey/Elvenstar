// SET NODE_ENV=dev && gulp dev или npm start
// SET NODE_ENV=prod && gulp build


var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-cssmin'),
    replace = require('gulp-replace'),
    base64 = require('postcss-base64'),
    nunjucks = require('gulp-nunjucks'),
    uglify = require('gulp-uglify'),
    webpack = webpack = require('webpack-stream'),
    wpconfig = require("./webpack.config");

var path = {
    src: {
        template: [
            './dev/index.html',
            './dev/section.html',
            './dev/element.html',
            './dev/personal.html'
        ],
        less: [
            './dev/styles.less'
        ],
        js: ['./dev/common.js',
             './dev/js/load/*.js'],
        nunj: './dev/js/templ/*.nunj'
    },
    build: {
        template: './public_html/',
        less: './public_html/css/',
        js: './public_html/js/',
        nunj: './dev/js/templ/precompiled/'
    },
    watch: {
        html: [
            './dev/**/*.html',
            '!./dev/app/*.html',
            '!./dev/app/**/*.html'
        ],
        less: ['./dev/**/*.less'],
        js: ['./dev/blocks/**/*.js',
            './dev/js/*.js',
            './dev/js/load/*.js'],
        nunj: './dev/js/templ/*.nunj'
    },
    prod: {
        src: {
            css: './public_html/css/styles.css',
            js: './public_html/js/*.js',
            imgs: './dev/images/*'
        },
        build: {
             // css: 'Z:/elvenstar/public_html/bitrix/templates/elvenstar/',
             // js: 'Z:/elvenstar/public_html/bitrix/templates/elvenstar/js/',
             // imgs: 'Z:/elvenstar/public_html/bitrix/templates/elvenstar/images/'
            css: 'C:/BitrixMain/www/bitrix/templates/elvenstar/',
            js: 'C:/BitrixMain/www/bitrix/templates/elvenstar/js/',
            imgs: 'C:/BitrixMain/www/bitrix/templates/elvenstar/images/'
        }
    }
};

gulp.task('app:styles', function () {
    return gulp.src([
        './dev/app/*.less',
        './dev/app/**/*.less'])
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
        .pipe(gulp.dest(function(file){
            return file.base;
        }));
});

gulp.task('template', function () {
    gulp.src(path.src.template)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.template));
});

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
        .pipe(gulp.dest(path.build.less));
});

gulp.task('nunj', function () {
    return gulp.src(path.src.nunj)
        .pipe(nunjucks.precompile())
        .pipe(gulp.dest(path.build.nunj));
});

gulp.task('js', ['nunj'], function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('prod:css', ['css'], function () {
    return gulp.src(path.prod.src.css)
        .pipe(replace('../images/', 'images/'))
        .pipe(cssmin())
        .pipe(rename("template_styles.css"))
        .pipe(gulp.dest(path.prod.build.css));
});

gulp.task('prod:images', function () {
    gulp.src(path.prod.src.imgs)
        .pipe(gulp.dest(path.prod.build.imgs));
});

gulp.task('prod:js', ['js'], function () {
    gulp.src(path.prod.src.js)
        .pipe(uglify())
        .pipe(rename(function (path) {
            if(path.basename === 'common') {
                path.basename = 'main';
            }
            path.basename += ".min";
        }))
        .pipe(gulp.dest(path.prod.build.js));
});

gulp.task("webpack", function(callback) {
    return gulp.src([
        './dev/app/polyfills.ts',
        './dev/app/vendor.ts',
        './dev/app/main.ts'
    ])
        .pipe(webpack(wpconfig))
        .pipe(gulp.dest('public_html/app'));
});

gulp.task('watch', function () {
    gulp.watch([path.watch.js, path.watch.nunj], ['js']);
    gulp.watch([path.watch.html], ['template']);
    gulp.watch([path.watch.less], ['css','app:styles']);
});

gulp.task('dev', ['app:styles', 'watch', 'webpack']);

gulp.task('build', ['app:styles', 'webpack']);

gulp.task('prod', ['prod:css', 'prod:images', 'prod:js', 'webpack']);

// gulp.task('default', function () {
//     gulp.watch([path.watch.js, path.watch.nunj], ['prod:js']);
//     gulp.watch([path.watch.html], ['template']);
//     gulp.watch([path.watch.less], ['prod:css']);
// });