let gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    webpack = require("webpack")

// Compile css : "gulp sass"
gulp.task('sass', () => {
    return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/assets/css'))
})

// Webpack.config
gulp.task('script', () => {
    return gulp.src('./src/assets/javascripts/**/*.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('./public/assets/js/'))
})

// Start Server
gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    })

    gulp.watch("./src/assets/javascripts/**/*.js", gulp.series('script'))

    gulp.watch("./public/assets/js/**/*.js").on('change', browserSync.reload)
    gulp.watch("./public/assets/image/**/*.svg").on('change', browserSync.reload)
    gulp.watch("./public/assets/css/**/*.css").on('change', browserSync.reload)
    gulp.watch("./public/*.html").on('change', browserSync.reload)
})