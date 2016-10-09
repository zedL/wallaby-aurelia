import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import {build} from 'aurelia-cli';
import * as project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS
  ),
  writeBundles,
  gulp.parallel(
    copyScriptsToWeb,
    copyImagesToWeb,
    copyFontsToWeb,
    copyLocalesToWeb
  )
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}

function copyScriptsToWeb() {
  return gulp.src('./scripts/**/*.*')
        .pipe(gulp.dest('./../web/src/web/wwwroot/scripts'));
}

function copyImagesToWeb() {
  return gulp.src('./img/**/*.*')
        .pipe(gulp.dest('./../web/src/web/wwwroot/img'));
}

function copyFontsToWeb() {
  return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('./../web/src/web/wwwroot/fonts'));
}

function copyLocalesToWeb() {
  return gulp.src('./locales/**/*.*')
    .pipe(gulp.dest('./../web/src/web/wwwroot/locales'));
}
