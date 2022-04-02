const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compile() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(dest(["css"]));
}

function watchFile() {
  watch(["sass/**/*.scss"], compile);
}

exports.default = series(compile, watchFile);
