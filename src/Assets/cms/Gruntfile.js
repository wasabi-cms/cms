const webpackConfig = require('./config/webpack.js');

module.exports = function(grunt) {
  "use strict";

  // measures the time each task takes
  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);
  require('babelify');

  grunt.initConfig({

    //------------------------------------------------- Webpack ------------------------------------------------------//
    webpack: {
      options: {
        stats: true
      },
      prod: webpackConfig,
      dev: webpackConfig
    },
    uglify: {
      options: {
        mangle: true
      },
      default: {
        files: {
          'dist/tree.min.js': ['dist/tree.js'],
          'dist/vendor.min.js': ['dist/vendor.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      default: {
        files: {
          'dist/tree.min.css': 'dist/tree.css'
        }
      }
    },
    copy: {
      dev: {
        files: [
          { src: 'dist/tree.css', dest: '../../../webroot/css/tree.css' },
          { src: 'dist/tree.css.map', dest: '../../../webroot/css/tree.css.map' },
          { src: 'dist/tree.js', dest: '../../../webroot/js/tree.js' },
          { src: 'dist/tree.js.map', dest: '../../../webroot/js/tree.js.map' },
          { src: 'dist/vendor.js', dest: '../../../webroot/js/vendor.js' },
          { src: 'dist/vendor.js.map', dest: '../../../webroot/js/vendor.js.map' }
        ]
      },
      prod: {
        files: [
          { src: 'dist/tree.min.css', dest: '../../../webroot/css/tree.min.css' },
          { src: 'dist/tree.min.js', dest: '../../../webroot/js/tree.min.js' },
          { src: 'dist/vendor.min.js', dest: '../../../webroot/js/vendor.min.js' }
        ]
      }
    },

    //----------------------------------------------- WATCHERS -------------------------------------------------------//
    watch: {
      vue: {
        files: ['src/**/*.vue', 'src/**/*.js'],
        tasks: ['webpack-dev']
      }
    }

  });

  //--------------------------------------------- REGISTERED TASKS ---------------------------------------------------//
  grunt.registerTask('webpack-dev', [
    'webpack:dev',
    'copy:dev'
  ]);

  grunt.registerTask('webpack-prod', [
    'webpack:prod',
    'uglify',
    'cssmin',
    'copy:prod'
  ]);

  grunt.registerTask('watch-vue', [
    'watch:vue'
  ]);
};
