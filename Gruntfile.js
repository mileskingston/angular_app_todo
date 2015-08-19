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
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'sass',
        'cssmin',
        'watch',
    ]);
};
