'use strict';

var util = require('util');

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: 'conf/.jshintrc'
			},
			main: {
				src: [
					'public/app/directives/*.js',
					'public/app/directives/**/*.js',
					'public/app/filters/*.js',
					'public/app/filters/**/*.js',
					'public/app/services/*.js',
					'public/app/services/**/*.js',
					'public/app/views/**/*.js',
					'public/app/app.js',
					'Gruntfile.js'
				]
			}
		},
		htmlhint: {
			all: {
				options: {
					'htmlhintrc': 'conf/.htmlhintrc'
				},
				src: [
					"public/index.html",
					"public/app/views/**/*.html",
					"public/app/directives/*.html",
					"public/app/directives/**/*.html"
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-htmlhint');

	grunt.registerTask('html', ['htmlhint']);
	grunt.registerTask('js', ['jshint']);

	grunt.registerTask('validate', ['jshint', 'htmlhint']);
};