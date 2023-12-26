require('dotenv').config();

let mix                  = require('laravel-mix');
let path                 = require('path');
let productionSourceMaps = false;

const themename = 'fumblingwithbuttons';
const homedir   = require('os').homedir();
const domain    = 'fumblingwithbuttons.test';

mix.setPublicPath('');
mix.setResourceRoot('dist');

mix.webpackConfig({
    stats: {
        children: true,
    },
});

mix.autoload({
   jquery : ['$', 'window.$', 'window.jQuery']
})
.js('assets/scripts/app.js', 'dist/scripts')
.sass('assets/styles/app.scss', 'dist/styles')
.version()
.browserSync({
  proxy : 'fumblingwithbuttons.test',
  files : [
    '**/*.html',
    'dist/**/*.css',
    'assets/**/*.js'
  ]
})
.copyDirectory('assets/images/', 'dist/images')
.copyDirectory('assets/sounds/', 'dist/sounds')
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {}
});