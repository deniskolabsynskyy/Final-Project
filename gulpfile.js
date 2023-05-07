const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMinify = require('gulp-css-minify');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const Swal = require('sweetalert2');
const swiper = require('swiper');


const buildHtml = () => {
    return gulp.src(['*.html', 'pages/**/*.html'])
        .pipe(gulp.dest('build/'));
};

const buildStyles = () => {
    return gulp.src('css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
};

const buildScript = () => {
    return gulp.src('js/*.js')
        // .pipe(ts({
        //     noImplicitAny:true,
        //     outFile:"script.js",
        // }))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
};

const buildCart = () => {
    return gulp.src('js/*.js')
        .pipe(js({
            noImplicitAny:true,
            outFile:"script.js",
        }))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
};

const buildImages = () => {
    return gulp.src('images/*.png')
        .pipe(gulp.dest('build/images/'))
};

const build = () => {
    buildHtml();
    buildScript();
    buildStyles();
    buildImages();
};

const start = () => {
    build();
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })
    gulp.watch('js/**/*.js', buildScript);
    gulp.watch('css/**/*.scss', buildStyles);
    gulp.watch(['pages/**/*.html', 'index.html'], buildHtml).on('change', browserSync.reload)
};

exports.build = build;
exports.buildStyles = buildStyles;
exports.default = start;