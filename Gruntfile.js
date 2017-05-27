module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  sass: {
    dist: {
      files: {
        'css/main.css': 'css/main.scss'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

// Default task(s).
grunt.registerTask('default', ['sass']);
};