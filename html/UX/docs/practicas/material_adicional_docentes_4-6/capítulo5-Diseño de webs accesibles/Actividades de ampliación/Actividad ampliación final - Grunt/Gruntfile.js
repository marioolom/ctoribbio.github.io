// Gruntfile.js
module.exports=function(grunt) {

// Loading
// One task: grunt.loadNpmTasks('grunt-contrib-jshint');
// Many tasks
[
 'grunt-html',
 'grunt-accessibility'
].forEach(function (g) {
	grunt.loadNpmTasks(g);
});

// Configuration
grunt.initConfig({
  htmllint: {
    all: ["src/*.html"]
  },
  accessibility: {
    options: {
      accessibilityLevel: 'WCAG2A'
    },
    test: {
      src: ['src/*.html']
    }
 }
});

// Default task
grunt.registerTask('default',['htmllint','accessibility']);
};
