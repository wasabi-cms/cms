module.exports = function(grunt) {
  "use strict";

  // measures the time each task takes
  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);
  require('babelify');

  grunt.initConfig({

    //-------------------------------------------- STYLE PROCESSING --------------------------------------------------//
    sass: {
      dev: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'src/Assets/_build/css/cms.compiled.dev.css': 'src/Assets/sass/styles.scss'
        }
      },
      prod: {
        options: {
          sourceMap: false
        },
        files: {
          'src/Assets/_build/css/cms.compiled.prod.css': 'src/Assets/sass/styles.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')()
        ]
      },
      dev: {
        files: {
          'src/Assets/_build/css/cms.dev.css': 'src/Assets/_build/css/cms.compiled.dev.css'
        }
      },
      prod: {
        files: {
          'src/Assets/_build/css/cms.prod.css': 'src/Assets/_build/css/cms.compiled.prod.css'
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
          'src/Assets/_build/css/cms.min.css': 'src/Assets/_build/css/cms.prod.css'
        }
      }
    },

    //--------------------------------------------- JS PROCESSING ----------------------------------------------------//
    eslint: {
      app: {
        src: ['src/Assets/js/**/*.js'],
        options: {
          quiet: true
        }
      }
    },
    browserify: {
      cms: {
        src: [
          'src/Assets/js/module.js',
        ],
        dest: 'src/Assets/_build/js/cms.js',
        options: {
          debug: true,
          transform: [
            ['babelify', {
              presets: [
                ['es2015'/*, { modules: 'commonjs' }*/]
              ],
              parserOpts: {
                sourceType: 'module'
              }
            }]
          ]
        }
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      cms: {
        files: {
          'src/Assets/_build/js/cms.min.js': ['src/Assets/_build/js/cms.js']
        }
      }
    },
    copy: {
      js: {
        files: [
          { src: 'src/Assets/_build/js/cms.js', dest: 'webroot/js/cms.js' },
          { src: 'src/Assets/_build/js/cms.min.js', dest: 'webroot/js/cms.min.js' }
        ]
      },
      css: {
        files: [
          { src: 'src/Assets/_build/css/cms.dev.css', dest: 'webroot/css/cms.css' },
          { src: 'src/Assets/_build/css/cms.min.css', dest: 'webroot/css/cms.min.css' }
        ]
      }
    },

    //----------------------------------------------- WATCHERS -------------------------------------------------------//
    watch: {
      sass: {
        files: ['src/Assets/sass/**/*.scss'],
        tasks: ['sass', 'postcss', 'cssmin', 'copy:css']
      },
      js: {
        files: ['src/Assets/js/**/*.js'],
        tasks: ['browserify', 'uglify', 'copy:js']
      }
    }

  });

  //--------------------------------------------- REGISTERED TASKS ---------------------------------------------------//
  grunt.registerTask('eslint-run', [
    'eslint'
  ]);

  grunt.registerTask('watch-sass', [
    'watch:sass'
  ]);

  grunt.registerTask('watch-js', [
    'watch:js'
  ]);

  grunt.registerTask('build-js', [
    'eslint-run',
    'browserify',
    'uglify',
    'copy:js'
  ]);

  grunt.registerTask('dev-js', [
    'browserify',
    'copy:js'
  ]);
};
