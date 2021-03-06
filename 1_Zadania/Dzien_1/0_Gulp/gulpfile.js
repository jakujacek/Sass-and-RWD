var gulp = require( "gulp" );
var watch = require( "gulp-watch" );
var sass = require( "gulp-sass" );

gulp.task( "sass", function(){
  return gulp.src("src/scss/style.scss")
  .pipe( sass().on("error", sass.logError) )
  .pipe( sass() )
  .pipe( gulp.dest( "css" ) )
});

gulp.task( "watch", function(){
  gulp.watch( "src/scss/**/*.scss", ["sass"] );
})
