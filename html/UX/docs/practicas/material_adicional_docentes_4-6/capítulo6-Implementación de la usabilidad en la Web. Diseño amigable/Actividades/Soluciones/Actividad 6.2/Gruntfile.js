// Gruntfile.js
module.exports=function(grunt) {

// Loading
// Actividad 6.2
// Many tasks
[
 'grunt-html',
 'grunt-contrib-clean',
 'grunt-contrib-cssmin',
 'grunt-contrib-htmlmin',
 'grunt-contrib-uglify',
 'grunt-processhtml'
].forEach(function (g) {
	grunt.loadNpmTasks(g);
});

// Configuration
grunt.initConfig({
    clean : {
    	target1 : {
        	src : [ 'src/**/*.*~', 'dist/*', 'stage/*']
    	}
	},
cssmin: {
  minify: {
    files: [{
      expand: true,
      cwd: 'src/css',
      src: ['**/*.css', '!**/*.min.css'],
      dest: 'dist/css',
      ext: '.min.css'
    }]
  },
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  combine: {
    files: {
      'dist/css/app.min.css': ['src/css/*.min.css', 'dist/css/*.css']
    }
  }
},
htmlmin: {
  dist : {                                     // Task
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'stage/index.html'     // 'destination': 'source'
      }
  }
 },
 uglify: {
	target1: {
		files : {
			'dist/js/app.min.js':  ['src/js/jquery.js','src/js/bootstrap.js','src/js/custom.js','!src/**/*.min.js'],
		}
  }
 },
 processhtml: {
	options: {
	},
	dist : {
		files: {
		  'stage/index.html': ['src/index.html']
		}
	}
 }
});

// Default task
grunt.registerTask('default',['clean','cssmin','uglify','processhtml','htmlmin']);

};
