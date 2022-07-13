const gulp = require("gulp");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

function scripts() {
	return gulp
		.src("./src/dist/js/index.js")
		.pipe(terser())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("./src/dist/js"));
}
exports.default = scripts;
