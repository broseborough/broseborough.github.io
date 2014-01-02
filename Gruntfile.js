module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'main.min.js': ['components/jquery.min.js','components/**/*.js', 'main.js'],
          'blog.min.js': ['components/jquery.min.js', 'components/**/*.js', 'blog.js']
        }
      }
    },
    less: {
      options: {
        compress: true
      },
      dist: {
        files: {
          'main.min.css': ['components/reset.min.less','fonts/stylesheet.css', 'main.less']
        }
      }
    },
    watch: {
      dist: {
        files: ['main.js', 'main.less'],
        tasks: ['uglify', 'less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less']);

};