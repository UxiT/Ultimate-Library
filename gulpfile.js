let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./ParSite/frontend/static/frontend/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./ParSite/frontend/static/frontend"))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch("./ParSite/frontend/static/frontend/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
