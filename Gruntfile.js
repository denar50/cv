module.exports = function(grunt) {

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {

      options: {
        banner: '(function() {',
        separator: '\n /*-------------------------------------------------------*/ \n',
        footer: '})();'
      },

      app: {
        src: [
            'app/modules/modules.js',
            'app/modules/mainCtrl.js',
            'app/filters/*.js',
            'app/services/*.js',
            'app/**/controller.js',
            'app/**/*directive.js'
        ],
        dest: 'dist/cv.app.js'
      },
    },

    uglify: {
      js: {
        options: {
            preserveComments: false
        },
        files: {
            'dist/cv.app.js': ['dist/cv.app.js']
        }
      }
    },

    sass: {
      options: {
        includePaths: ['node_modules/foundation-sites/scss', 'bower_components/foundation-icon-fonts']
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        tasks: ['sass'],
        files: 'scss/**/*.scss'
      },
      js: {
        options: {
          spawn: false,
          livereload: true
        },
        tasks: [
          'concat:app'
        ],
        files: [
          '<%= concat.app.src %>',
        ]
      }
    }

    /*processhtml: {
      options: {
        data: {
          version: 9
        }
      },
      api: {
        files: {
          '../api/agreele/templates/index.html': ['../api/agreele/templates/index.html']
        }
      },
      web: {
        files: {
          'index.html': ['index.html']
        }
      },
      dev: {
        files: {
          '../api/agreele/templates/index.html': ['app/index.html'],
          'index.html': ['app/index.html']
        }
      },
      testing: {
        files: {
          '../api/agreele/templates/index.html': ['app/index.html'],
          'index.html': ['app/index.html']
        }
      },
      release: {
        files: {
          '../api/agreele/templates/index.html': ['app/index.html'],
          'index.html': ['app/index.html']
        }
      }
    }*/

  });
  grunt.registerTask('build', ['sass', 'concat']);
  grunt.registerTask('release', ['build', 'uglify']);
  /*grunt.registerTask('view', ['processhtml:web', 'processhtml:api']);

  grunt.registerTask('unify', ['sass', 'concat']);

  grunt.registerTask('build', ['unify', 'processhtml:dev', 'view']);

  grunt.registerTask('release', ['unify', 'uglify', 'processhtml:release', 'view']);

  grunt.registerTask('testing', ['unify', 'processhtml:testing', 'view']);

  grunt.registerTask('default', ['build', 'watch']);*/
};
