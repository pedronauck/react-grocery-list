/* jshint -W117 */
'use strict';

var gulp = require('gulp'),
		browserify = require('browserify'),
		webserver = require('gulp-webserver'),
		reactify = require('reactify'),
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
	return browserify({
		insertGlobals: true,
		entries: ['./src/js/main.jsx'],
		transform: ['reactify'],
		extensions: ['.jsx']
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./src/js'));
});

gulp.task('watch', function() {
	gulp.watch('./src/js/**/*.{jsx,js}', ['scripts']);
});

gulp.task('default', ['server', 'watch']);
