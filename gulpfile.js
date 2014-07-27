/* jshint -W117 */
'use strict';

var gulp = require('gulp'),
		reactify = require('reactify'),
		browserify = require('browserify'),
		webserver = require('gulp-webserver'),
		source = require('vinyl-source-stream');

gulp.task('server', function() {
	gulp.src('./src')
		.pipe(webserver({
			host: 'localhost',
			port: 3000,
			livereload: true
		}));
});

gulp.task('scripts', function() {
	browserify({insertGlobals: true})
		.add('./src/js/main.jsx')
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./src/js'));
});

gulp.task('watch', function() {
	gulp.watch('./src/js/**/*.jsx', ['scripts']);
});

gulp.task('default', ['server', 'watch']);
