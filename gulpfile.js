var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var factorbundle = require('factor-bundle');


var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

var bundler = watchify(browserify({
  entries: ['./src/index.jsx' ,
            './src/page-one.jsx' 
            ],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
})
.plugin(factorbundle, {
        // File output order must match entry order
        o: ['./js/index.js' ,
            './js/page-one.js' 
            ]
    })
);

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('common.js'))
    .pipe(gulp.dest('./js'))
}
bundler.on('update', bundle);

gulp.task('build', function() {
  bundle()
});

gulp.task('serve', function(done) {
  gulp.src('')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/common.js/.test(filePath)) {
            cb(true)
          } else if(/css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
  //  .pipe(concat('css/style.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['build', 'serve', 'sass', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


