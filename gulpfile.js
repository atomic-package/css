const gulp         = require("gulp"),
      path         = require('path'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin       = require('gulp-cssmin'),
      rename       = require('gulp-rename'),
      watch        = require('gulp-watch'),
      uglify       = require('gulp-uglify'),
      concat       = require('gulp-concat'),
      plumber      = require('gulp-plumber'),
      del          = require('del'),
      runSequence  = require('run-sequence'),
      browserSync  = require("browser-sync"),
      exec         = require('child_process').execSync;

/**
 * File Path
 */
const ROOT        = __dirname;
const SRC_PATH    = path.join(ROOT, './src');
const PUBLIC_PATH = path.join(ROOT, './public');
const DIST_PATH   = path.join(ROOT, './dist');
const DOCS_PATH   = path.join(ROOT, './docs');

// HTML
const HTML_SRC_PATH = path.join(SRC_PATH, 'html');
const HTML_FILES    = path.join(HTML_SRC_PATH, './**/*.html');

// SASS
const SASS_SRC_PATH = path.join(SRC_PATH, 'scss');
const SASS_FILES    = path.join(SASS_SRC_PATH, './**/*.scss');
const CSS_FILES     = path.join(PUBLIC_PATH, './**/*.css');

// Fonts
const fontFiles = [ SRC_PATH + '/fonts/**/**' ];

// Image
const IMG_SRC_PATH = path.join(SRC_PATH, 'image');
const IMG_FILES    = path.join(IMG_SRC_PATH, './**/*.{jpg,gif,png,ico}');

// Clean Task
gulp.task('clean.release', function() {
  return del([CSS_FILES], {force: true});
});

// HTML
gulp.task('html', function() {
  return gulp.src([HTML_FILES]).pipe(gulp.dest(PUBLIC_PATH));
});

// Sass, CSS
gulp.task('sass', function() {
  return gulp.src([SASS_FILES])
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(PUBLIC_PATH));
});

gulp.task('sass.copy.dist', function() {
    return gulp.src([SASS_FILES])
        .pipe(gulp.dest(DIST_PATH));
});

gulp.task('css.prefixer', function() {
  return gulp.src([CSS_FILES])
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 8', 'ios 6', 'android 2.3'],
      cascade: false
    }))
    .pipe(gulp.dest(PUBLIC_PATH));
});

gulp.task('css.min', function() {
  return gulp.src([
      CSS_FILES,
      '!' + PUBLIC_PATH + '/**/*min.css'
    ])
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(PUBLIC_PATH));
});

gulp.task('css.copy.docs', function() {
    return gulp.src([
        PUBLIC_PATH + '/**/*.css'
    ])
        .pipe(gulp.dest(DOCS_PATH));
});

gulp.task('css.copy.dist', function() {
  return gulp.src([
    PUBLIC_PATH + '/**/*.css'
  ])
    .pipe(gulp.dest(DIST_PATH));
});

// Fonts
gulp.task('font.copy', function() {
    return gulp.src(fontFiles)
        .pipe(gulp.dest( PUBLIC_PATH + '/font/' ));
});

gulp.task('font.copy.dist', function() {
    return gulp.src(fontFiles)
        .pipe(gulp.dest( DIST_PATH + '/font/' ));
});

// Image
gulp.task('image', function() {
  return gulp.src([IMG_FILES]).pipe(gulp.dest(PUBLIC_PATH + '/image'));
});

// ファイル更新監視
gulp.task('watch', function() {
  // HTML
  gulp.watch([HTML_FILES], ['html']);

  // SCSS
  gulp.watch([SASS_FILES], ['build.css']);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: "./public",
    files: ["./public/**"],
    port: 8080
  });

  browserSync.reload();
});

/**
 * Build Task
 **/
gulp.task('build.ui', function(callback) {
  return runSequence(
    ['html', 'build.css', 'image', 'build.font'],
    callback
  );
});

gulp.task('build.css', function(callback) {
  return runSequence(
    'sass',
    'css.prefixer',
    'css.min',
    callback
  );
});

gulp.task('build.font', function(callback) {
    return runSequence(
        'font.copy',
        callback
    );
});

/**
 * Dist Task
 **/
gulp.task('dist', function(callback) {
  return runSequence(
      'build.ui',
      'css.copy.dist',
      'css.copy.docs',
      'sass.copy.dist',
      'font.copy.dist',
      callback
  );
});

/**
 * default Task
 **/
gulp.task('default', function(callback) {
  runSequence(
    'build.ui',
    'watch',
    // 'browser-sync',
    callback
  );
});
