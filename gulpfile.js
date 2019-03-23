const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', done => {
    //노드 소스
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
        .on('end', function() {
            console.log('done node es6');
        });
    //브라우저 소스
    gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'))
        .on('end', function() {
            console.log('done public es6');
        });

    done();
});
