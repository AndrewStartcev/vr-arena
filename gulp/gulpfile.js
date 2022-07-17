const gulp = require('gulp')

const serve = require('../gulp/tasks/serve')
const pug2html = require('../gulp/tasks/pug2html')
const styles = require('../gulp/tasks/style')
const script = require('../gulp/tasks/script')
const fonts = require('../gulp/tasks/fonts')
const imageMinify = require('../gulp/tasks/imageMinify')
const clean = require('../gulp/tasks/clean')

const dev = gulp.parallel(pug2html, styles, script, fonts, imageMinify)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = gulp.series(build)
