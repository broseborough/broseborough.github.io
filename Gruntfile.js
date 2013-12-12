module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'main.min.js': ['components/jquery.min.js','components/**/*.js', 'main.js']
        }
      }
    },
    less: {
      options: {
        compress: true
      },
      dist: {
        files: {
          'main.min.css': ['components/reset.min.less','main.less']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['uglify', 'less']);

};