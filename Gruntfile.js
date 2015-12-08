'use strict';

module.exports = function (grunt) {

  var config = {
    unCSS: 'a/css/lp-winter-2016.css',
    unCSStargetHTML: 'ac/10-knig-novy-god-lyubov/index.html'
  };

  grunt.initConfig({

    config: config,

    // PostCSS: github.com/nDmitry/grunt-postcss
    postcss: {
      options: {
        processors: [
          // Vendor prefixes
          require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
          })
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: '*.css',
          dest: 'a/css/'
        }]
      }
    },

    // UnCSS: https://github.com/giakki/uncss/blob/0.12.0/README.md#within-nodejs
    uncss: {
      dist: {
        options: {
          htmlroot: './'
        },
        files: {
          '<%= config.unCSS %>': ['<%= config.unCSStargetHTML %>']
        }
      }
    },

    // CSSmin: github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'a/css',
          src: ['lp-winter-2016.css'],
          dest: 'a/css'
        }]
      }
    },

    browserSync: {
      options: {
        notify: false,
        background: true
      },
      livereload: {
        options: {
          files: [
            '**/*.html',
            'a/css/{,*/}*.css',
            'a/img/**/*',
            'a/js/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: ['./']
          }
        }
      }
    },

    // browserSync: www.browsersync.io/docs/grunt/
    // !! Task executed w/o errors but server doesn't run
    // browserSync: {
    //   dev: {
    //     bsFiles: {
    //       src : 'a/css/*.css'
    //     },
    //     options: {
    //       watchTask: true,
    //       server: './'
    //     }
    //   }
    // },

    watch: {
      styles: {
        files: ['src/css/{,*/}*.css'],
        tasks: ['postcss']
      }
    },

  }); // End initial config

  // Load the Grunt plugin we need. It should have been installed through npm
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Start the Server
  grunt.registerTask('serve', 'start the server and preview your app / website', function () {

    grunt.task.run([
      'postcss',
      'browserSync:livereload',
      'watch'
    ]);
  });

  // Default
  grunt.registerTask('default', [
    'postcss',
    'uncss',
    'cssmin'
  ]);

};
