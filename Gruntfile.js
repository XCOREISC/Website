

module.exports = function (grunt) {
  'use strict';
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9001,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      target: {
        files: ['index.html']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);
};
