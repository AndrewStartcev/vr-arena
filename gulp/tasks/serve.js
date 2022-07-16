const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const style = require('./style')
const pug2html = require('./pug2html')
const script = require('./script')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: '../build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('../src/assets/img/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
  gulp.watch('../src/assets/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
  gulp.watch('../src/styles/**/*.scss', gulp.series(style, cb => gulp.src('../build/assets/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('../src/assets/js/**/*.js', gulp.series(script, readyReload))
  gulp.watch('../src/pages/**/*.pug', gulp.series(pug2html, readyReload))

  gulp.watch('package.json', gulp.series(readyReload))

  return cb()
}
