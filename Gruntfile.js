module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: 'true',
                    cwd: 'front-end-languages/css',
                    src: '*.scss',
                    dest: 'front-end-languages/css/compiled',
                    ext: '.css'
                }]
            }
        },

        // TODO: Fix grunt watch
        watch: {
            sass: {
                files: ['**/*.scss']
            },
            tasks: ['sass']
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', [
        'sass',
        'watch'
    ]);
};
