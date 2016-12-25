// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

var runSequence = require('run-sequence');

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('styles/**/*.scss', ['sass']); 
  gulp.watch('**/*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    }
  })
})

gulp.task('sass', function(){
  return gulp.src('styles/main.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('vendor-prefix', function () {
    var processors = [
	  autoprefixer,
	  cssnext,
	  precss
	];
    return gulp.src('styles/main.css')
        .pipe(postcss(processors))
        .pipe(cssnano())
        .pipe(gulp.dest('styles'));
});

gulp.task('useref', function(){
  return gulp.src('**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', function(callback) {
  runSequence('sass' ,'vendor-prefix', 'useref', callback);
});