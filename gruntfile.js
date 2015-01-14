(function(){'use strict';}());

module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        // Task configuration
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {
                    navigator: true,
                    document: true,
                    window: true,
                    console: true,
                    module: true,
                    angular: true,
                    Modernizr: true,
                    $: true,
                    moment: true,
                    mockData: true,
                    MockData: true
                }
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            },
            src: {
                src: ['src/components/**/*.js', 'src/page/**/*.js']
            }
        },
        concat: {
            sass: {
                src: [
                    'src/bower_components/reset-css/reset.css',
                    'src/bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'src/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                    'src/bower_components/icomoon/dist/css/style.css',
                    'src/components/**/*.variables.scss',
                    'src/components/**/*.scss'
                ],
                dest: 'tmp/framework.cat.scss'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/framework.min.css': 'tmp/framework.cat.scss',
                    'dist/page/index.min.css': 'src/page/index.scss',
                    'dist/page/photography.min.css': 'src/page/photography.scss',
                    'dist/page/projects.min.css': 'src/page/projects.scss',
                    'dist/page/videos.min.css': 'src/page/videos.scss',
                }
            }
        },
        uglify: {
            framework: {
                files: {
                    'dist/framework.min.js': [
                        //'src/ThirdParty/google_analytics.js',
                        'src/bower_components/modernizr/modernizr.js',
                        'src/bower_components/jquery/dist/jquery.min.js', 
                        'src/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'src/ThirdParty/**/*.js',
                        'src/components/**/*.js'
                    ]
                }
            },
            page: {
                expand: true,
                cwd: 'src/page/',
                src: ['**/*.js'],
                dest: 'dist/page/',
                ext: '.min.js'
            }
        },
        copy: {
            bootstrap_fonts: {
                src: 'fonts/**/*',
                dest: 'dist/',
                expand: true,
                cwd: 'src/bower_components/bootstrap/dist/'
            },
            icomoon: {
                src: 'fonts/**/*',
                dest: 'dist/',
                expand: true,
                cwd: 'src/bower_components/icomoon/dist'
            },
            fonts: {
                src: 'fonts/**/*',
                dest: 'dist/',
                expand: true,
                cwd: 'src/'
            },
            images: {
                src: 'images/**/*',
                dest: 'dist/',
                expand: true,
                cwd: 'src/'
            }
        },
        watch: {
            options: {
                livereload:true
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'nodeunit']
            },
            uglifyFramework: {
                files: ['bower_components/**/*.js', 'src/components/**/*.js'],
                tasks: ['jshint', 'uglify:framework']
            },
            uglifyPage: {
                files: 'src/page/**/*.js',
                tasks: ['jshint', 'uglify:page']

            },
            sass: {
                files: ['<%= concat.sass.src %>', 'src/page/**/*.scss'],
                tasks: ['concat:sass','sass']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['jshint', 'concat', 'sass', 'uglify', 'copy']);
};
