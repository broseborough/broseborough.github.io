module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'main.min.js': ['main.js']
        }
      }
    },
    less: {
      dist: {
        files: {
          'main.min.less': ['main.less']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['uglify', 'less']);

};