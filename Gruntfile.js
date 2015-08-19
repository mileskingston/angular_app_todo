module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: [ 
                    ['css/**', 'sass/**'],
                ],
                tasks: ['sass', 'cssmin']
            },
            // js: {
            //     files: [ 
            //         'js/**',
            //     ],
            //     tasks: ['uglify']
            // },
        },
        cssmin: {
          target: {
            files: {
              'css/main.css': ['css/normalize.css', 'css/main.css']
            }
          }
        },
        sass: {
            dist: {
                options: {
                    noCache: true,
                    style: 'compact',
                    sourcemap: 'none',
                },
                files: {
                    'css/main.css': 'sass/style.scss'
                }
            }
        },
        // uglify: {
        //     my_target: {
        //         files: {
        //             'js/plugins.min.js' : ['js/plugins.js']
        //         }
        //     }
        // },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'sass',
        'cssmin',
        // 'uglify',
        'watch',
    ]);
};
