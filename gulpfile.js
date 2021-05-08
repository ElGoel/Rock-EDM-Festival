const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Funcion que compila SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(  ) {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded'
        }))
        .pipe( dest('./build/css') )
}

function minificarcss() {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }))
        .pipe( dest('./build/css') )
}

function javascript() {
    return src(paths.js)
        .pipe( concat('bundle.js'))
        .pipe( dest('./build/js'))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({ message: 'Imagenes Minificadas'}));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Versión webP lista'}));
}

function watchArchivos() {
    watch( paths.scss, css );
    watch(paths.js, javascript);
}// el simbolo * llama a todos los archivos con una sola extención
// de la carpeta actual, **/* recorrera todos los archivos de todas las carpetas
exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos );
// function css( done ) {
//     console.log('compilando... SASS');

//     done();
// }

// function javascript( done ) {
//     console.log('compilando... JavaScript');

//     done();
// }

// function minificarHTNL( done ) {
//     console.log('Minificando...')

//     done();
// }

// exports.css = css;
// exports.javascript = javascript;
// exports.default = parallel( css, javascript, minificarHTNL );
// // series: permite ejecutar varias funciones en un solo exports en orden de izquierda a derecha