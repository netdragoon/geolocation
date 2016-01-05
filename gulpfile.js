var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var tsc  = require('gulp-typescript-compiler');
var notify = require('gulp-notify');
var del = require('del');
var useStrict = require('use-strict')

var src = ['ts/**/*.ts'];

gulp.task('clean', function(cb) 
{ 
  del(['build'], cb);
});

gulp.task('scripts', function()
{
    
    gulp.src(src) 
        .pipe(tsc())        
        .pipe(gulp.dest('js/'))
        .pipe(notify({ message: 'Finished TypeScript Render Javascript'}));
        
});

gulp.task('default', ['clean','scripts']);