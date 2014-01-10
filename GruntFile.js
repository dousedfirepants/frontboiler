/*!
 * frontboiler Gruntfile
 * @author dousedfirepants
 */

'use strict';

/**
 * Grunt Module
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compass/SASS
        compass: {
            dist: {
                options: {
                    sassDir: 'www/d0/sass',
                    cssDir: 'www/d0/css'
                }
            }
        },

        // Concatenation
        concat: {
            scripts: {
                src: [
                    'www/d0/sjs/*.js'
                ],
                dest: 'www/d0/js/index.js'
            },
            css: {
                src: [
                    'www/d0/css/jquery-ui-1.10.3.custom.min.css',
                    'www/d0/css/style.css'
                ],
                dest: 'www/d0/css/dist.css'
            }
        },

        // Minification
        uglify: {
            dist: {
                src: 'www/d0/js/index.js',
                dest: 'www/d0/js/index.min.js'
            }
        },

        // Automated EVERYTHING
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: [
                    'www/src-index.html',
                    'www/min-index.html',
                    'www/index.html'
                ]
            },
            css: {
                files: [
                    'www/d0/sass/*.scss',
                    'www/d0/sass/modules/*.scss',
                ],
                tasks: ['compass', 'concat']
            },
            scripts: {
                files: [
                    'www/d0/sjs/*.js',
                    'www/d0/sjs/entities/*.js',
                    'www/d0/sjs/libs/*.js',
                    'www/d0/sjs/modules/*.js',
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // Compass/SASS
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // JavaScript concatenation
    grunt.loadNpmTasks('grunt-contrib-concat');

    // JavaScript minification
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch', 'concat', 'uglify']);
};
