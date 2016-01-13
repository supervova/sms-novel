'use strict';

/*
|-------------------------------------------------------------------------------
| Install plugins:
| npm install grunt-postcss grunt-uncss grunt-browser-sync grunt-contrib-cssmin grunt-newer  grunt-contrib-imagemin grunt-svgmin grunt-contrib-htmlmin grunt-contrib-uglify --save-dev
|
| The newer task doesn't require any special configuration. To use it, just add
| newer as the first argument when running other tasks.
| grunt.registerTask('minify', ['newer:uglify']);
|-------------------------------------------------------------------------------
*/

module.exports = function (grunt) {

  var config = {
    src: 'src',
    dist: './',
    srcCSS: 'lp-winter-2016.css',
    srcCSStargetHTML: 'ac/10-knig-novy-god-lyubov/index.html',
    srcCSS2: 'lp-winter-2016-sem.css',
    srcCSStargetHTML2: 'ac/romance-2015/index.html'
  };

  grunt.initConfig({

    config: config,

    /*
    |---------------------------------------------------------------------------
    | PostCSS: github.com/nDmitry/grunt-postcss
    |---------------------------------------------------------------------------
    */
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

    /*
    |---------------------------------------------------------------------------
    | UnCSS: github.com/addyosmani/grunt-uncss
    |---------------------------------------------------------------------------
    */

    uncss: {
      dist: {
        options: {
          htmlroot: './'
        },
        files: {
          'a/css/<%= config.srcCSS %>': ['<%= config.srcCSStargetHTML %>'],
          'a/css/<%= config.srcCSS2 %>': ['<%= config.srcCSStargetHTML2 %>']
        }
      }
    },


    /*
    |---------------------------------------------------------------------------
    | CSSmin: github.com/gruntjs/grunt-contrib-cssmin
    |---------------------------------------------------------------------------
    */
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'a/css',
          src: ['<%= config.srcCSS %>', '<%= config.srcCSS2 %>'],
          dest: 'a/css'
        }]
      }
    },

    /*
    |---------------------------------------------------------------------------
    | browserSync: github.com/BrowserSync/grunt-browser-sync
    |---------------------------------------------------------------------------
    */
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

    /*
    |---------------------------------------------------------------------------
    | Imagemin: github.com/gruntjs/grunt-contrib-imagemin
    |---------------------------------------------------------------------------
    */
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'a/img',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: 'a/img'
        }]
      }
    },

    /*
    |---------------------------------------------------------------------------
    | SVGmin
    |---------------------------------------------------------------------------
    */
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'a/img',
          src: '**/*.svg',
          dest: 'a/img'
        }]
      }
    },

    /*
    |---------------------------------------------------------------------------
    | HTMLmin
    |---------------------------------------------------------------------------
    */
    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeEmptyAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.src %>/ac/',
          src: '**/*.html',
          dest: '<%= config.dist %>/ac/'

          // expand: true,
          // cwd: '<%= config.dist %>',
          // src: '**/*.html',
          // dest: '<%= config.dist %>'
        }]
      }
    },

    /*
    |---------------------------------------------------------------------------
    | Uglify
    |---------------------------------------------------------------------------
    */
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        files: {
          'a/js/scripts-lp.js': ['src/js/*.js']
        }
      }
    },

    /*
    |---------------------------------------------------------------------------
    | Watch
    |---------------------------------------------------------------------------
    */
    watch: {
      css: {
        files: ['src/css/{,*/}*.css'],
        tasks: ['postcss']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    }

  }); // End initial config

  // Load the Grunt plugin we need. It should have been installed through npm
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Start the Server
  grunt.registerTask('serve', 'start the server and preview your app / website', function () {

    grunt.task.run([
      'postcss',
      'browserSync:livereload',
      'watch'
    ]);
  });

  // Images
  grunt.registerTask('default', [
    'newer:imagemin'
  ]);

  // CSS
  grunt.registerTask('css', [
    'postcss',
    'uncss',
    'newer:cssmin'
  ]);

  // Build
  grunt.registerTask('build', [
    'postcss',
    'uncss',
    'newer:cssmin',
    'newer:uglify',
    'newer:imagemin',
    'newer:svgmin',
    'newer:htmlmin'
  ]);

  // Default
  grunt.registerTask('default', ['watch']);

};
