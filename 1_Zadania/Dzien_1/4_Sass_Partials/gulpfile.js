var gulp = require( "gulp" );
var watch = require( "gulp-watch" );
var sass = require( "gulp-sass" );
var sourcemaps = require( "gulp-sourcemaps" );


gulp.task( "sass", function(){
  return gulp.src("sass/main.scss")
  .pipe( sourcemaps.init() )
  .pipe( sass().on("error", sass.logError) )
  .pipe( sass({
    outputStyle: "compressed"
  }) )
  .pipe( sourcemaps.write() )
  .pipe( gulp.dest( "css" ) )
});

gulp.task( "watch", function(){
  gulp.watch( "sass/**/*.scss", ["sass"] );
})
