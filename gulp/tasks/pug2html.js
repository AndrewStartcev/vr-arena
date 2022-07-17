const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')

module.exports = function pug2html() {
  return gulp.src('../src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({ pretty: { beautifyHtml: true } }))
    .pipe(gulp.dest('../build'))
}
