// const plumber = require('gulp-plumber')
// const sass = require('gulp-sass')(require('sass'));
// const cleanCSS = require('gulp-clean-css')
// const sourcemaps = require('gulp-sourcemaps')
// const shorthand = require('gulp-shorthand')

// const gulpStylelint = require('gulp-stylelint')
// const rename = require("gulp-rename")
// const notify = require('gulp-notify');

const gulp = require('gulp')
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

module.exports = function styles() {
  return gulp.src("../src/styles/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(gulp.dest("../build/assets/css"))
    .pipe(browserSync.stream());
  // return gulp.src('../src/styles/*.scss')
  //   .pipe(sass().on('error', notify.onError(
  //     {
  //       message: "<%= error.message %>",
  //       title: "Scss Error!"
  //     }))
  //   )
  //   .pipe(plumber())
  //   .pipe(gulpStylelint({
  //     failAfterError: false,
  //   }))
  //   .pipe(sourcemaps.init())
  //   .pipe(sass())
  //   .pipe(autoprefixer())
  //   .pipe(shorthand())
  //   .pipe(cleanCSS({
  //     debug: true,
  //     compatibility: '*'
  //   }, details => {
  //     console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
  //   }))
  //   .pipe(sourcemaps.write())
  //   .pipe(rename({ suffix: '.min' }))
  //   .pipe(gulp.dest('../build/assets/css'))
}
