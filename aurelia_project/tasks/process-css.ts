import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';
import * as postcss from 'gulp-postcss';
import * as autoprefixer from 'autoprefixer';

export default function processCSS() {
    let processors = [
      autoprefixer({ browsers: ['last 2 version', '> 1%'] })
    ];

  return gulp.src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(build.bundle());
};
