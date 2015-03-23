var gulp = require('gulp'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    css = require('gulp-minify-css');
    
gulp.task('js', function() {
  var browserified = transform(function(filename) {
    return browserify({entries: filename}).bundle();
  });

  return gulp.src('./statics/js/main.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('css', function() {
  return gulp.src('./statics/css/**/*.css')
    .pipe(css({keepBreaks: false}))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['js', 'css']);
