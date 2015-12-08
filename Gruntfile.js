module.exports = function(grunt) {
  "use strict";

  // measures the time each task takes
  require('time-grunt')(grunt);

  var excludeModules = [
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'purl',
    'bootstrap.dropdown',
    'common/BaseView',
    'common/BaseViewFactory',
    'jquery.eventMagic',
    'jquery.scrollParent',
    'jquery.livequery',
    'jquery.nSortable',
    'jquery.tSortable',
    'bootstrap.dropdown',
    'wasabi'
  ];

  grunt.initConfig({

    //-------------------------------------------- STYLE PROCESSING --------------------------------------------------//
    less: {
      compile: {
        options: {
          sourceMap: true
        },
        files: {
          'webroot/css/cms.css': 'src/Assets/less/cms.less'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      cms: {
        files: {
          'webroot/css/cms.min.css': 'webroot/css/cms.css'
        }
      }
    },

    //--------------------------------------------- JS PROCESSING -----------------------------------------------------//
    jshint: {
      cms: [
        'package.json',
        'Gruntfile.js',
        'src/Assets/js/**/*.js'
      ]
    },
    bowerRequirejs: {
      all: {
        rjsConfig: './src/Assets/js/common.js',
        options: {
          baseUrl: './src/Assets/js/'
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          // Define our base URL - all module paths are relative to this
          // base directory.
          baseUrl: 'src/Assets/js',

          // Define our build directory. All files in the base URL will be
          // COPIED OVER into the build directory as part of the
          // concatentation and optimization process.
          dir: 'src/Assets/_build/js/',

          // Load the RequireJS config() definition from the config.js file.
          // Otherwise, we'd have to redefine all of our paths again here.
          mainConfigFile: 'src/Assets/js/common.js',
          findNestedDependencies: true,

          fileExclusionRegExp: /^\.|\.md$|^LICENSE$|\.json$|^src$|\.map$|^demo$|^test$|^tests$|\.TXT$|\.txt$|^fonts$|^css$|\.css$|^less$|\.less$|^grunt$|\.sh$|^r.js$/,

          // Define the modules to compile.
          modules: [
            {
              name: 'common',
              exclude: excludeModules
            },
            // Main cms module.
            // All basic resources, vendor files will be included here automatically.
            {
              name: 'wasabi.cms',
              include: [
                'common',
                'wasabi.cms'
              ],
              exclude: excludeModules
            }
          ],

          // Minify all js files via uglify2 and set DEBUG to false during the build.
          // This way you can use statements like:
          //      if (DEBUG) {
          //        console.log('foobar')
          //      }
          // during development (Configure::write('debug', 2))
          // which will be excluded from the build.
          optimize: 'uglify2',
          uglify2: {
            compress:{
              global_defs: {
                DEBUG: false
              }
            }
          }
        }
      }
    },
    copy: {
      js: {
        files: [
          { src: 'src/Assets/_build/js/cms.js', dest: 'webroot/js/cms.js' }
        ]
      }
    },

    //----------------------------------------------- WATCHERS -------------------------------------------------------//
    watch: {
      less: {
        files: ['src/Assets/less/**/*.less'],
        tasks: ['less:compile', 'cssmin:core']
      }
    }

  });

  //--------------------------------------------- REGISTERED TASKS ---------------------------------------------------//
  grunt.registerTask('default', [
    'less:compile',
    'cssmin:cms',
    'jshint:cms',
    'requirejs:compile',
    'copy:js'
  ]);

  grunt.registerTask('watch2', [
    'watch:less'
  ]);

  require('jit-grunt')(grunt);
};
